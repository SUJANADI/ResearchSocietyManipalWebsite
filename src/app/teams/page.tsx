import AboutSectionOne from "@/components/teams/teams";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Teams from "@/components/teams/teams";
import TeamsPage from "@/components/teams";

export const metadata: Metadata = {
  title: "Team Page",
  description: "This is team Page",
};

const teams = () => {
  return (
    <>
      <Breadcrumb
        pageName="Team Page"
        description="With a focus on cutting-edge research and innovation. Our mission is to empower students across diverse domains through interactive workshops, collaborative projects, and expert-led discussions."
      />
      <Teams />
    </>
  );
};

export default TeamsPage;
