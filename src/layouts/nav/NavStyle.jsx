import styled from "styled-components";
import { TEXTURINA_500_700 } from "../../css-constants/css-constant";

export const Wrapper = styled.div`
  padding: 1.5rem 0;

  .logo {
    display: block;
    margin: 0 auto;
  }

  .li {
    display: flex;
    justify-content: center;
    ul {
      text-transform: capitalize;
      margin: 0 0.6rem;
      padding: 1rem;
      ${TEXTURINA_500_700};
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
`;
