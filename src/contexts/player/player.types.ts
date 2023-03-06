import { Actions, ContextType } from "../context.types";

export type Tag = "cross" | "circle" | null;

export type Player = {
  tag: Tag;
};

export type PlayerProviderProps = {
  children: React.ReactNode;
};

export type PlayerStates = {
  player: Player;
};

export type PlayerContextActions = {
  updatePlayerTag: (playerTag: Tag) => void;
};

export type PlayerContextValues = ContextType<
  PlayerStates,
  PlayerContextActions
>;

export enum PLAYER_ACTIONS {
  UPDATE_PLAYER_TAG = "UPDATE_PLAYER_TAG",
}

export type PlayerActions = Actions<PLAYER_ACTIONS, Player>;
