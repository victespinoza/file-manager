export default interface ReadLine {
  on(event: string, listener: (...args: any[]) => void): this;
  close(): void;
}
