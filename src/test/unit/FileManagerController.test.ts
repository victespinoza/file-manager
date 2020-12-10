import FileManagerController from "../../main/controller/FileManagerController";
import CommandActionFactory from "../../main/factory/CommandActionFactory";
import CommandAction from "../../main/action/CommandAction";

describe("file manager controller", () => {
  it("should call command factory and execute the action command obtained ", () => {
    const action: CommandAction = { execute: jest.fn() };
    const commandActionFactory = {} as CommandActionFactory;
    commandActionFactory.getCommand = jest.fn(() => action);
    const fileManagerController = new FileManagerController(
      commandActionFactory
    );
    const command = "pwd";
    fileManagerController.execute(command);
    expect(commandActionFactory.getCommand).toBeCalledWith(command);
    expect(action.execute).toBeCalled();
  });
});
