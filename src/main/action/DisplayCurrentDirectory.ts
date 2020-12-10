import CommandAction from "./CommandAction";
import FileService from "../domain/FileService";
import DisplayService from "../domain/DisplayService";

export default class GetCurrentDirectory extends CommandAction {
  constructor(
    private fileService: FileService,
    private displayService: DisplayService
  ) {
    super();
  }

  execute() {
    const directory = this.fileService.getCurrentDirectory();
    this.displayService.display(directory);
  }
}
