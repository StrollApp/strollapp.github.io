import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";
import Input from "../../../common/Input";

import * as S from "./styles";

const FormBlock = ({ title, content, button, icon, t, id }) => {
  const scrollTo = id => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <S.FormBlockContainer>
      <Row type='flex' justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.FormEntryWrapper>
                <Input
                  type='text'
                  name='email'
                  id=''
                  placeholder='Enter your email'
                  value={""}
                  onChange={() => {}}
                />
                <Button key={id} width='true' onClick={() => scrollTo("about")}>
                  {t("Stay Updated!")}
                </Button>
              </S.FormEntryWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className='about-block-image'
              width='100%'
              height='100%'
            />
          </Slide>
        </Col>
      </Row>
    </S.FormBlockContainer>
  );
};

export default withTranslation()(FormBlock);
