import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const TagButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #eee;
  }
`;
