///<reference types="cypress" />;
const rfHelper = {
    checkSubmit(status) {
      cy.get('button[type ="submit"]').last().should(`be.${status}`);
    },
    checkBox: () => {
      cy.log('This is Checkbox tester');
      cy.get('input#user_login_agreement').click();
    },
  },
  doAllMethods = (object) => {
    for (let method in object) {
      object[method]();
    }
  };
const tester = {
  firstName: () => {
    cy.log('This is First Name input field tester');
    cy.get('input#user_login_firstName')
      .clear()
      .wait(50)
      .type('FirstName', { delay: 10 })
      .wait(50);
  },
  lastName: () => {
    cy.log('This is Last Name input field tester');
    cy.get('input#user_login_lastName')
      .wait(50)
      .clear()
      .type('LastName', { delay: 10 })
      .wait(50);
  },
  phone: () => {
    cy.log('This is Phone input field tester');
    cy.get('input#user_login_phone').wait(50).clear().type(6662224477).wait(50);
  },
  email: () => {
    cy.log('This is Email input field tester');
    cy.get('input#user_login_email')
      .wait(50)
      .clear()
      .type('test@email.com', { delay: 10 })
      .wait(50);
  },
  password: () => {
    cy.log('This is Password input field tester');
    cy.get('input#user_login_password')
      .wait(50)
      .clear()
      .type('TestPass!@#123')
      .wait(50);
  },
};
describe('REGISTER PAGE FORM - Main Test Suite', () => {
  before('PRECONDITIONS: Load the Register Page', () => {
    cy.visit('/user/register');
  });

  describe('Checkings', () => {
    it.skip('1', () => {
      rfHelper.checkSubmit('disabled');
    });

    it.skip('Invokes all the methods of helper in loop', () => {
      for (let test in tester) {
        tester[test]();
      }
      cy.wait(1000).reload();
    });
    it.skip('test helper that takes in an object where each key is a function', () => {
      doAllMethods(tester);
      cy.wait(1000).reload();
    });
    it('final', () => {
      for (let method in tester) {
        const currentSet = { ...tester };
        delete currentSet[method];
        doAllMethods(currentSet);
        rfHelper.checkBox();
        rfHelper.checkSubmit('disabled');
        cy.wait(500).reload().wait(500);
      }
    });
  });
});
