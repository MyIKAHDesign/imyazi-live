export default function Ibufuliiru(){
    return (
        <div className="text-gray-700 body-font py-12 bg-gray-100 px-10">
     
      <Head>
        <title>Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru. Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru" />
        <meta name="description" content="Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru. Kifuliiru. Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na byooshi ikiri miduutu miduutu mu Kifuliiru" />
        
      </Head>

      <div className="max-w-screen-sm mx-auto text-center">
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
          Ibufuliiru mu Kifuliiru
       </h3>
      </div>

      <br/>

      <div className="max-w-screen-sm mx-auto text-center">
 
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Tulonge imyazi ye'Bufuliiru mu Kifuliiru. Menya ibimudetwa ku bufuliiru mu Kifuliiru.
        </p>    
      </div>

      <div className="max-w-screen-sm mx-auto text-center mt-20 mb-12">
        {status === 'connecting' ? (
          <div>Tugweti tugalooza imyazi...</div>
        ) : status === 'connected' ? (
          <div className="flex flex-col md:flex-row items-center justify-center">
            <span className="flex h-3 w-3 relative mb-3 md:mb-0 md:mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <span>Ino myazi yooshi mubwini hano hofi yo mihyahya tugweti!</span>
          </div>
        ) : (
          <div>Twayuusa</div>
        )}
      </div>

      <div className="max-w-screen-sm mx-auto my-12">
        <p>Ibufuliiru</p>
      </div>
      <footer>
        <div className="max-w-screen-sm mx-auto text-center">
        Copyright 2022 <b> <a href='https://ayivugwe.editorx.io/ayivugwekabemba'>Ayivugwe Kabemba.</a></b>  All rights reserved.
          </div>
          <div className="max-w-screen-sm mx-auto text-center">
        Niliri ku <a className='text-red-500 txt-xs' href="https://www.instagram.com/Ibufuliiru/">Instagram</a> na ku  <a className='text-red-500 txt-xs' href='https://twitter.com/AyivugweKabemba'>Twitter</a> na ku  <a className='text-red-500 txt-xs' href='https://www.facebook.com/Ibufuliiru/'>Facebook</a> 
        </div>
          <div className="max-w-screen-sm mx-auto text-center">
            Developed and Deployed using DatoCMS and Vercel in Next.js.
          </div>
      </footer>
    </div>
  
    );
}



