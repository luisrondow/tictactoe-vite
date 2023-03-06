import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #34515e;
  margin-bottom: 1rem;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #34515e;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0.5rem;
  cursor: pointer;
`;
