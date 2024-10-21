import Data from "@data/sections/partners.json";

const PartnersSection = ({ paddingTop }) => {
  return (
    <>
      {/* Me3 Brands */}
      <section className={paddingTop ? "me3-section gap-top-10" : "me3-section gap-bottom-70"} id="partners">
        <div className="container">
          {/* Heading */}
          <div className="me3-heading gap-bottom-40">
            <div className="me3-subtitle-1">
              <span dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
            </div>
            <h2 className="me3-title-2">
              <span dangerouslySetInnerHTML={{ __html: Data.title }} />
            </h2>
          </div>

          {/* Brands items */}
          <div className="row gap-row">
            {Data.items.map((item, key) => (
              <div
                key={`partners-item-${key}`}
                className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3"
                style={{ marginTop: "0px" }}
              >
                <div className="me3-brands" data-me3-overlay data-me3-scroll>
                  <span className="image">
                    <img
                      src={item.src}
                      alt={item.src}
                      width={"1800"}
                      height={"680"}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
