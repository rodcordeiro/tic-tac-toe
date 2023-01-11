import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
  padding: 25px;

  button {
    margin-top: 5px;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    width: 100px;
    height: auto;
    font-size: 1.3rem;
    color: #f4f4f4;
    border-radius: 5px;
    background-color: #09f;
  }
`;
export const CardsContainer = styled.div`
  margin-top: 10px;
`;
export const CardsRow = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
`;
