import FileSystem from "../../main/delivery/FileSystem";
import mockStdin from "mock-stdin";
import ReadLine from "../../main/infrastructe/ReadLine";
import ReadLineService from "../../main/infrastructe/ReadLineService";

describe("File System", () => {
  let readln: ReadLine;
  let stdin;
  beforeEach(() => {
    stdin = mockStdin.stdin();
    readln = ReadLineService.create();
  });

  afterEach(() => {
    readln.close();
    stdin.end();
  });

  it("Should listening throught readline's on method when run start", () => {
    readln.on = jest.fn();
    const fileStystem = new FileSystem(readln, {});
    fileStystem.start();
    expect(readln.on).toBeCalled();
  });

  it("Should close listening throught readline's close method when run close", () => {
    readln.close = jest.fn();
    const fileStystem = new FileSystem(readln, {});
    fileStystem.close();
    expect(readln.close).toBeCalled();
  });

  it("Should listening stdin when run start", () => {
    const fileService = { execute: jest.fn() };
    const fileStystem = new FileSystem(readln, fileService);
    const command = "command";

    fileStystem.start();
    stdin.send(`${command}\n`);

    expect(fileService.execute).toBeCalledWith(command);
    fileStystem.close();
  });
});
