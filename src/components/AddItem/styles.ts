import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #7583D3;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0px 50px 0;
  padding: 10px;
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }

  input {
    border: 0;
    background-color: transparent;
    outline: 0;
    color: #7583D3;
    font-size: 18px;
    flex: 1;

    ::-webkit-input-placeholder {
      color: #7583D3;
    }
  }

`;