import React from 'react'

/**
 * Roteador mínimo usando History API (sem libs).
 * - Mantém o path atual em estado.
 * - Intercepta cliques em <a data-link> para SPA.
 * - Responde ao back/forward com popstate.
 */

export function useRoute() {
  const [path, setPath] = React.useState(window.location.pathname)

  React.useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = React.useCallback((to) => {
    if (to !== path) {
      window.history.pushState({}, '', to)
      setPath(to)
    }
  }, [path])

  return { path, navigate }
}

// Link SPA: usa data-link para evitar full reload
export function Link({ to, children, style }) {
  const { navigate } = useRouteContext()
  const onClick = (e) => {
    // Ctrl/Meta abre em nova aba normalmente
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={onClick} data-link style={style}>
      {children}
    </a>
  )
}

// Contexto para compartilhar navigate/path
const RouterContext = React.createContext(null)

export function RouterProvider({ children }) {
  const value = useRoute()
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouteContext() {
  const ctx = React.useContext(RouterContext)
  if (!ctx) throw new Error('useRouteContext precisa estar dentro de <RouterProvider>')
  return ctx
}
