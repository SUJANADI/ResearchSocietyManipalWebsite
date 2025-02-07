import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page",

};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="With a focus on cutting-edge research and innovation. Our mission is to empower students across diverse domains through interactive workshops, collaborative projects, and expert-led discussions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
