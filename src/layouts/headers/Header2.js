import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { headerSticky } from "@common/utilits";

const Header2 = ({ darkHeader, cartButton }) => {
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "dropdown-link";

    if (item.children !== 0) {
      s_class1 += "menu-item-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  const [desktopMenu, desktopMenuToggle] = useState(false);

  const clickedDesktopMenu = (e) => {
    e.preventDefault();
    desktopMenuToggle(!desktopMenu);

    const menuPopup = document.querySelector(".me3-menu-popup");
    const menuContainer = document.querySelector(".me3-menu-container");
    const menuBody = document.querySelector("body");
    const menuHeader = document.querySelector(".me3-header");
    const menuButton = document.querySelector(".me3-menu-btn");

    if (desktopMenu) {
      menuBody.classList.remove("me3--noscroll");
      menuHeader.classList.remove("header--active");
      menuPopup.classList.remove("menu--ready");
      menuContainer.classList.add("me3--noscroll");
      menuButton.parentNode.classList.add("me3--notouch");
      let timer1 = setTimeout(function () {
        menuPopup.classList.remove("menu--open");
      }, 300);
      let timer2 = setTimeout(function () {
        menuButton.parentNode.classList.remove("me3--notouch");
        menuPopup.classList.remove("menu--visible");
      }, 1600);
    } else {
      menuBody.classList.add("me3--noscroll");
      menuHeader.classList.add("header--active");
      menuPopup.classList.add("menu--visible");
      menuPopup.classList.add("menu--open");
      menuButton.parentNode.classList.add("me3--notouch");
      let timer3 = setTimeout(function () {
        menuButton.parentNode.classList.remove("me3--notouch");
        menuContainer.classList.remove("me3--noscroll");
        menuPopup.classList.add("menu--ready");
      }, 600);
    }
  };
  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle("opened");
  };

  useEffect(() => {
    headerSticky();
  }, []);

  return (
    <>
      {/* Header */}
      <header className="me3-header header--white">
        <div className="header--builder">
          <div className="container">
            <div className="row">
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center">
                {/* Logo */}
                <div className="me3-logo-image" style={{ maxWidth: "70px" }}>
                  <a href="/">
                    <img src={appData.header.logo.image} alt={appData.header.logo.alt} />
                    <img className="logo--white" src={appData.header.logo.image_white} alt={appData.header.logo.alt} />
                  </a>
                </div>
              </div>
              <div className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-6 align-self-center align-center m-align-right">
                {/* Menu Horizontal */}
                <div className="me3-menu-horizontal">
                  <ul className="me3-menu-nav">
                    {navItems.map((item, key) => (
                      <li key={`header-nav-item-${key}`} className={item.classes}>
                        <a
                          className={item.children ? "me3-lnk lnk--active me3-dropdown-toggle" : "me3-lnk lnk--active"}
                          onClick={item.children !== 0 ? (e) => clickedMobileMenuItemParent(e) : ""}
                          href={item.link}
                        >
                          {item.label}
                        </a>
                        {item.children !== 0 && <i className="icon fas fa-chevron-down" />}
                        {item.children !== 0 && (
                          <ul className="sub-menu">
                            {item.children.map((subitem, key) => (
                              <li key={`header-nav-sub-item-${key}`}>
                                <a className="me3-lnk lnk--active" href={subitem.link}>
                                  {subitem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Menu Hamburger */}
                <a
                  href="#"
                  className={desktopMenu ? "me3-menu-btn btn--active" : "me3-menu-btn"}
                  style={{ display: "none" }}
                  onClick={(e) => clickedDesktopMenu(e)}
                >
                  <span />
                </a>

                <div className="me3-menu-popup align-left">
                  <div className="me3-menu-overlay"></div>
                  <div className="me3-menu-overlay-after"></div>
                  <div className="me3-menu-container me3--noscroll">
                    <div className="container">
                      <div className="me3-menu">
                        <ul className="me3-menu-nav">
                          {navItems.map((item, key) => (
                            <li key={`header-nav-item-${key}`} className={item.classes}>
                              <a
                                className={
                                  item.children ? "me3-lnk lnk--active me3-dropdown-toggle" : "me3-lnk lnk--active"
                                }
                                onClick={item.children !== 0 ? (e) => clickedMobileMenuItemParent(e) : ""}
                                href={item.link}
                              >
                                {item.label}
                              </a>
                              {item.children && <i className="icon fas fa-chevron-down" />}
                              {item.children !== 0 && (
                                <ul className="sub-menu">
                                  {item.children.map((subitem, key) => (
                                    <li key={`header-nav-sub-item-${key}`}>
                                      <a className="me3-lnk lnk--active" href={subitem.link}>
                                        {subitem.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center align-right hide-on-mobile-extra">
                {/* Button */}
                <a className="me3-btn me3-hover-btn btn--active" href={appData.header.button2.link}>
                  <span>{appData.header.button2.label}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header2;
