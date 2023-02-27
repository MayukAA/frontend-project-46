### Hexlet tests and linter status:
[![Actions Status](https://github.com/MayukAA/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/MayukAA/frontend-project-46/actions)
[![build-gendiff](https://github.com/MayukAA/frontend-project-46/actions/workflows/build-gendiff.yml/badge.svg)](https://github.com/MayukAA/frontend-project-46/actions/workflows/build-gendiff.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/fd3a06348e751b291456/maintainability)](https://codeclimate.com/github/MayukAA/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fd3a06348e751b291456/test_coverage)](https://codeclimate.com/github/MayukAA/frontend-project-46/test_coverage)

<h1 align="center">Difference Generator</h1>

### Description

Difference Generator (GenDiff) is a CLI utility compares two configuration files and shows a difference.

Supported files and formats:

- Input formats: **.json**, **.yaml**, **.yml**;
- Output formats: **stylish**, **plain**, **JSON**.

### Minimum Requirements

Installed [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/).

### Installation

1. In the command line terminal, navigate to the directory where the game will be installed;
2. Clone the repository: `git clone git@github.com:MayukAA/frontend-project-46.git`;
3. Install project dependencies: `make install`;
4. Install the package with the utility locally: `npm link`.

After installation, you can learn how to use the utility using the **gendiff** command and the **-h** flag: `gendiff -h`.

Run the tests: `make test`.

Run the linter: `make lint`.

### Video Demonstration

Diff of flat **json** files:

`gendiff path/to/file1.json path/to/file2.json`

[![asciicast](https://asciinema.org/a/WkME3IgY5n5qDzIpStCYwHzvQ.png)](https://asciinema.org/a/WkME3IgY5n5qDzIpStCYwHzvQ)

Diff of flat **yaml** files:

`gendiff path/to/file1.yaml path/to/file2.yaml`

[![asciicast](https://asciinema.org/a/R8pxtIfwEu1ollx0qjGcESuZW.png)](https://asciinema.org/a/R8pxtIfwEu1ollx0qjGcESuZW)

Diff of deep files. Format **stylish**:

`gendiff path/to/file1.(format) path/to/file2.(format)`
or
`gendiff -f stylish path/to/file1.(format) path/to/file2.(format)`

[![asciicast](https://asciinema.org/a/KkPVs86AIZeFfEayrhFbyIjWh.png)](https://asciinema.org/a/KkPVs86AIZeFfEayrhFbyIjWh)

Diff of deep files. Format **plain**:

`gendiff -f plain path/to/file1.(format) path/to/file2.(format)`

[![asciicast](https://asciinema.org/a/TjEcrsLEqsp5FAbiY6tvjSRN4.png)](https://asciinema.org/a/TjEcrsLEqsp5FAbiY6tvjSRN4)

Diff of deep files. Format **json**:

`gendiff -f json path/to/file1.(format) path/to/file2.(format)`

[![asciicast](https://asciinema.org/a/l7JlHV5ncZbc93GpK2b7keQCz.png)](https://asciinema.org/a/l7JlHV5ncZbc93GpK2b7keQCz)
