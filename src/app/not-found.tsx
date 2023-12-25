"use client"
import { NextPage } from "next"
import Link from "next/link"

// ! RESOLVER A ESTILIZAÇÃO
const NotFound: NextPage = (): JSX.Element => {
  return (
    <>
      <div className="bg-green-600 min-h-screen min-w-full">
        <h1>Oopps! Não encontramos essa página</h1>
        <p>Esta ação parece não ter sido intencional, pois esse portifólio é construído em uma única página com links externos para negavação</p>
        <p>Mas fique tranquilo você pode voltar para o portifólio sem problemas!</p>
        <Link href="/" aria-label="Botão voltar para o início">Volte a explorar</Link>
      </div>
    </>
  )
}

export default NotFound