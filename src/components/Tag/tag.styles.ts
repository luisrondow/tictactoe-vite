import styled from "styled-components";

export const TagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  z-index: 1;
  cursor: pointer;
`;

export const CrossWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  div {
    position: absolute;
    width: 7px;
    height: 55px;

    background-color: #ff3266;
    border-radius: 3.5px;

    &:first-child {
      transform: rotate(45deg);
    }

    &:last-child {
      transform: rotate(-45deg);
    }
  }
`;

export const Circle = styled.div`
  height: 45px;
  width: 45px;

  border: 7px solid #30cb76;
  border-radius: 50%;
`;
