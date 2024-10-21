import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { headerSticky } from "@common/utilits";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DefaultHeader = ({ darkHeader, cartButton }) => {
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "dropdown-link";

    if (item.children.length > 0) {
      s_class1 += " menu-item-has-children";
    }

    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  const [desktopMenu, desktopMenuToggle] = useState(false);

  const closeMenu = () => {
    desktopMenuToggle(false);

    const menuPopup = document.querySelector(".me3-menu-popup");
    const menuContainer = document.querySelector(".me3-menu-container");
    const menuBody = document.querySelector("body");
    const menuHeader = document.querySelector(".me3-header");
    const menuButton = document.querySelector(".me3-menu-btn");

    menuBody.classList.remove("me3--noscroll");
    menuHeader.classList.remove("header--active");
    menuPopup.classList.remove("menu--ready", "menu--visible", "menu--open");
    menuContainer.classList.remove("me3--noscroll");
    menuButton.parentNode.classList.remove("me3--notouch");
  };

  const clickedDesktopMenu = (e) => {
    e.preventDefault();
    const isMenuOpen = !desktopMenu;
    desktopMenuToggle(isMenuOpen);

    const menuPopup = document.querySelector(".me3-menu-popup");
    const menuContainer = document.querySelector(".me3-menu-container");
    const menuBody = document.querySelector("body");
    const menuHeader = document.querySelector(".me3-header");
    const menuButton = document.querySelector(".me3-menu-btn");

    if (isMenuOpen) {
      menuBody.classList.add("me3--noscroll");
      menuHeader.classList.add("header--active");
      menuPopup.classList.add("menu--visible", "menu--open");
      menuButton.parentNode.classList.add("me3--notouch");
      setTimeout(() => {
        menuPopup.classList.add("menu--ready");
        menuButton.parentNode.classList.remove("me3--notouch");
        menuContainer.classList.remove("me3--noscroll");
      }, 600);
    } else {
      closeMenu();
    }
  };

  /*const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.currentTarget.parentNode.classList.toggle("opened");
  };*/

  const handleLinkClick = (e, link, hasChildren) => {
    if (hasChildren) {
      // Handle links with children (sub-menu)
      e.preventDefault();
      e.currentTarget.parentNode.classList.toggle("opened");
      setTimeout(() => {
        const menuContainer = document.querySelector(".me3-menu-container");
        menuContainer.scrollTop = menuContainer.scrollHeight;
      }, 600);
    } else if (link.startsWith("#")) {
      // Handle anchor links
      closeMenu();
      window.location.href = link; // Navigate to the anchor
    } else {
      // Handle regular links
      closeMenu();
    }
  };

  useEffect(() => {
    headerSticky();
  }, []);

  return (
    <>
      {/* Header */}
      <header className={darkHeader ? "me3-header" : "me3-header header--white"}>
        <div className="header--builder">
          <div className="container">
            <div className="row">
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center">
                {/* Logo */}
                <div className="me3-logo-image" style={{ maxWidth: "70px" }}>
                  <a href="/">
                    <img src={appData.header.logo.image} alt={appData.header.logo.alt} width="120px" />
                    <img
                      className="logo--white"
                      src={appData.header.logo.image_white}
                      alt={appData.header.logo.alt}
                      width="120px"
                    />
                  </a>
                </div>
              </div>
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-6 align-self-center align-center">
                {/* Menu Hamburger */}
                <a
                  href="#"
                  className={desktopMenu ? "me3-menu-btn btn--active" : "me3-menu-btn"}
                  onClick={(e) => clickedDesktopMenu(e)}
                >
                  <span></span>
                </a>

                <div className="me3-menu-popup align-left">
                  <div className="me3-menu-overlay" />
                  <div className="me3-menu-overlay-after" />

                  <div className="me3-menu-container me3--noscroll">
                    <div className="container">
                      <div className="me3-menu">
                        <ul className="me3-menu-nav">
                          {navItems.map((item, key) => (
                            <li key={`header-nav-item-${key}`} className={item.classes}>
                              <a
                                className={
                                  item.children.length > 0
                                    ? "me3-lnk lnk--active me3-dropdown-toggle"
                                    : "me3-lnk lnk--active"
                                }
                                onClick={(e) => handleLinkClick(e, item.link, item.children.length > 0)}
                                href={item.link}
                              >
                                {/* Add dropdown arrow icon for items with children */}
                                {/* Render icon for main menu items */}
                                {item.icon && item.icon.endsWith(".svg") ? (
                                  <img
                                    src={item.icon}
                                    alt={`${item.label} icon`}
                                    style={{ marginRight: "8px", width: "20px", height: "20px" }}
                                  />
                                ) : (
                                  item.icon && <i className={item.icon} style={{ marginRight: "8px" }}></i>
                                )}
                                {item.label}
                                {item.children.length > 0 && (
                                  <i className="icon fas fa-chevron-down dropdown-arrow-left" />
                                )}
                              </a>
                              {item.children.length > 0 && (
                                <ul className="sub-menu">
                                  {item.children.map((subitem, subkey) => (
                                    <li key={`header-nav-sub-item-${subkey}`}>
                                      <a
                                        className="me3-lnk lnk--active"
                                        href={subitem.link}
                                        onClick={(e) => handleLinkClick(e, subitem.link, subitem.children.length > 0)}
                                      >
                                        {/* Render icon for sub-menu items */}
                                        {subitem.icon && subitem.icon.endsWith(".svg") ? (
                                          <img
                                            src={subitem.icon}
                                            alt={`${subitem.label} icon`}
                                            style={{
                                              marginRight: "8px",
                                              width: "20px",
                                              height: "20px",
                                            }}
                                          />
                                        ) : (
                                          subitem.icon && (
                                            <i className={subitem.icon} style={{ marginRight: "8px" }}></i>
                                          )
                                        )}
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
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center align-right">
                {/* Button */}
                <a className="me3-head-btn me3-hover-btn" href={appData.header.button.link}>
                  <span>
                    <span className="me3-lnk lnk--active">{appData.header.button.label}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default DefaultHeader;
