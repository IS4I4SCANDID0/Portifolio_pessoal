import { WhatsAppContainer } from "../ContactsContainer";
import { SiWhatsapp } from "react-icons/si"

export const Contats = (): JSX.Element => {
  return (
    <section className="bg-alternate-gradient flex h-96 w-screen flex-row items-center justify-center border border-red-500">
      <div className="w-3/5 self-start border border-lime-400">
        <div className="w-1/2">
          <h2 className="w-2/3 text-2xl">
            Vamos transformar suas ideias em realidade. Entre em contato!
          </h2>
          <div>
            <WhatsAppContainer Icon={SiWhatsapp} size={80} />
          </div>
        </div>
      </div>
    </section>
  );
};
