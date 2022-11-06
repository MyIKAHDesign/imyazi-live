import Head from "next/head";
import DefaultContainer from "../components/DefaultContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Ibufuliiru() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="text-gray-700 body-font py-12 bg-gray-100 px-10">
        <Head>
          <title>
            Ibufuliiru. Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku
            bufuliiru
          </title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Ibufuliiru."
          />
          <meta
            name="description"
            content="Ibufuliiru. Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru. Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
          />
          <meta
            name="description"
            content="Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru. Kifuliiru. Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
          />
        </Head>
      </div>
      <DefaultContainer/>
      <Footer />
    </div>
  );
}
