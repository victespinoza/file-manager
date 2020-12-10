import DisplayCurrentDirectory from "../../main/action/DisplayCurrentDirectory";

describe("Get Current Directory", () => {
  it("should return current directory", () => {
    const directory = "/";
    const fileService = { getCurrentDirectory: jest.fn(() => directory) };
    const displayService = { display: jest.fn() };
    const action = new DisplayCurrentDirectory(fileService, displayService);
    action.execute();
    expect(fileService.getCurrentDirectory).toBeCalled();
    expect(displayService.display).toBeCalledWith(directory);
  });
});
