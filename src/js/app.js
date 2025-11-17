import { GameController } from "./gameController.js";
import { GameField } from "./gameField.js";

const gameField = new GameField("body", 16);
const game = new GameController(gameField);

game.start();
