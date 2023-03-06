import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  height: 100%;
  max-height: 420px;

  margin-top: 15px;
  padding: 10px;
  transform: translateY(10px);

  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 320px;
  }
`;

export const SquareBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BoardLinesWrapper = styled.div<{
  position: string;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;

  ${({ position }) => {
    if (position === "vertical") {
      return css`
        width: 33%;
        height: 100%;
      `;
    }

    if (position === "horizontal") {
      return css`
        width: 100%;
        height: 33%;
        flex-direction: column;
      `;
    }
  }}
`;

export const BoardLine = styled.div<{ position: string }>`
  background: #aabdc6;
  border-radius: 2.5px;

  ${({ position }) => {
    if (position === "vertical") {
      return css`
        height: 100%;
        width: 5px;
      `;
    }

    if (position === "horizontal") {
      return css`
        height: 5px;
        width: 100%;
      `;
    }
  }}
`;

export const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
`;
