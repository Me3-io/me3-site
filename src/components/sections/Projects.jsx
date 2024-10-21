import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Data from "@data/sections/projects.json";
import appData from "@data/app.json";

const ProjectsSection = ({ projects }) => {
  const categories = appData.settings.portfolio.categories;

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".me3-portfolio-items", {
        itemSelector: ".me3-portfolio-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".me3-portfolio-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);

    let filterNavActive = document.querySelectorAll(".me3-filter-nav-active");

    filterNavActive.forEach((item) => {
      item.style.width = item.parentNode.querySelector(".item--active").parentNode.offsetWidth + 6 + "px";
    });
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".js-me3-filter li");

    filterLinks.forEach((filter) => {
      const filterValue = filter.querySelector("button").getAttribute("data-filter");
      if (filterValue === key) {
        filter.querySelector("button").classList.add("item--active");
      } else {
        filter.querySelector("button").classList.remove("item--active");
      }
    });

    const activeItem = document.querySelector(".me3-filter.filter--default .item--active");
    const activeFilterNav = document.querySelector(".me3-filter.filter--default .me3-filter-nav-active");

    if (activeFilterNav !== undefined) {
      let current_pos = activeItem.parentNode.offsetLeft;
      let current_width = activeItem.parentNode.offsetWidth;

      activeFilterNav.style.width = current_width + 6 + "px";
      activeFilterNav.style.left = current_pos - 3 + "px";
    }
  };

  return (
    <>
      {/* Me3 Projects */}
      <section className="me3-section gap-top-140 gap-bottom-140" id="partner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
              {/* Heading */}
              <div className="me3-heading gap-bottom-40">
                <div className="me3-subtitle-1">
                  <span dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
                </div>
                <h2 className="me3-title-2">
                  <span dangerouslySetInnerHTML={{ __html: Data.title }} />
                </h2>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right hide-on-mobile">
              {/* Button */}
              <a className="me3-btn me3-hover-btn" href={Data.button.link}>
                <i className="arrow">
                  <span />
                </i>
                <span>{Data.button.label}</span>
              </a>
            </div>
          </div>

          {/* Projects Side */}
          <div className="me3-portfolio portfolio--side">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                {/* Filter projects */}
                <div className="me3-filter-container">
                  <div className="me3-filter js-me3-filter">
                    <ul>
                      <li>
                        <button
                          onClick={handleFilterKeyChange("*")}
                          className="me3-filter-item item--active"
                          type="button"
                          data-filter="*"
                        >
                          <span className="me3-lnk" data-splitting data-me3-scroll>
                            All Projects
                          </span>
                        </button>
                      </li>
                      {categories.map((item, key) => (
                        <li key={`categories-item-${key}`}>
                          <button
                            onClick={handleFilterKeyChange(item.slug)}
                            className="me3-filter-item"
                            type="button"
                            data-filter={item.slug}
                          >
                            <span className="me3-lnk" data-splitting data-me3-scroll>
                              {item.label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                {/* Projects items */}
                <div className="row me3-portfolio-items">
                  {projects.slice(0, Data.numOfItems).map((item, key) => (
                    <div
                      key={`projects-item-${key}`}
                      className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 me3-portfolio-col ${item.category_slug}`}
                    >
                      <div className="me3-portfolio-item">
                        <div className="image" data-me3-overlay data-me3-scroll>
                          <a href="" className="me3-hover-3">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            >
                              <source src={item.mp4} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                        </div>
                        <div className="desc">
                          <h5 className="title">
                            <a href={`/projects/${item.id}`}>
                              <a className="me3-lnk">
                                <span data-splitting data-me3-scroll>
                                  {item.title}
                                </span>
                              </a>
                            </a>
                          </h5>
                          <div className="text">
                            <div data-splitting data-me3-scroll>
                              <span>{item.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="align-center hide-on-desktop">
                  <a className="me3-btn me3-hover-btn" href={Data.button.link}>
                    <i className="arrow">
                      <span />
                    </i>
                    <span>{Data.button.label}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
