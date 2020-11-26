import FileSystem from "../../main/delivery/FileSystem";
import ReadLineService from "../../main/infrastructe/ReadLineService";

describe("file system", () => {
  let readln;

  beforeEach(() => {
    readln = ReadLineService.create();
  });
  afterEach(() => {
    readln.close();
  });
  
  it("when i send pwd command it should show root folder", () => {
    const fileSystem = new FileSystem(readln, {});
    fileSystem.close();
  });
});
