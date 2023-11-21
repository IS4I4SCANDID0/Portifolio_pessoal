"use client"
import Link from "next/link";

const NotFoundPage = (): JSX.Element => {
  return (
    <main className={`body bg-gray-500`}>
      <div className="bg-red-700">
        <h1 className="text-slate-500">Oops! Erro 404</h1>
        <p>Não conseguimos encontrar a página pesquisada</p>
        <Link
          href={"/"}
          className={`custom-gradient rounded-3xl text-lg font-medium`}
        >
          Voltar
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
