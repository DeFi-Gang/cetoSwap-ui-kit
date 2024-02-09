import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
  },
  [sizes.LG]: {
    fontSize: "24px",
  },
  [sizes.XL]: {
    fontSize: "40px",
  },
  [sizes.XXL]: {
    fontSize: "64px",
  },
  [sizes.XXXL]: {
    fontSize: "100px",
  },
  [sizes.XXXXL]: {
    fontSize: "130px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap");

  ${({ size }) => style[size || sizes.MD]}
  font-weight: 700;
  line-height: 1.1;
  font-family: "Orbitron";
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
