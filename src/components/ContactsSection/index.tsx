import { WhatsAppContainer } from "../ContactsContainer";
import { SiWhatsapp } from "react-icons/si";

export const Contats = (): JSX.Element => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center border bg-gray-950 border-red-500">
      <div className="flex h-5/6 w-3/5 flex-row border border-lime-400">
        <div className="border border-orange-600 h-full w-1/2" >
          <h2 className="w-2/3 text-2xl">
            Vamos transformar suas ideias em realidade. Entre em contato!
          </h2>
        </div>
        <div>
          <WhatsAppContainer />
        </div>
      </div>
    </section>
  );
};
