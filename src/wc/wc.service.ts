import * as fs from 'fs';
import { join } from 'path';
import { Injectable } from '@nestjs/common';

export class FileNotFoundError extends Error {
  constructor(message: any) {
    super(message);
    this.name = this.constructor.name;
  }
}

@Injectable()
export class WCService {
  private readFileStream(filePath: string) {
    try {
      return fs.readFileSync(filePath, 'utf8').toString();
    } catch (error) {
      throw new FileNotFoundError(error);
    }
  }

  countWords(filename: string) {
    const fileContents = this.readFileStream(join(process.cwd(), filename));
    return fileContents.trim().split(/\s+/).length;
  }

  countLines(filename: string) {
    const fileContents = this.readFileStream(join(process.cwd(), filename));
    return fileContents.split(/\r\n|\r|\n/).length;
  }

  countBytes(filename: string) {
    return fs.statSync(join(process.cwd(), filename)).size;
  }

  countCharacters(filename: string) {
    const fileContents = this.readFileStream(join(process.cwd(), filename));
    return fileContents.length;
  }
}
