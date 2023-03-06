import {
  ScoreboardActions,
  ScoreboardStates,
  SCOREBOARD_ACTIONS,
} from "./scoreboard.types";

const INITIAL_STATE: ScoreboardStates = {
  scoreboard: {
    1: 0,
    2: 0,
  },
};

export const scoreboardReducer = (
  state = INITIAL_STATE,
  action: ScoreboardActions
): ScoreboardStates => {
  switch (action.type) {
    case SCOREBOARD_ACTIONS.UPDATE_SCOREBOARD:
      return {
        ...state,
        scoreboard: {
          ...state.scoreboard,
          [action.payload.player]: state.scoreboard[action.payload.player] + 1,
        },
      };
    default:
      return state;
  }
};

export default INITIAL_STATE;
