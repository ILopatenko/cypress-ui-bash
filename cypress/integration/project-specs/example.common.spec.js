///<reference types="cypress" />;
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
cy.get('div[id=root]');
cy.get('div#root');
//CLASS
cy.get('input[class=something]');
cy.get('input.something');
//OTHER
cy.get('label[for=support_helpwith]');
//PARTIAL MATHING
cy.get('input[class*=some]');
//TWO PARAMETERS
cy.get('label[for=support_helpwith][data-label=value]');

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

//NEW TESTS EXAMPLES
