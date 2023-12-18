import { Command, CommandRunner, Option } from 'nest-commander';
import { WCService } from './wc.service';

interface WCCommandOptions {
  words?: boolean;
  lines?: boolean;
  bytes?: boolean;
  characters?: boolean;
}

@Command({
  name: 'wc',
  options: { isDefault: true },
  description:
    'Print number of word, lines, and byte and characters in the file',
})
export class WCCommand extends CommandRunner {
  constructor(public wc: WCService) {
    super();
  }

  async run(params: string[], options?: WCCommandOptions): Promise<void> {
    console.log('params', params.length);
    console.log('options', options);

    if (params.length === 0) {
      console.log('Filename or STDIN needs to be provided as first argument');
      return;
    }

    const fileName = params[0];

    if (options?.lines) {
      return this.runLinesCounter(fileName);
    }

    if (options?.bytes) {
      return this.runBytesCounter(fileName);
    }

    if (options?.characters) {
      return this.runCharactersCounter(fileName);
    }

    // default option
    return this.runWordCounter(fileName);
  }

  @Option({
    flags: '-w, --words [string]',
    description: 'Print the number of words in the file',
  })
  parseWords(val: string): string {
    return val;
  }

  @Option({
    flags: '-l, --lines [string]',
    description: 'Print the number of lines in the file',
  })
  parseLines(val: string): string {
    return val;
  }

  @Option({
    flags: '-b, --bytes [string]',
    description: 'Print the number of bytes in the file',
  })
  parseBytes(val: string): string {
    return val;
  }

  @Option({
    flags: '-c, --characters [string]',
    description: 'Print the number of characters in the file',
  })
  parseCharacters(val: string): string {
    return val;
  }

  runWordCounter(filename: string): void {
    console.log(this.wc.countWords(filename) + ' ' + filename);
  }

  runLinesCounter(filename: string): void {
    console.log(this.wc.countLines(filename) + ' ' + filename);
  }

  runBytesCounter(filename: string): void {
    console.log(this.wc.countBytes(filename) + ' ' + filename);
  }

  runCharactersCounter(filename: string): void {
    console.log(this.wc.countCharacters(filename) + ' ' + filename);
  }
}
