import styled from "styled-components";
import { PRIMARY_FONT } from "../../css-constants/css-constant";

export const Wrapper = styled.div`
  padding: 1.5rem 0;

  .logo {
    display: block;
    margin: 0 auto;
  }

  .li {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    .link {
      color: #000;
      text-decoration: none;
      ul {
        transition: all 0.4s ease;
        text-transform: uppercase;
        ${PRIMARY_FONT};
        font-weight: 600;
        font-size: 1rem;

        margin: 0 0.6rem;
        padding: 0.7rem 1rem;
        :hover {
          color: #fff;
          background-color: #000;
        }
      }
    }
  }
`;
