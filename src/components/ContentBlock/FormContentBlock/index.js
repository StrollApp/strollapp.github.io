import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import { useForm, ValidationError } from "@formspree/react";

import PreviewImage from "../../../common/PreviewImage";
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
  const [state, handleSubmit] = useForm("xqkwqzwa");
  // if (state.succeeded) {
  //   return <p>Thanks! We will keep you updated!</p>;
  // }
  return (
    <S.FormBlockContainer>
      <Row type='flex' justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>
                {
                  "Stroll is a data-driven navigation app that allows pedestrians to map the safest route to their destination.\n"
                }
              </S.Content>
              <S.Content>
                {!state.succeeded
                  ? "We are releasing a beta for Berkeley soon! Sign up below to stay updated! 🔔🔔"
                  : "We are releasing a beta for Berkeley soon! Thanks for signing up, we will keep you updated!"}
              </S.Content>
              {state.succeeded ? (
                <div />
              ) : (
                <form onSubmit={handleSubmit}>
                  <S.FormEntryWrapper>
                    <Input
                      type='email'
                      name='email'
                      id=''
                      placeholder='Enter your email'
                      value={""}
                      onChange={() => {}}
                    />
                    <Button
                      type='submit'
                      disabled={state.submitting}
                      key={id}
                      width='true'
                    >
                      {t("Stay Updated!")}
                    </Button>
                  </S.FormEntryWrapper>
                  <ValidationError
                    style={{ color: "red" }}
                    field='email'
                    prefix='Input'
                    errors={state.errors}
                  />
                </form>
              )}
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <PreviewImage
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
