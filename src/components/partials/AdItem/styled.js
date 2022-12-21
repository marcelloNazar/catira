import styled from "styled-components";

export const Item = styled.div`
  a {
    display: block;
    border: 1px solid #fff;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all ease 0.1s;

    .image img {
      flex: 1;
      width: 100%;
      border-radius: 5px;
    }

    &:hover {
      border: 1px solid #777;
      background-color: #eee;
    }
    .itemName {
      font-weight: bold;
    }
  }
`;
