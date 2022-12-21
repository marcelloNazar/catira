import styled from "styled-components";

export const Fake = styled.div`
  background-color: #ddd;
  height: ${(props) => props.heigth || 20}px;
`;

export const PageArea = styled.div`
  display: flex;
  margin-top: 25px;

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
  }
  .box--padding {
    padding: 10px;
  }

  .leftSide {
    flex: 1;
    margin-right: 20px;

    .box {
      display: flex;
    }

    .adImage {
      width: 320px;
      height: 320px;
      margin-right: 20px;

      .image img {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 320px;
      }
    }
    .adInfo {
      flex: 1;

      .adName {
        margin-bottom: 20px;

        h2 {
          margin: 0;
          margin-top: 22px;
        }
        small {
          color: #999;
        }
      }
      .adDescription {
        small {
          color: #999;
        }
      }
    }
  }
  .rigthSide {
    width: 250px;

    .price span {
      color: #0f0;
      display: block;
      font-size: 25px;
      font-weight: bold;
    }
    .contact {
      background-color: #0f0;
      color: #fff;
      height: 30px;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #999;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-bottom: 20px;
    }
    .createdBy strong {
      display: block;
    }
    .createdBy small {
      display: block;
      color: #999;
      margin-top: 10px;
    }
  }
`;

export const OthersArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;

    .adItem {
      width: 20%;
    }
  }
`;
export const BreadChumb = styled.div`
  font-size: 13px;
  margin-top: 20px;

  a {
    display: inline-block;
    margin: 0px 5px;
    text-decoration: underline;
    color: #000;
  }
`;
