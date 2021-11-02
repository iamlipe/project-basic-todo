import styled from "styled-components";

export const Container = styled.div`
  background-color: #F6FBFF;
  color: #7583D3;
  min-height: 100vh;
`;

export const Content = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #7583D3;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const ExcludeBox = styled.button`
  width: 50px;
  height: 50px;
  background-color: #7583D3;
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border: none;
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    margin: 0;
    font-size: 10px;
  }
`;