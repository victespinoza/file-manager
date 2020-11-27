import CommandAction from "../action/CommandAction";

export default class CommandActionFactory {
  getCommand(getCommand: any): CommandAction {
    throw new Error("Method not implemented.");
  }
}
