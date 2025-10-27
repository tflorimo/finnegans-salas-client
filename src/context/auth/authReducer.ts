import { ACTION_TYPES } from "./types";

export const authReducer = (
  state = {},
  action: { type: string; payload?: unknown }
) => {
  switch (action.type) {
    case ACTION_TYPES.login:
      return {
        logged: true,
      };
    case ACTION_TYPES.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
