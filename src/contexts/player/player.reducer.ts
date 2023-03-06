import { PlayerActions, PlayerStates, PLAYER_ACTIONS } from "./player.types";

const INITIAL_STATE: PlayerStates = {
  player: {
    tag: null,
  },
};

export const playerReducer = (
  state = INITIAL_STATE,
  action: PlayerActions
): PlayerStates => {
  switch (action.type) {
    case PLAYER_ACTIONS.UPDATE_PLAYER_TAG:
      return {
        ...state,
        player: {
          ...state.player,
          tag: action.payload.tag,
        },
      };
    default:
      return state;
  }
};

export default INITIAL_STATE;
