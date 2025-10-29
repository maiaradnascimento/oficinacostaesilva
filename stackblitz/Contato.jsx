export default function Contato() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Fale com a gente: contato@exemplo.com</p>
      <form style={{ display: 'grid', gap: 8, maxWidth: 360, marginTop: 12 }}>
        <input placeholder="Seu nome" />
        <input placeholder="Seu email" type="email" />
        <textarea placeholder="Mensagem" rows={4} />
        <button type="button">Enviar</button>
      </form>
    </section>
  )
}
