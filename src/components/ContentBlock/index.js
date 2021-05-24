import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import FormContentBlock from "./FormContentBlock"

const ContentBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "form") return <FormContentBlock {...props} />;
  return null;
};

export default ContentBlock;
