import CommandActionFactory from "../factory/CommandActionFactory";
import CommandAction from "../action/CommandAction";

export default class FileManagerController {
  constructor(private commandActionFactory: CommandActionFactory) {}
  execute(command: string) {
    const action: CommandAction = this.commandActionFactory.getCommand(command);
    action.execute();
  }
}
