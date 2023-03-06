import { createContext, useReducer } from "react";
import {
  SCOREBOARD_ACTIONS,
  ScoreboardContextValues,
  ScoreboardProviderProps,
} from "./scoreboard.types";

import SCOREBOARD_INITIAL_VALUE, {
  scoreboardReducer,
} from "./scoreboard.reducer";

export const ScoreboardContext = createContext<ScoreboardContextValues>({});

export const ScoreboardProvider = ({ children }: ScoreboardProviderProps) => {
  const [state, dispatch] = useReducer(
    scoreboardReducer,
    SCOREBOARD_INITIAL_VALUE
  );

  const updateScoreboard = (player: 1 | 2) => {
    dispatch({
      type: SCOREBOARD_ACTIONS.UPDATE_SCOREBOARD,
      payload: { player },
    });
  };

  const actions = {
    updateScoreboard,
  };

  return (
    <ScoreboardContext.Provider value={{ ...state, actions }}>
      {children}
    </ScoreboardContext.Provider>
  );
};
