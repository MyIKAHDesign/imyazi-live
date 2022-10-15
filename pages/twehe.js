import Head from "next/head";
import DefaultContainer from "../components/DefaultContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Twehe() {
  return (
    <div>
      <Navbar />

      <Head>
        <title>
          Menya bingi ku Twehe. Tuliri Bafuliiru, Bana be'Bufuliiru. Umufuliiru Ashobwiri.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
        />
        <meta
          name="description"
          content="Kifuliiru. Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
        />
        <meta
          name="description"
          content="Ibufuliiru. Tulonge imyazi ye Bufuliiru, Bafuliiru, na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
        />
        <meta
          name="description"
          content="Congo. Tulonge imyazi ye Congo, Bafuliiru, na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
        />
        <meta
          name="description"
          content="Twehe. Longa imyazi mingi ku guno mukolwa. Tuliri Bafuliiru, tolozizi tuhise hala indeto yitu Kifuliiru."
        />
        <meta
          name="description"
          content="Bafuliiru. Tulonge imyazi ye Bufuliiru, Bafuliiru, na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru"
        />
        <meta
          name="description"
          content="Imikolwa yitu. Tulonge imyazi ye mikolwa ya'Bafuliiru mu Kifuliiru namu zindi ndeto zooshi. Imikolwa kwoshi kwo yangaba iliri. Tuyegerere tumenye bingi. Konbwa bweneene"
        />
      </Head>

      <DefaultContainer />

      <Footer />
    </div>
  );
}
