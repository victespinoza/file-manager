import readline from "readline";

export default class ReadLineService {
  static create() {
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
}
