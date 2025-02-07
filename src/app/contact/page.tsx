import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page ",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lets start by getting to know you better."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
