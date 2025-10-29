import React from 'react'
import { RouterProvider, useRouteContext, Link } from './router.jsx'
import Home from './pages/Home'
import Contato from './pages/Contato'

const routes = {
  '/': <Home />,
  '/contato': <Contato />,
}

function Shell() {
  const { path } = useRouteContext()

  const linkStyle = {
    padding: '8px 12px',
    textDecoration: 'none',
    borderRadius: 8,
    fontWeight: 600,
    background: '#f3f4f6',
    marginRight: 8
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 900, margin: '40px auto' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ marginRight: 16 }}>Minha SPA</h1>
        <nav>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/contato" style={linkStyle}>Contato</Link>
        </nav>
      </header>

      <main>
        {routes[path] ?? <NotFound />}
      </main>

      <footer style={{ marginTop: 32, color: '#6b7280' }}>
        <small>React + History API (sem libs)</small>
      </footer>
    </div>
  )
}

function NotFound() {
  return (
    <section>
      <h2>404 (client-side)</h2>
      <p>Rota não encontrada. Tente <a href="/">voltar à Home</a>.</p>
    </section>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  )
}
