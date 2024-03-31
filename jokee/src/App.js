import React from "react";
import "./global.css";
import styled from "styled-components";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";

const ComponentStyled = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .image {
    height: 50px;
    width: 50px;
  }

  .header {
    @media (max-width: 600px) {
      width: 100%;
    }
    width: 80%;
    height: 75px;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
  }
  .body {
    width: 100%;
    background: #fcfcfc;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .title-card {
      color: #ffffff;
      width: 100%;
      height: 200px;
      background: #29b363;
    }
    .content {
      padding-top: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      color: #7f7f7f;

      .text {
        height: 180px;
        overflow: hidden;
        overflow-y: auto;
      }
    }
    .action {
      border-top: 1px solid #f1f1f1;
      width: 55%;
      margin-bottom: 50px;
      @media (max-width: 600px) {
        width: 80%;
      }

      .button {
        margin-top: 25px;
        height: 45px;
        width: 250px;
        color: #ffffff;
        font-weight: bold;
      }
      .funny {
        background: #2c7edb;
        margin-right: 15px;
      }

      .not-funny {
        background: #29b363;
        margin-left: 15px;
      }
    }
  }
  .footer {
    border-top: 1px solid #d8d8d8;
    width: 100%;
    padding: 30px;
    @media (max-width: 600px) {
      padding: 30px 10px 10px 10px;
    }
  }
`;

function App() {
  return (
    // using styled-components and tailwindCss
    <ComponentStyled>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </ComponentStyled>
  );
}

export default App;
