import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
// import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  // const handleChange = event => {
  //   i18n.changeLanguage(event.target.value);
  // };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type='flex' justify='space-between'>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Contact")}</S.Language>
                <S.Large to='/'>{t("Tell us everything")}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding the project? Feel free to reach out.`
                  )}
                </S.Para>
                <a href='mailto:strollapp.info@gmail.com'>
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>2150 Shattuck Ave</S.Para>
                <S.Para>Berkeley, CA 94704</S.Para>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border='true'>
            <Row
              type='flex'
              justify='space-between'
              align='middle'
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to='/'>
                <S.LogoContainer>
                  {false && (
                    <SvgIcon
                      src='logo.svg'
                      aria-label='homepage'
                      width='101px'
                      height='64px'
                    />
                  )}
                  <S.LogoText>{t("Stroll")}</S.LogoText>
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href='https://github.com/StrollApp'
                  src='github.svg'
                />
                {false &&
                <SocialLink
                  href='https://www.linkedin.com/in/joseph-jin/'
                  src='linkedin.svg'
                />}
                <SocialLink
                  href='https://instagram.com/stroll.app?utm_medium=copy_link'
                  src='instagram.svg'
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
