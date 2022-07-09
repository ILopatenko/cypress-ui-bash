#!/bin/bash
#v0.1 07/09/22
# Color variables
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
blue='\033[0;34m'
magenta='\033[0;35m'
cyan='\033[0;36m'
clear='\033[0m'
clear -x
echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}  Hi there! This is my bash script for creating UI test automation framework  ${magenta}||${clear}"
echo -e "${magenta}||${red}                          (based on Cypress 9.6.0)                            ${magenta}||${clear}"
echo -e "${magenta}||${green}                 from scratch with only 1 terminal command!                   ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${clear}"
echo
echo -e "                             ${cyan}LET's get STARTED ! ! !${yellow}"
echo
sleep 5
clear -x
echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}       STEP 0: create a new gitHub repository for your new project!           ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                          Copy that link to buffer!                           ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
PS3="Have you already created a new gitHub repository for this project?: (ENTER ONLY 1 OR 2) "
select opt in "YES, I've created"  "NO, I haven't created yet"; do
  case $opt in
    "YES, I've created")
    clear -x
    echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}           STEP 1: enter the gitHub link to your gitHub repository!           ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
      read -p "Enter the link here: " link
      sleep 1
      clear -x
      echo -e "${cyan}You entered:${green} '$link'"
      echo
      sleep 1
      echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
      sleep 1
      cutted=${link##*/}
      length=${#cutted}
      projectName=${cutted:0:length-4}
      echo -e "${cyan}Your project is :${green} '$projectName'"
      sleep 1
      echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
      sleep 1
      echo -e "${cyan}Checking if the folder ${green}'${projectName}' ${cyan} exists in current directory :${green}'$(pwd)'"
      sleep 1
      if [ -d $(pwd)"/"$projectName ]
        then
        echo
            echo -e "  ${cyan}Folder ${green}$projectName${cyan} exists in ${green}$(pwd) - ${red}I am going to delete it!"
      sleep 1
            echo -n "$(tput hpa $(tput cols))$(tput cub 7)[DANGER]"
      sleep 1
            echo $(rm -r $projectName)
      
      if [ -d $(pwd)"/$projectName" ]
        then
            echo "  CAN'T DELETE $projectName in $(pwd)!"  
      sleep 1
      echo -n "$(tput hpa $(tput cols))$(tput cub 7)[DANGER]"
      sleep 1
      exit
        else
            echo -e "  ${cyan}Folder ${green}$projectName ${cyan}was deleted from ${green}$(pwd)!"
            sleep 1
            echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
            sleep 1
      fi
        else
            echo -e "  ${cyan}Folder ${cyan}$projectName ${cyan}doesn't exist in ${green}$(pwd)!"
            sleep 1
            echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
            sleep 1
    fi
    sleep 2
    clear -x
 echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}            STEP 2: clonning gitHub repository to your computer!              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
    echo -e $(git clone $link)
    sleep 2
    if [ -d $(pwd)"/"$projectName ]
    then
    echo -e "  ${green}Your progect was clonned!${green}"
    echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
  
    else
    echo -e "  ${red}ERROR!"
    echo -n "$(tput hpa $(tput cols))$(tput cub 7)[DANGER]"
    fi
    sleep 2
    clear -x
echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                    STEP 3: initializing a new npm project!                   ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
    cd $projectName
    npm init -y
    if [ -f 'package.json' ] 
then
    echo -e    "   ${green}Progect was created!${clear}"
else
    echo -e "  ${red}ERROR!${clear}"
fi
     echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
     sleep 2
clear -x
echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                     STEP 4: installing Cypress v.9.6.0!                      ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                             (close cypress GUI!)                             ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
    npm i cypress@9.6.0
sleep 1
npx cypress open
clear -x

echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                      STEP 5: changing default settings                       ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
echo -e "${cyan}Updating cypress.json"
sleep 1
echo '
{
    "baseUrl":"https://localcoding.us/",
    "video":false,
    "defaultCommandTimeout":6000,
    "ignoreTestFiles":["**/1-getting-started/*","**/2-advanced-examples/*"],
    "viewportWidth": 1280
}
' > cypress.json
echo -e "   ${cyan}New cypress.json is${clear}"
cat cypress.json
echo -e -n "${green}$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 2
echo -e "${cyan}Updating cypress/support/index.js (cookies)"
sleep 1
echo '
afterEach(() => {
  //Code to Handle the Sesssions in cypress.
  //Keep the Session alive when you jump to another test
  let str = [];
  cy.getCookies().then((cook) => {
    cy.log(cook);
    for (let l = 0; l < cook.length; l++) {
      if (cook.length > 0 && l == 0) {
        str[l] = cook[l].name;
        Cypress.Cookies.preserveOnce(str[l]);
      } else if (cook.length > 1 && l > 1) {
        str[l] = cook[l].name;
        Cypress.Cookies.preserveOnce(str[l]);
      }
    }
  });
});
' >> cypress/support/index.js
echo -e "   ${cyan}New cypress/support/index.js is${clear}"
cat cypress/support/index.js
echo -e -n "${green}$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 2
clear -x
echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                    STEP 6: creating new folders and files                    ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
echo -e "${cyan}Creating new folders${green}"
sleep 1
mkdir -p cypress/support/project-page-objects/{abstract,auth,default,pages}
mkdir -p cypress/integration/project-specs/{auth/{login,register},default/home,pages}

directory=$(pwd)
cd $directory'/cypress/integration/project-specs/auth/login'
touch login.mpe.spec.js login.smoke.positive.spec.js login.smoke.negative.spec.js login.dtc.spec.js

cd $directory'/cypress/integration/project-specs/auth/register'
touch register.mpe.spec.js register.smoke.positive.spec.js register.smoke.negative.spec.js register.dtc.spec.js

cd $directory'/cypress/integration/project-specs/default/home'
touch homeDefault.mpe.spec.js homeDefault.smoke.positive.spec.js homeDefault.smoke.negative.spec.js homeDefault.dtc.spec.js

echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 2
cd $directory
echo 
echo -e "${cyan}Creating example.common.spec.js file with common cypress commands and elements${green}"
sleep 1
echo "
import PageObjectFile from './path/path/path/fileNamePOM.js';
const pageObjectFile = new PageObjectFile();
//
describe('This is the Main Test Suite', () => {
  describe('PRECONDITIONS: load the page and check that page was loaded successfuly', () => {
    it('Loading the page', () => {
      cy.visit('/');
    });
    it('Checking that page was loaded successfuly', () => {
      cy.location('pathname').should('eq', '/user/register');
    });
  });
});
//

//Combo
describe('TEST SUITE', () => {
  it('TEST CASE', () => {
    cy.visit('/');
  });
});

//Single
describe('TEST SUITE', () => {});
it('TEST CASE', () => {});

/////////////
//SELECTORS//
/////////////
const selector = 'somethingSelector';
cy.get(selector);
//ID
cy.get('div[id="root"]');
cy.get('div#root');
//CLASS
cy.get('input[class="something"]');
cy.get('input.something');
//OTHER
cy.get('label[for="support_helpwith"]');
//PARTIAL MATHING
cy.get('input[class*="some"]');
//TWO PARAMETERS
cy.get('label[for="support_helpwith"][data-label="value"]');

/////////////
///SIBLINGS//
/////////////
cy.get('selector').children().first().last().next().prev();
cy.get('selector').children().first('div').last('p').next('h2').prev('input');
cy.get('selector').children().eq(5);
cy.get('selector').parent();

/////////////
///CHECKS////
/////////////
cy.get('selector').should('be.visible').should('have.text', 'businesses');
cy.get('selector').children('div').should('have.length', 2);
cy.get('link').should('have.attr', 'href', '/user/register');

cy.get('link')
  .click()
  .wait(500)
  .location('pathname')
  .should('eq', '/user/register')
  .go('back');

cy.get('button')
  .click({ force: true })
  .wait(500)
  .location('href')
  .should('contains', '/client?limit=20&page=1')
  .go('back');

/////////////
////INPUT////
/////////////
cy.get('selector')
  .type('abc123QAZ!@#', { delay: 20 })
  .should('have.value', 'abc123QAZ!@#');
cy.get('selector').type(
  '{backspace}{leftArrow}{rightArrow}{del}{leftArrow}{leftArrow}{backspace}{leftArrow}{leftArrow}{backspace}'
);

cy.get('selector').type('{selectAll}{del}').should('have.value', '');

/*    {backspace}	Deletes character to the left of the cursor
      {del}	        Deletes character to the right of the cursor
      {downArrow}	Moves cursor down
      {end}	        Moves cursor to the end of the line
      {enter}	    Types the Enter key
      {esc}	        Types the Escape key
      {home}	    Moves cursor to the start of the line
      {insert}	    Inserts character to the right of the cursor
      {leftArrow}	Moves cursor left
      {moveToEnd}	Moves cursor to end of typeable element
      {moveToStart}	Moves cursor to the start of typeable element
      {pageDown}	Scrolls down
      {pageUp}	    Scrolls up
      {rightArrow}	Moves cursor right
      {selectAll}	Selects all text by creating a selection range
      {upArrow}	    Moves cursor up  */

/*    {alt}	        Activates the altKey modifier.    Aliases: {option}
      {ctrl}	    Activates the ctrlKey modifier.   Aliases: {control}
      {meta}	    Activates the metaKey modifier.   Aliases: {command}, {cmd}
      {shift}	    Activates the shiftKey modifier. */
" > cypress/integration/project-specs/example.common.spec.js
echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 2


echo -e "${cyan}Creating page.json - main class for all the pages${green}"
sleep 1
touch cypress/support/project-page-objects/abstract/page.js
echo "
class Page {
  pageData = {
    pages: {
      home: {
        endpoint: '/',
        titleSelector: 'h1',
        titleText: 'Interactive learninglike an adventure',
      },
      login: {
        endpoint: '/user/login',
        titleSelector: 'h1',
        titleText: 'Welcome back!',
      },
      register: {
        endpoint: '/user/register',
        titleSelector: 'h1',
        titleText: 'Create an account',
      },
    },
    helper: {
      data: {
        user: {
          test1: {},
        },
      },
      set: {
        people: {
          firstName: [
            'James',
            'Robert',
            'John',
            'Michael',
            'David',
            'William',
            'Richard',
            'Joseph',
            'Thomas',
            'Charles',
            'Christopher',
            'Daniel',
            'Matthew',
            'Anthony',
            'Mark',
            'Donald',
            'Steven',
            'Paul',
            'Andrew',
            'Joshua',
            'Mary',
            'Patricia',
            'Jennifer',
            'Linda',
            'Elizabeth',
            'Barbara',
            'Susan',
            'Jessica',
            'Sarah',
            'Karen',
            'Lisa',
            'Nancy',
            'Betty',
            'Margaret',
            'Sandra',
            'Ashley',
            'Kimberly',
            'Emily',
            'Donna',
            'Michelle',
          ],
          lastName: [
            'Johnson',
            'Williams',
            'Brown',
            'Jones',
            'Garcia',
            'Miller',
            'Davis',
            'Rodriguez',
            'Martinez',
            'Hernandez',
            'Lopez',
            'Gonzales',
            'Wilson',
            'Anderson',
            'Thomas',
            'Taylor',
            'Moore',
            'Jackson',
            'Martin',
            'Lee',
            'Perez',
            'Thompson',
            'White',
            'Harris',
            'Sanchez',
            'Clark',
            'Ramirez',
            'Lewis',
            'Robinson',
            'Walker',
            'Young',
            'Allen',
            'King',
            'Wright',
            'Scott',
            'Torres',
            'Nguyen',
            'Hill',
            'Flores',
          ],
        },
        symbol: {
          letter: {
            eng: {
              lower: 'abcdefghijklmnopqrstuvwxyz',
              upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            },
          },
          special: {
            full: '!@#$%^\&*()\_-+={[}}:;<,>.?/|',
          },
          emoji: {},
        },
      },
      method: {
        getRandom(min = 0, max = 9) {
          return Math.floor(Math.random() * (max + 1 - min) + min);
        },
        getRandomFromList(list) {
          return list[this.getRandom(0, list.length - 1)];
        },
      },
    },
  };
  //METHODS
  visitEndpoint = (endpoint) =>
    cy.visit(endpoint).wait(500).location('pathname').should('eq', endpoint);
  visitMainEndpoint = (objectToVisit) => {
    cy.visit(objectToVisit.endpoint)
      .wait(500)
      .location('pathname')
      .should('eq', objectToVisit.endpoint)
      .get(objectToVisit.titleSelector)
      .should('have.text', objectToVisit.titleText);
  };
  visitHomeDefault = () => this.visitMainEndpoint(this.pageData.pages.home);
  visitRegister = () => this.visitMainEndpoint(this.pageData.pages.register);
  visitLogin = () => this.visitMainEndpoint(this.pageData.pages.login);
}
export default Page;
" > cypress/support/project-page-objects/abstract/page.js
echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 2


echo -e "${cyan}Creating test.spec.js - test spec for testing base project functionality (page methods, helpers, work with dataSets, unit testing)${green}"
sleep 1
touch cypress/integration/project-specs/test.spec.js
echo "
import Page from '../../support/project-page-objects/abstract/page';
const page = new Page();

describe('MAIN TEST SUITE', () => {
  describe('Open pages functionality', () => {
    it('Open Home Page (default version - before login)', () => {
      page.visitHomeDefault();
    });
    it('Open Register Page', () => {
      page.visitRegister();
    });
    it('Open Login Page', () => {
      page.visitHomeDefault();
    });
    it('Open Page by endpoint', () => {
      page.visitEndpoint('/course');
    });
  });
  describe('HELPERS', () => {
    describe('Get a random number', () => {
      describe('Deafault values - from [0,9]', () => {
        it('Single test', () => {
          const random = page.pageData.helper.method.getRandom();
          cy.log('Random number between 0 and 9 inclusive');
        });
        it('Unit test: the series of 50 tests with assertions', () => {
          for (let i = 0; i < 50; i++) {
            const testValue = page.pageData.helper.method.getRandom();
            expect(testValue).to.be.a('number');
            expect(testValue).to.be.at.least(0);
            expect(testValue).to.be.at.most(9);
          }
        });
      });
      describe('Given values - from [min,max]', () => {
        it('Single test', () => {
          const min = -10 - page.pageData.helper.method.getRandom();
          const max = 10 + page.pageData.helper.method.getRandom();
          const random = page.pageData.helper.method.getRandom(min, max);
          cy.log(
            'Random number between min and max'
          );
        });
        it('Unit test: the series of 50 tests with assertions', () => {
          const min = -10 - page.pageData.helper.method.getRandom();
          const max = 10 + page.pageData.helper.method.getRandom();
          for (let i = 0; i < 50; i++) {
            const testValue = page.pageData.helper.method.getRandom(min, max);
            expect(testValue).to.be.a('number');
            expect(testValue).to.be.at.least(min);
            expect(testValue).to.be.at.most(max);
          }
        });
      });
    });
  });
});

" > cypress/integration/project-specs/test.spec.js
echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 2
clear -x
echo -e "${cyan}Running test.spec.js${green}"
sleep 1
npx cypress run --spec 'cypress/integration/project-specs/test.spec.js'
sleep 2
clear -x




echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}||${yellow}            STEP 7: push all the changes to your gitHub repository            ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                                                                              ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${magenta}"
echo
sleep 2
git config --global --add safe.directory $(pwd)
echo -e "${cyan}Command 1: git add .${clear}"
git add .
sleep 1
echo -e "${cyan}Command 2: git status${clear}"
git status
sleep 1
echo -e "${cyan}Command 3: git commit${clear}"
git commit -m 'First commit' -m 'Current repository was created with the bash script v0.1'
sleep 1
echo -e -n "${green}$(tput hpa $(tput cols))$(tput cub 3)[OK]"
echo -e "${cyan}Command 4: git push${clear}"
git push
sleep 1
echo -e -n "${green}$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 1
clear -x
echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${green}                              SO FAR SO GOOD!                                 ${magenta}||${clear}"
echo -e "${magenta}||${green}               It looks like everything was done successfuly!                 ${magenta}||${clear}"
echo -e "${magenta}||${green}                             YOU CAN TEST IT!                                 ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${clear}"
echo
echo
sleep 2
echo "
 You can run your Cypress GUI with command:
 npx cypress open
 "
 echo
 echo 'OR you can change the default test script in package.json:

 "scripts": {
    "test": "npx cypress open"
  {
 '
sleep 1


sleep 3
      break
      ;;
    "NO, I haven't created yet")
    clear -x
      echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${yellow}           Create a new gitHub repository for your new project!               ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                          Copy that link to buffer!                           ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                        Run this script one more time!                        ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${clear}"
echo
sleep 3
       break
      ;;
    *) 
    clear -x
      echo
echo -e "${magenta}==================================================================================${clear}"
echo -e "${magenta}||${red}!WRONG OPTION! ${yellow}Create a new gitHub repository for your new project!           ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                          Copy that link to buffer!                           ${magenta}||${clear}"
echo -e "${magenta}||${yellow}                        Run this script one more time!                        ${magenta}||${clear}"
echo -e "${magenta}==================================================================================${clear}"
echo
sleep 3
echo -e "${red}YOU NEED TO DO:"
echo -e "${yellow}1) Change baseUrl in cypress.json to your project's Base URL"
echo -e "${yellow}2) Change default test script in package.json to next (to run Cypress GUI with command 'npm test')"
echo -e '"test": "npx cypress open"'
      break
      ;;
  esac
  done
  npx cypress open