import styled from "styled-components";

export const Scoreboard = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #34515e;
  margin-bottom: 0.5rem;
`;

export const ScoreValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #34515e;
`;
