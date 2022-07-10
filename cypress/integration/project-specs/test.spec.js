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
          cy.log('Random number between min and max');
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
