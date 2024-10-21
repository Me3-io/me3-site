import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tweet } from "react-tweet";
import Data from "@data/sections/latest-posts.json";

const API_URL = "https://d3u1cbh7eyco5j.cloudfront.net/api/code/lasttwitts";

const LatestPostsSection = () => {
  const [dataTweets, setDataTweets] = useState([]);

  const getTweets = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response?.data?.data?.length && response?.data?.status === "ok") {
        setDataTweets(response.data.data.slice(0, Data.numOfItems));
      }
    } catch (error) {
      console.error("Error fetching tweets: ", error);
    }
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <section className="me3-section gap-top-70" id="news">
      <div className="container">
        <div className="me3-heading align-center gap-bottom-40">
          <div className="me3-subtitle-1">
            <span dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
          </div>
          <h2 className="me3-title-2">
            <span dangerouslySetInnerHTML={{ __html: Data.title }} />
          </h2>
        </div>
        <div className="row">
          {dataTweets.map((item, key) => (
            <div key={`latest-post-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="me3-blog-item">
                <div className="desc" data-theme="dark">
                  <Tweet id={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*<div className="align-center">
          <Link className="me3-btn me3-hover-btn" href={Data.button.link}>
            <i className="arrow">
              <span />
            </i>
            <span>{Data.button.label}</span>
          </Link>
        </div>*/}
      </div>
    </section>
  );
};

export default LatestPostsSection;
