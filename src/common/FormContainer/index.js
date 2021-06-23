import * as S from "./styles";

const FormContainer = ({ padding, border, children }) => (
  <S.FormContainer padding={padding} border={border}>
    {children}
  </S.FormContainer>
);

export default FormContainer;
