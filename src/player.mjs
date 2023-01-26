import { v4 as uuidv4 } from "uuid";
import { SYMBOL } from "./constants.mjs";

export default class Player {
  id;
  name;
  wins;
  loses;
  symbol;

  constructor(name, symbol, wins, loses) {
    this.id = uuidv4();
    this.name = name || "";
    this.wins = wins || 0;
    this.loses = loses || 0;
    this.symbol = symbol || SYMBOL.X;
  }
}
