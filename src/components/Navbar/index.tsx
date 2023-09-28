export const NavbarLinks = (): JSX.Element => {
  return (
    <nav className="flex w-2/4 items-center justify-between bg-red-600 font-medium">
      <a className="text-2xl" href="#inicio" role="button">
        Início
      </a>

      <a className="text-2xl" href="#projetos" role="button">
        Projetos
      </a>

      <a className="text-2xl" href="#contatos" role="button">
        Contatos
      </a>

      <a className="text-2xl" href="midiasSciais" role="button">
        Mídias Sociais
      </a>
    </nav>
  );
};
