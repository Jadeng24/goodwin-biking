import FooterSection, { SectionTypes } from "./footer-section/FooterSection";

const FooterLinks = () => {
  return (
    <>
      <FooterSection section={SectionTypes.AboutUs} />
      <FooterSection section={SectionTypes.customerCare} />
      <FooterSection section={SectionTypes.contactUs} />
    </>
  );
};

export default FooterLinks;
