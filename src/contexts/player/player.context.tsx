import { createContext, useReducer } from "react";
import {
  PLAYER_ACTIONS,
  PlayerContextValues,
  PlayerProviderProps,
  Tag,
} from "./player.types";

import PLAYER_INITIAL_VALUE, { playerReducer } from "./player.reducer";

export const PlayerContext = createContext<PlayerContextValues>({});

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [state, dispatch] = useReducer(playerReducer, PLAYER_INITIAL_VALUE);

  const updatePlayerTag = (playerTag: Tag) => {
    dispatch({
      type: PLAYER_ACTIONS.UPDATE_PLAYER_TAG,
      payload: { tag: playerTag },
    });
  };

  const actions = {
    updatePlayerTag,
  };

  return (
    <PlayerContext.Provider value={{ ...state, actions }}>
      {children}
    </PlayerContext.Provider>
  );
};
