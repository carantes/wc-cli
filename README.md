# Coding Challenges Series #001

This is part of the Coding Challenges series by John Crickett https://codingchallenges.fyi/challenges/challenge-wc.

## Write your own wc tool

The wc tool is used to count the number of words, lines, bytes and characters given a file or stdin.

## CLI Usage

```bash
yarn wc-cli sample.txt [option]
```

The following options are supported (modified some WC default options to make more sense)

- `-w`: prints the number of words in the file
- `-l`: prints the number of lines in the file
- `-b`: prints the number of bytes in the file
- `-c`: prints the number of characters in the file

For now stdin mode is not available due to a restriction in the `nest-commander` library:

```bash
cat sample.txt | yarn wc-cli [option]
```

## Run tests

To run the tests for the WC tool, go to the root directory of this repository and run the following command:

```bash
yarn test
```

## About this Project

This project was built using `NestJS`. I am also using the `nest-commander` package to provide the CLI structure and regular fs library to read and get info from local files.
