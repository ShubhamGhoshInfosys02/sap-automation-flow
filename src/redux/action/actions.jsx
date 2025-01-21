import { DRAGPANELON, DRAGPANELOFF } from "./actionTypes";

export const dragPanelOn = () => ({
  type: DRAGPANELON,
});

export const dragPanelOff = () => ({
  type: DRAGPANELOFF,
});