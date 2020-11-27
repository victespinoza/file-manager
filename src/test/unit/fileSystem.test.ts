import FileSystem from "../../main/delivery/FileSystem";
import mockStdin from "mock-stdin";
import ReadLine from "../../main/infrastructure/ReadLine";
import ReadLineService from "../../main/infrastructure/ReadLineService";

describe("File System", () => {
  let readLine: ReadLine;
  let stdin;
  beforeEach(() => {
    stdin = mockStdin.stdin();
    readLine = ReadLineService.create();
  });

  afterEach(() => {
    readLine.close();
    stdin.end();
  });

  it("Should listening through readline's on method when run start", () => {
    readLine.on = jest.fn();
    const fileSystem = new FileSystem(readLine, {});
    fileSystem.start();
    expect(readLine.on).toBeCalled();
  });

  it("Should close listening through readline's close method when run close", () => {
    readLine.close = jest.fn();
    const fileSystem = new FileSystem(readLine, {});
    fileSystem.close();
    expect(readLine.close).toBeCalled();
  });

  it("Should execute file system controller when command is insert trough stdin", () => {
    const fileManagerController = { execute: jest.fn() };
    const fileSystem = new FileSystem(readLine, fileManagerController);
    const command = "command";

    fileSystem.start();
    stdin.send(`${command}\n`);

    expect(fileManagerController.execute).toBeCalledWith(command);
    fileSystem.close();
  });
});
