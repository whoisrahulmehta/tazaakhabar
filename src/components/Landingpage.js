import { faNewspaper, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useFetch from "./useFetch";
import Skelton from "./Skelton";

function Landingpage({ theme, setTheme }) {
  const BN =
    "https://newsapi.org/v2/top-headlines?" +
    "country=in&" +
    "apiKey=11f071ff8a554b8998e093459b816ca8";

  const WBBC =
    "https://newsapi.org/v2/top-headlines?" +
    "sources=bbc-news&" +
    "apiKey=11f071ff8a554b8998e093459b816ca8";

  const IB =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=11f071ff8a554b8998e093459b816ca8";
  const ENT =
    "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=11f071ff8a554b8998e093459b816ca8";
  const HLTH =
    "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=11f071ff8a554b8998e093459b816ca8";
  const SC =
    "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=11f071ff8a554b8998e093459b816ca8";
  const SPR =
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=11f071ff8a554b8998e093459b816ca8";
  const IT =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=11f071ff8a554b8998e093459b816ca8";

  const channels = [
    { name: "Headlines", value: BN },
    { name: "BBC", value: WBBC },
    { name: "Business", value: IB },
    { name: "Entertainment", value: ENT },
    { name: "Health", value: HLTH },
    { name: "Science", value: SC },
    { name: "Sports", value: SPR },
    { name: "Tech", value: IT },
  ];
  console.log(channels);
  console.log(channels[0]);

  const [url, seturl] = useState(BN);

  //   const req = new Request(url); // this mafe the render too many times back to back
  const { data, isPending, error } = useFetch(url, 2000);
  let newx;

  if (data) {
    newx = data.articles;

    // console.log(news[0].author)
    // console.log(news);
    // console.log(newx);
    //     console.log('new req');
    //     console.log(data.articles[0]);
    // console.log(data.articles[0]);
    // console.log(data.articles[0].content);
    // console.log(data.articles[0].title);
    // console.log(data.articles[0].urlToImage);
    //
  }
  const handleChannel = (prop) => {
    seturl(prop);
    console.log("changging the channel to ", prop);
  };

  return (
    <>
      <div className="App">
        <div className="content">
          <header>
            <p className="icon">
              <FontAwesomeIcon icon={faNewspaper} />
              <a className="switch" onClick={setTheme}>
                {theme === "dark" ? (
                  <span className="icon blue">
                    <FontAwesomeIcon icon={faToggleOn} />
                  </span>
                ) : (
                  <span class="icon orange">
                    <FontAwesomeIcon icon={faToggleOff} />
                  </span>
                )}
              </a>
            </p>
            <p>
              TAZAA<b>खबर</b>
            </p>
          </header>
          <main>
            {isPending ? (
             <>  
             <Skelton theme={theme} />
             <Skelton theme={theme} />
             <Skelton theme={theme} />
             <Skelton theme={theme} />
             <Skelton theme={theme} />
             </>
            ) : (
              newx.map((newsArticle, index) => (
                <section key={index} className="card">
                  <div className={`blurry-${theme} cardimg`}>
                    {newsArticle.urlToImage ? (
                      <img src={`${newsArticle.urlToImage}`} alt="error" />
                    ) : (
                      <p className="notFound">
                        <FontAwesomeIcon icon={faNewspaper} />
                      </p>
                    )}
                  </div>
                  <div className={`blurry-${theme} cardheading`}>
                    <p> {newsArticle.title}</p>
                  </div>
                  <div className={`blurry-${theme} cardbody`}>
                    {newsArticle.description ? (
                      <p>{newsArticle.description}</p>
                    ) : (
                      <p className="notFound">
                        <FontAwesomeIcon icon={faNewspaper} />
                      </p>
                    )}
                    <p className="credits">
                      Credits : {newsArticle.author ? newsArticle.author : ""}
                    </p>

                    <div className="cardend">
                      <a className={`blurry-${theme}`} href={newsArticle.url}>
                        Full Article !
                      </a>
                    </div>
                  </div>
                </section>
              ))
            )}
          </main>
          <footer>
            {channels.map((channel, index) => (
              <div
                className={`cats blurry-${theme}`}
                key={index}
                onClick={() => handleChannel(channel.value)}
              >
                <p>{channel.name}</p>
              </div>
            ))}
          </footer>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
