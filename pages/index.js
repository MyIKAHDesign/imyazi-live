import Head from "next/head";
import { request } from "../lib/datocms";
import { Image, useQuerySubscription } from "react-datocms";
import TimeAgo from "react-timeago";
import ReactMarkdown from "react-markdown";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  const graphqlRequest = {
    query: `
      query HomePage($limit: IntType) {
        posts: allPosts(first: $limit, orderBy:_firstPublishedAt_DESC) {
          id
          content
          _firstPublishedAt
          photos {
            responsiveImage(imgixParams: {auto: [format]}) {
              ...imageFields
            }
          }
          author {
            name
            avatar {
              responsiveImage(imgixParams: {auto: [format], w: 60}) {
                ...imageFields
              }
            }
          }
        }
      }

      fragment imageFields on ResponsiveImage {
        aspectRatio
        base64
        height
        sizes
        src
        srcSet
        width
        alt
        title
      }
    `,
    variables: { limit: 10 },
  };

  return {
    props: {
      subscription: {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
      },
    },
  };
}

export default function Home({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  return (
    <div>
      <Navbar />
      <div className="text-gray-700 body-font py-12 bg-gray-100 px-10">
        <Head>
          <title>
            Tulonge imyazi ye Kifuliiru, Bafuliiru, Ibufuliiru na hoshi na
            byooshi ikiri miduutu miduutu mu Kifuliiru
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
         <div className="max-w-screen-sm mx-auto text-center mt-20 mb-12">
          {status === "connecting" ? (
            <div>Tugweti tugalooza imyazi...</div>
          ) : status === "connected" ? (
            <div className="flex flex-col md:flex-row items-center justify-center">
              <span className="flex h-3 w-3 relative mb-3 md:mb-0 md:mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <span>
                Ino myazi yooshi mubwini hano hofi yo mihyahya tugweti!
              </span>
            </div>
          ) : (
            <div>Twayuusa</div>
          )}
        </div>

        {error && (
          <div className="max-w-screen-sm my-12 mx-auto">
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              Error: {error.code}
            </h1>
            <div className="my-5">{error.message}</div>
            {error.response && (
              <pre className="bg-gray-100 p-5 mt-5 font-mono">
                {JSON.stringify(error.response, null, 2)}
              </pre>
            )}
          </div>
        )}

        <div className="max-w-screen-sm mx-auto my-12">
          {data && (
            <TransitionGroup>
              {data.posts.map((post) => (
                <CSSTransition
                  key={post.id}
                  classNames={{
                    enter: "post-enter",
                    enterActive: "post-enter-active",
                    exit: "post-exit",
                    exitActive: "post-exit-active",
                  }}
                  timeout={{ enter: 1200, exit: 1200 }}
                >
                  <div>
                    <div className="shadow-xl rounded-lg overflow-hidden bg-white">
                      {post.photos.map((photo) => (
                        <Image
                          key={photo.responsiveImage.src}
                          className="w-full"
                          data={photo.responsiveImage}
                        />
                      ))}
                      {post.content && (
                        <div className="p-4 md:p-8 md:text-xl content">
                          <ReactMarkdown children={post.content} />
                        </div>
                        
                      )}
                      {
                       <div className="mt-4 grid grid-cols-2 text-xs md:text-sm text-gray-500 md:px-8 items-center pb-12">
                       <div className="flex items-center">
                         <div className="w-8 h-8 relative">
                           <Image
                             className="rounded-full mr-2 shadow"
                             layout="fill"
                             data={post.author.avatar.responsiveImage}
                           />
                         </div>
                         <div className="pl-2">{post.author.name}</div>
                       </div>
                       <div className="text-right">
                         <TimeAgo date={post._firstPublishedAt} />
                       </div>

                       <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Longa guno mwazi</span>
</button>

                     </div> 
                      }
                    </div>
                    <div className="mt-4 grid grid-cols-2 text-xs md:text-sm text-gray-500 md:px-8 items-center pb-12">
                      <div className="flex items-center">
                        <div className="w-8 h-8 relative">
                          <Image
                            className="rounded-full mr-2 shadow"
                            layout="fill"
                            data={post.author.avatar.responsiveImage}
                          />
                        </div>
                        <div className="pl-2">{post.author.name}</div>
                      </div>
                      <div className="text-right">
                        <TimeAgo date={post._firstPublishedAt} />
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
