export default class GameState {
  score;
  turn;
  winCondition;

  constructor(score, turn) {
    this.turn = turn || 0;
    this.score = score || [0, 0];
    this.winCondition = [];
  }

  onUpdateScore = () => {
    this.score = this.turn
      ? [this.score[0], ++this.score[1]]
      : [++this.score[0], this.score[1]];
    return this.score;
  };

  onUpdateTurn = () => {
    this.turn = this.turn ? 0 : 1;
    return this.turn;
  };
}
