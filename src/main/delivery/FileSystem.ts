import ReadLine from "../infrastructure/ReadLine";

class FileSystem {
  constructor(private readLine: ReadLine, private fileManagerController) {}

  start() {
    this.readLine.on("line", (input) => {
      this.fileManagerController.execute(input);
    });
  }

  close() {
    this.readLine.close();
  }
}
export default FileSystem;
