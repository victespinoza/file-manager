import CommandAction from "../action/CommandAction";
import GetCurrentDirectory from "../action/GetCurrentDirectory";
import ListAll from "../action/ListAll";

export default class CommandActionFactory {
  private commands: Map<string, CommandAction>;
  constructor() {
    this.initCommands();
  }
  getCommand(command: any): CommandAction {
    return this.commands.get(command);
  }

  initCommands() {
    this.commands = new Map();
    this.commands.set("pwd", new GetCurrentDirectory());
    this.commands.set("ls", new ListAll());
  }
}
