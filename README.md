# _Pig Latin Translator_

#### _A form that translates a sentence into Pig Latin, 8.16.2017_

#### By _Riki Montgomery and Margaret Berry_

## Setup/Installation Requirements
_Run the following commands in Terminal:_

1. `$ git clone` [this repository](https://github.com/codemargaret/pig-latin.git)
2. `$ cd pig-latin`
3. `$ open index.html`

## Specs
|  Specs | Input  | Output  |
|---|---|---|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | 3  |  3 |
| The program adds "way" to single-letter words beginning with a vowel. | i  | iway  |
| Add "way" to the end of multiple letter words beginning with vowels. | at  | atway  |
| For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay". | so, skirt, strap  | osay, irtskay, apstray  |
| For words beginning with "y", treat "y" as a consonant. | yes  | esyay  |
| If the first consonants include "qu", move the "u" along with the "q". | quit, squeal  | itquay, ealsquay  |

## Known Bugs
_There are no known bugs at this time._

## Support and contact details

_If you have questions or comments, please contact [Riki](mostriki820@gmail.com) or [Margaret](codeberry1@gmail.com)_

## Technologies Used
_We used HTML, CSS, JS, jQuery, and Bootstrap._

### License
*MIT License*

Copyright (c) 2017 **_Riki Montgomery and Margaret Berry_**
