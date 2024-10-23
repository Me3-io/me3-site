import Data from "@data/sections/about.json";
import { ButtonAnimated, ButtonDefault } from "../button";

const AboutSection = () => {
  return (
    <>
      {/* Me3 About */}
      <section className="me3-section gap-bottom-140" id="gachagalaxy">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-12">
                  {/* Heading */}
                  <div className="me3-heading gap-bottom-40">
                    <div className="me3-subtitle-1">
                      <span>{Data.subtitle}</span>
                    </div>
                    <h2 className="me3-title-2">
                      <span dangerouslySetInnerHTML={{ __html: Data.title }} />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="row">
                {Data.items.map((item, key) => (
                  <div key={`about-item-${key}`} className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
                    <h5 className="text-uppercase">{item.title}</h5>

                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    {item.button !== undefined && (
                      <a className="me3-btn me3-hover-btn" href={item.button.link}>
                        <i className="arrow">
                          <span />
                        </i>
                        <span>{item.button.label}</span>
                      </a>
                    )}
                  </div>
                ))}
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
                <ButtonAnimated href={"https://beta.gachagalaxy.me3.io"} text={"Play"} />
                <ButtonDefault
                  href={"https://airtable.com/appZ8JrBCaa4Rvqk2/pag0Qf6ueTbRVqgqg/form"}
                  text={"Partner With Us"}
                />
              </div>
            </div>

            <div className="tokyo col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <video autoPlay loop muted playsInline poster="/images/tokyo-poster.webp">
                <source src="/images/tokyoanimate.webm" type="video/webm" />
                <source src="/images/tokyoanimate.mp4" type="video/mp4" />
                <source src="/images/tokyoanimate.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
