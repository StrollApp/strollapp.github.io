import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import BackgroundContent from "../../content/BackgroundContent.json";
import TeamMissionContent from "../../content/TeamMissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import FormContentBlock from "../../components/ContentBlock/FormContentBlock";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const FormContainer = lazy(() => import("../../common/FormContainer"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <div>
      <FormContainer>
        {false && <ScrollToTop />}
        <FormContentBlock
          type='right'
          first='true'
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon='phone.png'
          id='intro'
        />
      </FormContainer>
      <Container>
        <MiddleBlock
          title={TeamMissionContent.title}
          content={TeamMissionContent.text}
          button={TeamMissionContent.button}
          id='mission'
        />
        <ContentBlock
          type='left'
          title={BackgroundContent.title}
          content={BackgroundContent.text}
          icon='waving.svg'
          id='about'
        />
        {/*hide this section for now*/}
        {false && (
          <div>
            <MiddleBlock
              title={MiddleBlockContent.title}
              content={MiddleBlockContent.text}
              button={MiddleBlockContent.button}
            />
            <ContentBlock
              type='left'
              title={AboutContent.title}
              content={AboutContent.text}
              section={AboutContent.section}
              icon='graphs.svg'
              id='about'
            />
            <ContentBlock
              type='right'
              title={MissionContent.title}
              content={MissionContent.text}
              icon='product-launch.svg'
              id='mission'
            />
            <ContentBlock
              type='left'
              title={ProductContent.title}
              content={ProductContent.text}
              icon='waving.svg'
              id='product'
            />
            <ContactFrom
              title={ContactContent.title}
              content={ContactContent.text}
              id='contact'
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
