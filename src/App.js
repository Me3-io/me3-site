import React, { useEffect, Suspense } from "react";
import Layouts from "../src/layouts/Layouts";
import { circleText } from "@common/utilits";

import ServicesSection from "./components/sections/Services";
import AboutSection from "./components/sections/About";
import ShowcaseSection from "./components/sections/Showcase";
import VideoSection from "./components/sections/Video";
import TokenomicsSection from "../src/components/sections/Tokenomic";
import LatestPostsSection from "./components/sections/LatestPosts";
import PartnersSection from "./components/sections/Partners";
import InvestorsSection from "./components/sections/Investors";

const HeroSection = React.lazy(() => import("./components/sections/Hero"));

const App = () => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <ServicesSection />
      <AboutSection />
      <ShowcaseSection />
      <VideoSection />
      <TokenomicsSection />
      <PartnersSection />
      <InvestorsSection />
      <LatestPostsSection />
    </Layouts>
  );
};

export default App;
