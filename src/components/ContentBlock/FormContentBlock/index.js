import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import { useForm } from "@formspree/react";

import PreviewImage from "../../../common/PreviewImage";
import Button from "../../../common/Button";
import Input from "../../../common/Input";

import { useState } from "react";

import * as S from "./styles";

const FormBlock = ({ title, content, button, icon, t, id }) => {
  // const scrollTo = id => {
  //   const element = document.getElementById(id);
  //   element.scrollIntoView({
  //     behavior: "smooth"
  //   });
  // };
  const [state, handleSubmit] = useForm("xqkwlqoo");
  const [formState, setFormState] = useState({});
  const [error, setError] = useState(null);

  const phoneNumberRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const checkSubmission = event => {
    event.preventDefault();
    if (!formState.telephone.match(phoneNumberRegex)) {
      setError("please enter valid phone number");
    } else {
      setError(null);
      handleSubmit(event);
    }
  };
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
              <S.Content>{content}</S.Content>
              <S.Content>
                {!state.succeeded
                  ? "We are releasing a beta for Berkeley soon! Sign up below to stay updated! 🔔📲🔔"
                  : "We are releasing a beta for Berkeley soon! Thanks for signing up, we will keep you updated! 🔔📲🔔"}
              </S.Content>
              {state.succeeded ? (
                <div />
              ) : (
                <form onSubmit={checkSubmission}>
                  <S.FormEntryWrapper>
                    <Input
                      type='telephone'
                      name='telephone'
                      id=''
                      placeholder='enter your phone #'
                      value={""}
                      onChange={event => {
                        var res = { ...formState };
                        res.telephone = event.target.value;
                        setFormState(res);
                      }}
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
                  {error ? (
                    <p style={{ color: "red", fontSize: 12 }}>{error}</p>
                  ) : (
                    <div />
                  )}
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
