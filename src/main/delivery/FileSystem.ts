import ReadLine from "../infrastructe/ReadLine";

class FileSystem {
  constructor(private readln: ReadLine, private fileService) {}

  start() {
    this.readln.on("line", (input) => {
      this.fileService.execute(input);
    });
  }

  close() {
    this.readln.close();
  }
}
export default FileSystem;
