import { Actions, ContextType } from "../context.types";

export type Player = {
  player: 1 | 2 | "draw";
};

export type Scoreboard = {
  1: number;
  2: number;
  draw: number;
};

export type ScoreboardProviderProps = {
  children: React.ReactNode;
};

export type ScoreboardStates = {
  scoreboard: Scoreboard;
};

export type ScoreboardContextActions = {
  updateScoreboard: (player: 1 | 2 | "draw") => void;
};

export type ScoreboardContextValues = ContextType<
  ScoreboardStates,
  ScoreboardContextActions
>;

export enum SCOREBOARD_ACTIONS {
  UPDATE_SCOREBOARD = "UPDATE_SCOREBOARD",
}

export type ScoreboardActions = Actions<SCOREBOARD_ACTIONS, Player>;
