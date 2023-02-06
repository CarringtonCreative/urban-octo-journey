import { expect } from "chai";
import GameState from "../src/gamestate.mjs";

describe("Testing GameState module", () => {
  it("should return default GameState", () => {
    const gamestate = new GameState();
    expect(gamestate.turn).to.equal(0);
    expect(gamestate.score).to.deep.equal([0, 0]);
    expect(gamestate.winCondition).to.deep.equal([]);
  });
  it("should update player turns", () => {
    const gamestate = new GameState();
    gamestate.onUpdateTurn();
    expect(gamestate.turn).to.equal(1);
    gamestate.onUpdateTurn();
    expect(gamestate.turn).to.equal(0);
  });
  it("should update score for player 0", () => {
    const gamestate = new GameState();
    gamestate.onUpdateScore();
    expect(gamestate.turn).to.equal(0);
    expect(gamestate.score).to.deep.equal([1, 0]);
  });
  it("should update score for player 1", () => {
    const gamestate = new GameState();
    gamestate.onUpdateTurn();
    gamestate.onUpdateScore();
    expect(gamestate.turn).to.equal(1);
    expect(gamestate.score).to.deep.equal([0, 1]);
  });
});
