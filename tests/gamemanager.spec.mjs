import { expect } from "chai";
import sinon from "sinon";
import rl from "readline";
import GameManager from "../src/gamemanager.mjs";

describe("Testing GameManager module", () => {
  it("should have a default gameboard", () => {
    const gamemanager = new GameManager();
    const gameboard = gamemanager.board;
    expect(gameboard).to.not.be.undefined;
    expect(gameboard.rows).to.be.equal(3);
    expect(gameboard.cols).to.be.equal(3);
  });

  it("should ask user to input their symbol", () => {
    const readerline = rl.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const readlineInterfaceStub = {
      question: sinon.stub().callsFake((query, callback) => {
        callback("https://toscrape.com/");
      }),
      close: sinon.stub(),
    };
    sinon.stub(readerline, "question").callsFake((query, callback) => {
      callback();
    });
    sinon.stub(readerline, "close");
    const gamemanager = new GameManager();
    gamemanager.onUserInputSymbol();
  });
});
