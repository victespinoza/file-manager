import CommandActionFactory from "../../main/factory/CommandActionFactory";
import GetCurrentDirectory from "../../main/action/DisplayCurrentDirectory";
import ListAll from "../../main/action/ListAll";

describe("Command Action Factory", () => {
  const commandActionFactory = new CommandActionFactory();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should return pwd command action", () => {
    const command = "pwd";
    const commandAction = commandActionFactory.getCommand(command);
    expect(commandAction).toBeInstanceOf(GetCurrentDirectory);
  });
  it("should return ls command action", () => {
    const command = "ls";
    const commandAction = commandActionFactory.getCommand(command);
    expect(commandAction).toBeInstanceOf(ListAll);
  });
});
