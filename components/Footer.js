export default function Footer(){
    return (
        <div>
          <div className="max-w-screen-sm mx-auto text-center">
            Copyright 2022{" "}
            <b>
              {" "}
              <a href="https://ayivugwe.editorx.io/ayivugwekabemba">
                Ayivugwe Kabemba.
              </a>
            </b>{" "}
            All rights reserved.
          </div>
          <div className="max-w-screen-sm mx-auto text-center">
            Niliri ku{" "}
            <a
              className="text-red-500 txt-xs"
              href="https://www.instagram.com/Ibufuliiru/"
            >
              Instagram
            </a>{" "}
            na ku{" "}
            <a
              className="text-red-500 txt-xs"
              href="https://twitter.com/AyivugweKabemba"
            >
              Twitter
            </a>{" "}
            na ku{" "}
            <a
              className="text-red-500 txt-xs"
              href="https://www.facebook.com/Ibufuliiru/"
            >
              Facebook
            </a>
          </div>
          <div className="max-w-screen-sm mx-auto text-center">
            Developed using Nextjs and deployed on Vercel. The CMS is on DatoCMS
          </div>
        
        </div>
    );
}