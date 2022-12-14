import styled from "styled-components";

export const HeaderArea = styled.div`
  height: 60px;
  background-color: #ddd;
  border-bottom: 1px solid #aaa;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: 27px;
      font-weight: bold;
    }
    .logo-1 {
      color: #f00;
    }
    .logo-2 {
      color: #0f0;
    }
    .logo-3 {
      color: #00f;
    }
  }
  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;

      a,
      button {
        border: 0px;
        background: none;
        color: #000;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: #696969;
        }

        &.button {
          background-color: #ff8100;
          border-radius: 4px;
          color: #fff;
          padding: 5px 10px;
        }

        &.button:hover {
          background-color: #e57706;
        }
      }
    }
  }
`;
