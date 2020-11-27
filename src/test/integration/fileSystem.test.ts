import FileSystem from "../../main/delivery/FileSystem";
import ReadLineService from "../../main/infrastructure/ReadLineService";
import FileManagerController from "../../main/controller/FileManagerController";
import mockStdin from "mock-stdin";
import CommandActionFactory from "../../main/factory/CommandActionFactory";

describe("file system", () => {
  let readLine;
  let stdin;

  beforeEach(() => {
    stdin = mockStdin.stdin();
    readLine = ReadLineService.create();
  });
  afterEach(() => {
    readLine.close();
    stdin.end();
  });

  it("when i send pwd command it should show root folder", () => {
    const commandActionFactory = new CommandActionFactory();
    const fileSystem = new FileSystem(
      readLine,
      new FileManagerController(commandActionFactory)
    );
    fileSystem.start();
    const command = "pwd";
    stdin.send(`${command}\n`);
    expect(process.stdout.read()).toBe("/");
    fileSystem.close();
  });
});
