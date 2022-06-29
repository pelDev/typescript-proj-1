import HasFormatter from "../interfaces/hasFormatter.js";

export default class Payment implements HasFormatter {
  constructor(
    private recepient: string,
    private details: string,
    private amount: number
  ) {}

  format() {
    return `${this.recepient} is owed $${this.amount} for ${this.details}`;
  }
}
