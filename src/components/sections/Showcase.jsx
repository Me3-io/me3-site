import Data from "@data/sections/showcase.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { showcaseHover } from "@common/utilits";
import { ButtonAnimated, ButtonDefault } from "../button";

const ShowcaseSection = ({ projects }) => {
  useEffect(() => {
    showcaseHover();
  }, []);

  return (
    <>
      {/* Me3 Showcase */}
      <section
        className="me3-section gap-bottom-70"
        id="partner"
        style={{ borderBottom: "1px solid #555", marginBottom: "70px" }}
      >
        <div className="container">
          {/* Heading */}
          <div className="me3-heading gap-bottom-40">
            <div className="me3-subtitle-1">
              <span>{Data.subtitle}</span>
            </div>
            <h2 className="me3-title-2">
              <span>{Data.title}</span>
            </h2>
          </div>

          {/* Showcase */}
          <div className="me3-showcase gap-bottom-40">
            <div className="img-circle me3-circle-move" />

            {/* Showcase items */}
            <div className="me3-showcase-items">
              {projects?.slice(0, Data.numOfItems).map((item, key) => (
                <div key={`showcase-item-${key}`} className="me3-showcase-item">
                  <div className="category">
                    <a href={`https://beta.gachagalaxy.me3.io`}>
                      <span data-splitting data-me3-scroll>
                        <span>{item.category}</span>
                      </span>
                    </a>
                  </div>
                  <h3 className="title">
                    <a href={`#partner`}>
                      <span className="me3-lnk" data-splitting data-me3-scroll>
                        {item.title}
                      </span>
                    </a>
                  </h3>
                  <div className="image" data-me3-overlay data-me3-scroll>
                    <img
                      src={item.src}
                      alt={item.src}
                      width={"1024"}
                      height={"1024"}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*
          <Link className="me3-btn me3-hover-btn" href={`https://gachagalaxy.me3.io`}>
            <i className="arrow">
              <span />
            </i>
            <span>Play</span>
          </Link>

          <Link
            className="me3-btn me3-hover-btn"
            href={`https://airtable.com/appZ8JrBCaa4Rvqk2/pag0Qf6ueTbRVqgqg/form`}
            style={{ marginLeft: "1rem" }}
          >
            <i className="arrow">
              <span />
            </i>
            <span>Partner With Us</span>
          </Link>
           */}
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <ButtonAnimated href="https://gachagalaxy.me3.io" text={"Play"} />
            <ButtonDefault
              href={"https://airtable.com/appZ8JrBCaa4Rvqk2/pag0Qf6ueTbRVqgqg/form"}
              text={"Partner With Us"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowcaseSection;
