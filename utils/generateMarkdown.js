// two variables left open to match the user input for the corresponding license question
let licenseLink = '';
let licenseBadge = '';

// passing in the data from the inquirer prompts which will be used in the template literal returned below 
const generateMarkdown = function ({ title, description, usage, license, contributing, tests, questions }) {


  switch (license) {
    case license = 'apache':
      licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      licenseBadge = 'Apache 2.0 License';
      break;
    case license = 'boost':
      licenseLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      licenseBadge = 'Boost Software License 1.0';
      break;
    case license = 'BSD':
      licenseLink = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      licenseBadge = 'BSD 3-Clause License';
      break;
    case license = 'Creative Commons':
      licenseLink = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
      licenseBadge = 'CC0';
      break;
    case license = 'Eclipse':
      licenseLink = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      licenseBadge = 'Eclipse Public License 1.0';
      break;
    case license = 'GNU':
      licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      licenseBadge = 'GNU GPL v3';
      break;
    case license = 'IBM':
      licenseLink = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      licenseBadge = 'IBM Public License Version 1.0';
      break;
    case license = 'ISC':
      licenseLink = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      licenseBadge = 'ISC License (ISC)';
      break;
    case license = 'MIT':
      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      licenseBadge = 'The MIT License';
      break;
    case license = 'Mozilla':
      licenseLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      licenseBadge = 'Mozilla Public License 2.0';
      break;
    case license = 'Zlib':
      licenseLink = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
      licenseBadge = 'The zlib/libpng License';
      break;
  }

  // template for generated readme markdown file 
  return `
# ${title}

${description}

## Table of Contents
[usage](#usage)
[tests](#tests)
[contribution](contribution)
[questions](#questions)

## How to use/install the app 
${usage}

## Test to see if it works 
${tests}

## Want to help?
${contributing}

## Questions? Here's my contact:
${questions}

${licenseBadge}
${licenseLink}
`;
}

module.exports = { generateMarkdown };
