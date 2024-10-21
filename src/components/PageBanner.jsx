import Head from "next/head";
import { Link } from "react-router-dom";
import appData from "@data/app.json";
import { useRouter } from "next/router";

const PageBanner = ({ pageTitle, pageDesc }) => {
  const headTitle = `${appData.settings.siteName} - ${pageTitle}`;
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      {/* Me3 Intro */}
      <section className="me3-section me3-intro intro--black">
        <div className="container">
          <h1 className="me3-title-1  me3-text-white">
            <span>{pageTitle}</span>
            <span className="me3-sep word">
              <i className="sep-img" style={{ backgroundImage: "url(/images/title_icon.svg)" }} />
            </span>
          </h1>
          {pageDesc !== "" && (
            <div className="me3-subtitle-2  me3-text-white">
              <span>{pageDesc}</span>
            </div>
          )}
          <div className="me3-breadcrums">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              {asPath.indexOf("/blog/") !== -1 && (
                <li>
                  <a href="/blog">Blog</a>
                </li>
              )}
              {asPath.indexOf("/projects/") !== -1 && (
                <li>
                  <a href="/projects">Projects</a>
                </li>
              )}
              {asPath.indexOf("/services/") !== -1 && (
                <li>
                  <a href="/services">Services</a>
                </li>
              )}
              {asPath.indexOf("/team/") !== -1 && (
                <li>
                  <a href="/team">Team</a>
                </li>
              )}
              <li className="current">
                <span>{pageTitle}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageBanner;
