import CommandAction from "../action/CommandAction";
import DisplayCurrentDirectory from "../action/DisplayCurrentDirectory";
import ListAll from "../action/ListAll";
import FileService from "../domain/FileService";
import DisplayService from "../domain/DisplayService";

export default class CommandActionFactory {
  private commands: Map<string, CommandAction>;
  constructor() {
    this.initCommands();
  }
  getCommand(command: any): CommandAction {
    return this.commands.get(command);
  }

  initCommands() {
    const fileService = new FileService();
    const displayService = new DisplayService();
    this.commands = new Map();
    this.commands.set(
      "pwd",
      new DisplayCurrentDirectory(fileService, displayService)
    );
    this.commands.set("ls", new ListAll());
  }
}
