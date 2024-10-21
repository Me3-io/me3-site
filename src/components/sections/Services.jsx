import Data from "@data/sections/services.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { servicesHover } from "@common/utilits";

const ServicesSection = () => {
  useEffect(() => {
    servicesHover();
  }, []);

  return (
    <>
      {/* Me3 Services */}
      <section className="me3-section gap-top-140 gap-bottom-140">
        <div className="container-xl">
          <div className="me3-subtitle-1">Dive into Gacha Galaxy</div>
          {/* Services items */}
          <div className="row me3-services-grid-fw">
            {Data.items.map((item, key) => (
              <div key={`services-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
                <div
                  className={
                    key === 1
                      ? "me3-service-grid-item me3-hover-1 active active--default"
                      : "me3-service-grid-item me3-hover-1"
                  }
                >
                  <div className="image">
                    <a href={item.link}>
                      <img
                        src={item.src}
                        alt={item.src}
                        width={"1024"}
                        height={"1024"}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                  </div>
                  <h5 className="me3-title-3">
                    <a href={item.link}>
                      <span>{item.title}</span>
                    </a>
                  </h5>
                  <div className="me3-text">
                    <div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
