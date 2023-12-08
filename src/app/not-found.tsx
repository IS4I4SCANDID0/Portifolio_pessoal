import { NextPage } from "next"
import Link from "next/link"

const NotFoundPage: NextPage = (): JSX.Element => {
  return (
    <main className="bg-slate-600">
      <h1>Oopps! Não encontramos essa página</h1>
      <p>Esta ação parece não ter sido intencional, pois esse portifólio é construído em uma única página com links externos para negavação</p>
      <p>Mas fique tranquilo você pode voltar para o portifólio sem problemas!</p>
      <Link href="/" aria-label="Botão voltar para o início">Volte a explorar</Link>
    </main>
  )
}

export default NotFoundPage