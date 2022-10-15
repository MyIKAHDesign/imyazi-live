import Head from "next/head";
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
            Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku
            bufuliiru
          </title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru. Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
          />
          <meta
            name="description"
            content="Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru. Kifuliiru. Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
          />
        </Head>

        <div className="max-w-screen-sm mx-auto text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
            Ibufuliiru mu Kifuliiru
          </h3>
        </div>

        <br />

        <div className="max-w-screen-sm mx-auto text-center">
          <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku
            bufuliiru mu Kifuliiru.
          </p>
        </div>

        <div className="max-w-screen-sm mx-auto text-center mt-20 mb-12">
          <b>Tulonge imyazi ye'Bufuliiru mu Kifuliiru</b>
        </div>

        <div className="max-w-screen-sm mx-auto my-12">
          <p>Ibufuliiru</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
