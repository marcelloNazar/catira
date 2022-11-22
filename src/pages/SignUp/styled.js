import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 3px #aaa;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area-title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 15px;
      }
      .area-input {
        flex: 1;

        input {
          width: 100%;
          font-size: 15px;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: 0;
          transition: all ease 0.4s;
        }
      }
      button {
        background-color: #0099ff;
        border: 0;
        outline: 0;
        padding: 5px 10px;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;

        &:hover {
          background-color: #006fce;
        }
      }
    }
  }
`;
