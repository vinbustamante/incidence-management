export interface IFileService {
  read(file: string): Promise<string>;
}
