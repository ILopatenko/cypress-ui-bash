///<reference types="cypress" />;

const rpHelper = {
  endpoint: '/user/register',
  title: 'Local Coding',
  elements: {
    logo: {
      selector: 'a[href="/"]',
      text: 'Local Coding',
      attr: {
        class: {
          name: 'class',
          value: 'site-name',
        },
        href: {
          name: 'href',
          value: '/',
        },
      },
      img: {
        selector: 'img',
        attr: {
          src: {
            name: 'src',
            value: '/static/lc-logo.308e6e9a.svg',
          },
          alt: {
            name: 'alt',
            value: 'Local Coding Logo',
          },
          class: {
            name: 'class',
            value: 'logo me-2',
          },
        },
      },
    },
    header: {
      selector: 'h1',
      text: 'Create an account',
    },
    input: {
      name: {
        checkHand: {
          success: {
            iconSelector: 'span[class*="ant-form-item-feedback-icon-success"]',
          },
          error: {
            iconSelector: 'span[class*="ant-form-item-feedback-icon-error"]',
            messageSelector: 'div[role="alert"][class*="explain-error"]',
            messageText: {
              number: 'Name should not include numbers',
              spaceOrSymbolOrNonEng:
                'Name should not include non word characters',
            },
          },
        },
        first: {
          id: {
            name: 'id',
            value: 'user_login_firstName',
          },
          placeholder: {
            name: 'placeholder',
            value: 'First Name',
          },
        },
        last: {
          id: {
            name: 'id',
            value: 'user_login_lastName',
          },
          placeholder: {
            name: 'placeholder',
            value: 'Last Name',
          },
        },
      },
      country: {
        itemSelector: 'span[class="ant-select-selection-item"]',
        listSelector: 'div[class="rc-virtual-list-holder-inner"]',
        arrt: {
          name: 'title',
          value: 'United States',
        },
        countryToSelect: {
          selector: 'div[title="Republic of Serbia"]',
          valueToCheck: 'Republic of Serbia',
        },
      },
    },
  },
  methods: {
    checkInputFieldNameBase(object) {
      cy.get(`input#${object.id.value}`)
        .should('be.visible')
        .should('have.attr', object.placeholder.name, object.placeholder.value)
        .should('have.value', '')
        .type('ABC')
        .should('have.value', 'ABC')
        .type('abc')
        .should('have.value', 'ABCabc')
        .type('{moveToStart}{rightArrow}{backspace}{del}')
        .should('have.value', 'Cabc')
        .type('{moveToStart}{moveToEnd}{leftArrow}{backspace}{del}')
        .should('have.value', 'Ca')
        .type('{selectAll}{del}')
        .should('have.value', '')
        .type('CheckedAsName')
        .should('have.value', 'CheckedAsName');
      cy.get(`input#${object.id.value}`)
        .next('span')
        .children(rpHelper.elements.input.name.checkHand.success.iconSelector)
        .should('be.visible');
    },
  },
};
describe('REGISTER PAGE - Main Test Suite', () => {
  before('PRECONDITIONS: Load the page (Home Page for example)', () => {
    cy.visit(rpHelper.endpoint);
  });
  describe('MAIN PAGE ELEMENTS AND THEIR BASE FUNCTIONALITY', () => {
    describe('Checking page title (text in tab in browser)', () => {
      it('Checking that Page Title is not empty', () => {
        cy.title().should('not.be.empty');
      });
      it('Checking that Page Title is a string', () => {
        cy.title().should('be.a', 'string');
      });
      it(`Checking that Page Title has text "${rpHelper.title}"`, () => {
        cy.title().should('be.eq', rpHelper.title);
      });
    });
    describe('Checking Logo', () => {
      it('Checking that Logo exists (it is possible to find any element by given selector)', () => {
        cy.get(rpHelper.elements.logo.selector);
      });
      it('Checking that Logo is visible', () => {
        cy.get(rpHelper.elements.logo.selector).should('be.visible');
      });
      it(`Checking that Logo has text "${rpHelper.elements.logo.text}"`, () => {
        cy.get(rpHelper.elements.logo.selector).should(
          'have.text',
          rpHelper.elements.logo.text
        );
      });
      it(`Checking that Logo has attribute"${rpHelper.elements.logo.attr.class.name}" with the value "${rpHelper.elements.logo.attr.class.value}"`, () => {
        cy.get(rpHelper.elements.logo.selector).should(
          'have.attr',
          rpHelper.elements.logo.attr.class.name,
          rpHelper.elements.logo.attr.class.value
        );
      });
      it(`Checking that Logo has attribute"${rpHelper.elements.logo.attr.href.name}" with the value "${rpHelper.elements.logo.attr.href.value}"`, () => {
        cy.get(rpHelper.elements.logo.selector).should(
          'have.attr',
          rpHelper.elements.logo.attr.href.name,
          rpHelper.elements.logo.attr.href.value
        );
      });
      it('Checking that Logo has an image (as inner "img" element)', () => {
        cy.get(rpHelper.elements.logo.selector).children(
          rpHelper.elements.logo.img.selector
        );
      });
      it('Checking that Logo Image is visible', () => {
        cy.get(rpHelper.elements.logo.selector)
          .children(rpHelper.elements.logo.img.selector)
          .should('be.visible');
      });
      it(`Checking that Logo Image has attribute"${rpHelper.elements.logo.img.attr.src.name}" with the value "${rpHelper.elements.logo.img.attr.src.value}"`, () => {
        cy.get(rpHelper.elements.logo.selector)
          .children(rpHelper.elements.logo.img.selector)
          .should(
            'have.attr',
            rpHelper.elements.logo.img.attr.src.name,
            rpHelper.elements.logo.img.attr.src.value
          );
      });
      it(`Checking that Logo Image has attribute"${rpHelper.elements.logo.img.attr.alt.name}" with the value "${rpHelper.elements.logo.img.attr.alt.value}"`, () => {
        cy.get(rpHelper.elements.logo.selector)
          .children(rpHelper.elements.logo.img.selector)
          .should(
            'have.attr',
            rpHelper.elements.logo.img.attr.alt.name,
            rpHelper.elements.logo.img.attr.alt.value
          );
      });
      it(`Checking that Logo Image has attribute"${rpHelper.elements.logo.img.attr.class.name}" with the value "${rpHelper.elements.logo.img.attr.class.value}"`, () => {
        cy.get(rpHelper.elements.logo.selector)
          .children(rpHelper.elements.logo.img.selector)
          .should(
            'have.attr',
            rpHelper.elements.logo.img.attr.class.name,
            rpHelper.elements.logo.img.attr.class.value
          );
      });
    });
    describe('Checking Page Header', () => {
      it('Checking that Page Header exists (it is possible to find any element by given selector)', () => {
        cy.get(rpHelper.elements.header.selector);
      });
      it('Checking that Page Header is visible', () => {
        cy.get(rpHelper.elements.header.selector).should('be.visible');
      });
      it(`Checking that Page Header has text "${rpHelper.elements.header.text}"`, () => {
        cy.get(rpHelper.elements.header.selector).should(
          'have.text',
          rpHelper.elements.header.text
        );
      });
    });
    describe('Checking First Name Input Field', () => {
      it('Checking with the standart method for Name Input Field', () => {
        rpHelper.methods.checkInputFieldNameBase(
          rpHelper.elements.input.name.first
        );
      });
    });
    describe('Checking Last Name Input Field', () => {
      it('Checking with the standart method for Name Input Field', () => {
        rpHelper.methods.checkInputFieldNameBase(
          rpHelper.elements.input.name.last
        );
      });
    });
    describe('Checking Country Drop Down Menu', () => {
      it('Checking that default value is "United States"', () => {
        let array = [];
        cy.get(rpHelper.elements.input.country.itemSelector)
          .should('be.visible')
          .should(
            'have.attr',
            rpHelper.elements.input.country.arrt.name,
            rpHelper.elements.input.country.arrt.value
          )
          .should('have.text', rpHelper.elements.input.country.arrt.value)
          .click();
        cy.get(rpHelper.elements.input.country.listSelector);
        cy.get(
          rpHelper.elements.input.country.countryToSelect.selector
        ).click();
        cy.get(rpHelper.elements.input.country.itemSelector)
          .should('be.visible')
          .should(
            'have.attr',
            rpHelper.elements.input.country.arrt.name,
            rpHelper.elements.input.country.countryToSelect.valueToCheck
          )
          .should(
            'have.text',
            rpHelper.elements.input.country.countryToSelect.valueToCheck
          );
      });
    });
    describe('Checking Phone Input Field', () => {});
    describe('Checking Email Input Field', () => {});
    describe('Checking Password Input Field', () => {});
    describe('Checking Agreements block', () => {
      describe('Checking Agreements checkbox', () => {});
      describe('Checking Agreements block text', () => {});
      describe('Checking Agreements', () => {
        describe('Checking Agreements link', () => {});
        describe('Checking Agreements modal', () => {});
      });
    });
    describe('Checking Register button', () => {});
    describe('Checking Log In block', () => {
      describe('Checking Log In block text', () => {});
      describe('Checking Log In block link', () => {});
    });

    //'Local Coding'
    it('Checking that REGISTER button is disabled by default', () => {
      cy.get('button[type="submit"]').should('be.disabled');
    });
  });
  describe('SMOKE TEST. POSITIVE', () => {});
  describe('SMOKE TEST. NEGATIVE', () => {});
});
