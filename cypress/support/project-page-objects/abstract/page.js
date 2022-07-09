
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

