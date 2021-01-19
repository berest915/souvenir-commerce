import styled from "styled-components";
import { PRIMARY_FONT, SECONDARY_FONT } from "../../css-constants/css-constant";

export const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 350px) {
    display: flex;
    justify-content: center;
  }
`;

export const FlexItem = styled.div`
  margin: 0.5rem;
  border: 1px solid lightgray;
  // similarly flex-basis: calc(25%-1rem)
  width: calc(25% - 1rem);

  :hover {
    cursor: pointer;
    border: 1px solid gray;
    color: rgb(0, 0, 222);
  }

  .product-div {
    padding-left: 1rem;
    padding-bottom: 0.5rem;
  }

  .product-img {
    width: 100%;
  }
  .product-name,
  .product-category {
    margin-top: 0.4rem;
    font-size: 0.8rem;
  }
  .product-name {
    ${PRIMARY_FONT};
    font-weight: bold;
  }
  .product-category {
    ${SECONDARY_FONT};

    border-top: 1px solid black;
    line-height: 2;
    display: inline-block;
  }

  @media screen and (max-width: 960px) {
    transition: all 0.4s ease;
    width: calc(33.33% - 1rem);
  }
  @media screen and (max-width: 690px) {
    width: calc(50% - 1rem);
  }
  @media screen and (max-width: 350px) {
    width: calc(90% - 1rem);
  }
`;
