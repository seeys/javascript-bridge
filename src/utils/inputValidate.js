const { ERROR_MESSAGE } = require("../Constant");

const bridgeLengthValidate = (input) => {
  if (input < 3 || input > 20) throw new Error(ERROR_MESSAGE.range);
  if (isNaN(input)) throw new Error(ERROR_MESSAGE.notNumber);
  return true;
};
const userMoveInput = (input) => {
  if (input !== "U" || input !== "D") throw new Error(ERROR_MESSAGE.moving);
  return true;
};
const gameRestartInput = (input) => {
  if (input !== "R" || input !== "Q") throw new Error(ERROR_MESSAGE.restart);
  return true;
};
const determineGameRestart = (moveLists) => {
  const [upList, downList] = moveLists;
  return (
    upList.includes(BRIDGE.wrong_direction) ||
    downList.includes(BRIDGE.wrong_direction)
  );
};
module.exports = {
  bridgeLengthValidate,
  userMoveInput,
  gameRestartInput,
  determineGameRestart,
};
