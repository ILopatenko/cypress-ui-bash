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
          code: '+1',
        },
        countryToSelect: {
          selector: 'div[title="Republic of Serbia"]',
          valueToCheck: 'Republic of Serbia',
        },
      },
      phone: {
        attr: {
          id: {
            name: 'id',
            value: 'user_login_phone',
          },
          placeholder: {
            name: 'placeholder',
            value: 'Phone Number',
          },
          type: {
            name: 'type',
            value: 'phone',
          },
        },
      },
      email: {
        id: {
          name: 'id',
          value: 'user_login_email',
        },
        placeholder: {
          name: 'placeholder',
          value: 'Email',
        },
        type: {
          name: 'type',
          value: 'text',
        },
      },
      password: {
        id: {
          name: 'id',
          value: 'user_login_password',
        },
        placeholder: {
          name: 'placeholder',
          value: 'Password',
        },
        type: {
          name: 'type',
          value: 'password',
        },
      },
    },
    termsBlock: {
      text: 'I have read',
      link: {
        selector: {
          element: 'button',
          name: 'data-qa',
          value: 'termsBtn',
        },
        text: 'Terms and agreements',
      },
      cBox: {
        element: 'input',
        selector: 'id="user_login_agreement"',
      },
      modal: {
        closeBtn: 'button[aria-label="Close"]',
        text: 'Terms and agreements',
      },
    },
    logInBlock: {
      text: 'Already have an account? Just click',
      link: {
        element: 'a',
        attr: 'href',
        value: '/user/login',
        text: 'Log in',
      },
    },
    registerBtn: {
      element: 'button',
      selector: 'type="submit"',
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
      numbers: '0123456789',
      special: {
        full: '!@#$%^&*()_-+={[}}:;<,>.?/|',
        email: '!#$%^|~/&*-_=+?',
      },
      emoji: {},
      email: {
        domain: [
          'gmail',
          'yahoo',
          'hotmail',
          'aol',
          'msn',
          'outlook',
          'yandex',
        ],
        top: ['com', 'net', 'org', 'co', 'us', 'fr', 'de', 'ru'],
      },
    },
  },
  methods: {
    //Checking Input Fields
    checkInputWithRandomFromSet(inputId, set, quantity = 5) {
      const testString = rpHelper.methods.general.getSomeSymbolsFromSet(
        set,
        quantity
      );
      cy.get(`input#${inputId}`)
        .clear()
        .type(testString, { delay: 20 })
        .wait(300)
        .should('have.value', testString)
        .wait(300);
    },
    checkSuccessIcon(inputId) {
      cy.get(`input#${inputId}`)
        .next('span')
        .children(rpHelper.elements.input.name.checkHand.success.iconSelector)
        .should('be.visible');
    },
    checkErrorIcon(inputId) {
      cy.get(`input#${inputId}`)
        .next('span')
        .children(rpHelper.elements.input.name.checkHand.error.iconSelector)
        .should('be.visible');
    },
    checkErrorMessage(inputId, expectedMessage) {
      cy.get(`input#${inputId}`)
        .parent('span')
        .parent('div')
        .parent('div')
        .next('div')
        .children(rpHelper.elements.input.name.checkHand.error.messageSelector)
        .should('be.visible')
        .should('have.text', expectedMessage);
    },
    checkInputEngLower(inputId, quantity = 6) {
      rpHelper.methods.checkInputWithRandomFromSet(
        inputId,
        rpHelper.set.symbol.letter.eng.lower,
        quantity
      );
    },
    checkInputEngUpper(inputId, quantity = 6) {
      rpHelper.methods.checkInputWithRandomFromSet(
        inputId,
        rpHelper.set.symbol.letter.eng.upper,
        quantity
      );
    },
    checkInputNumbers(inputId, quantity = 6) {
      rpHelper.methods.checkInputWithRandomFromSet(
        inputId,
        rpHelper.set.symbol.numbers,
        quantity
      );
    },
    checkInputSymbols(inputId, quantity = 6) {
      rpHelper.methods.checkInputWithRandomFromSet(
        inputId,
        rpHelper.set.symbol.special.full,
        quantity
      );
    },
    checkNameField(InputId) {
      rpHelper.methods.checkInputEngLower(InputId);
      rpHelper.methods.checkSuccessIcon(InputId);
      rpHelper.methods.checkInputEngUpper(InputId);
      rpHelper.methods.checkSuccessIcon(InputId);
    },
    checkPasswordField(InputId) {
      rpHelper.methods.checkNameField(InputId);
      rpHelper.methods.checkInputNumbers(InputId);
      rpHelper.methods.checkSuccessIcon(InputId);
      rpHelper.methods.checkInputSymbols(InputId);
      rpHelper.methods.checkSuccessIcon(InputId);
    },
    //Generating User Data
    getRandomFirstName() {
      return rpHelper.methods.general.getRandomElement(
        rpHelper.set.people.firstName
      );
    },
    getRandomLastName() {
      return rpHelper.methods.general.getRandomElement(
        rpHelper.set.people.lastName
      );
    },
    getRandomFullName() {
      return {
        firstName: rpHelper.methods.getRandomFirstName(),
        lastName: rpHelper.methods.getRandomLastName(),
      };
    },
    getRandomUSPhoneNumber() {
      return rpHelper.methods.general.getRandomBetween(1000000000, 9999999999);
    },
    getRandomEmailBasedOnFullName(fullNameObject) {
      const symbols = rpHelper.methods.general.getSomeSymbolsFromSet(
        rpHelper.set.symbol.special.email
      );
      const domain = rpHelper.methods.general.getRandomElement(
        rpHelper.set.symbol.email.domain
      );
      const topDomain = rpHelper.methods.general.getRandomElement(
        rpHelper.set.symbol.email.top
      );
      return `${fullNameObject.firstName.toLowerCase()}_${symbols}_${fullNameObject.lastName.toLowerCase()}_${rpHelper.methods.general.getRandomBetween(
        1950,
        2005
      )}@${domain}.${topDomain}`;
    },
    getStrongPassword(sectionLength = 3) {
      let password = '';
      for (let i = 0; i < sectionLength; i++) {
        let enLower = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.letter.eng.lower,
          1
        );
        password += enLower;
        let enUpper = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.letter.eng.upper,
          1
        );
        password += enUpper;
        let symbol = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.special.full,
          1
        );
        password += symbol;
        let number = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.numbers,
          1
        );
        password += number;
      }
      return password;
    },
    getRandonDataSetForRegistration() {
      const firstName = rpHelper.methods.getRandomFirstName();
      const lastName = rpHelper.methods.getRandomLastName();
      const country = 'United States';
      const phoneNumber = rpHelper.methods.getRandomUSPhoneNumber();
      const email = rpHelper.methods.getRandomEmailBasedOnFullName({
        firstName,
        lastName,
      });
      const password = rpHelper.methods.getStrongPassword();
      return { firstName, lastName, country, phoneNumber, email, password };
    },
    general: {
      getRandomBetween(min = 0, max = 9) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
      },
      getRandomElement(list) {
        return list[
          rpHelper.methods.general.getRandomBetween(0, list.length - 1)
        ];
      },
      getSomeSymbolsFromSet(set, quantity = 6) {
        let result = '';
        for (let i = 0; i < quantity; i++) {
          result +=
            set[rpHelper.methods.general.getRandomBetween(0, set.length - 1)];
        }
        return result;
      },
    },
  },
};
describe('REGISTER PAGE - Main Test Suite', () => {
  const firstNameSelector = `input[id=${rpHelper.elements.input.name.first.id.value}]`;
  const lastNameSelector = `input[id=${rpHelper.elements.input.name.last.id.value}]`;
  const phoneSelector = `input#${rpHelper.elements.input.phone.attr.id.value}`;
  const emailSelector = `input#${rpHelper.elements.input.email.id.value}`;
  const passwordSelector = `input#${rpHelper.elements.input.password.id.value}`;
  const registerBtnSelector = `${rpHelper.elements.registerBtn.element}[${rpHelper.elements.registerBtn.selector}]`;
  const checkBoxSelector = `${rpHelper.elements.termsBlock.cBox.element}[${rpHelper.elements.termsBlock.cBox.selector}]`;
  const newUser = rpHelper.methods.getRandonDataSetForRegistration();

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

    describe('Checking First Name Input Field - ADVANCED', () => {
      it('Checking that First Name Input Field exists (it is possible to find any element by given selector)', () => {
        cy.get(firstNameSelector);
      });
      it('Checking that First Name Input Field is visible', () => {
        cy.get(firstNameSelector).should('be.visible');
      });
      it(`Checking that First Name Input Field has placeholder "${rpHelper.elements.input.name.first.placeholder.value}"`, () => {
        cy.get(firstNameSelector).should(
          'have.attr',
          rpHelper.elements.input.name.first.placeholder.name,
          rpHelper.elements.input.name.first.placeholder.value
        );
      });
      it('Checking with the standart method for Name Input Field', () => {
        rpHelper.methods.checkNameField(
          rpHelper.elements.input.name.first.id.value
        );
      });
    });
    describe('Checking Last Name Input Field - ADVANCED', () => {
      it('Checking that Last Name Input Field exists (it is possible to find any element by given selector)', () => {
        cy.get(lastNameSelector);
      });
      it('Checking that Last Name Input Field is visible', () => {
        cy.get(lastNameSelector).should('be.visible');
      });
      it(`Checking that Last Name Input Field has placeholder "${rpHelper.elements.input.name.last.placeholder.value}"`, () => {
        cy.get(lastNameSelector).should(
          'have.attr',
          rpHelper.elements.input.name.last.placeholder.name,
          rpHelper.elements.input.name.last.placeholder.value
        );
      });
      it('Checking with the standart method for Name Input Field', () => {
        rpHelper.methods.checkNameField(
          rpHelper.elements.input.name.last.id.value
        );
      });
    });
    describe('Checking Country Drop Down Menu', () => {
      it('Checking that default value is "United States"', () => {
        cy.get(rpHelper.elements.input.country.itemSelector)
          .should('be.visible')
          .should(
            'have.attr',
            rpHelper.elements.input.country.arrt.name,
            rpHelper.elements.input.country.arrt.value
          )
          .should('have.text', rpHelper.elements.input.country.arrt.value);
      });
      it('Checking that it is possible to change the country', () => {
        let testArray = [];
        let random;
        cy.get(rpHelper.elements.input.country.itemSelector)
          .should('be.visible')
          .should(
            'have.attr',
            rpHelper.elements.input.country.arrt.name,
            rpHelper.elements.input.country.arrt.value
          )
          .should('have.text', rpHelper.elements.input.country.arrt.value)
          .click();
        cy.get(rpHelper.elements.input.country.listSelector)
          .children()
          .each((e) => {
            let itemTitle = e[0].innerText;
            testArray.push(itemTitle);
            if (testArray.length === 11) {
              random = rpHelper.methods.general.getRandomElement(testArray);
              cy.get(`div[title="${random}"]`)
                .click()
                .should(
                  'have.attr',
                  rpHelper.elements.input.country.arrt.name,
                  random
                );
            }
          })
          .wait(500);
      });
      it('Select default country', () => {
        cy.get(rpHelper.elements.input.country.itemSelector).click();
        cy.get(rpHelper.elements.input.country.listSelector);
        cy.get(`div[title="${rpHelper.elements.input.country.arrt.value}"]`)
          .click()
          .should(
            'have.attr',
            rpHelper.elements.input.country.arrt.name,
            rpHelper.elements.input.country.arrt.value
          );
      });
    });

    describe('Checking Phone Input Field', () => {
      it('Checking that Phone Input Field exists (it is possible to find any element by given selector)', () => {
        cy.get(phoneSelector);
      });
      it('Checking that Phone Input Field is visible', () => {
        cy.get(phoneSelector).should('be.visible');
      });
      it(`Checking that Phone Input Field has placeholder "${rpHelper.elements.input.phone.attr.placeholder.value}"`, () => {
        cy.get(phoneSelector).should(
          'have.attr',
          rpHelper.elements.input.phone.attr.placeholder.name,
          rpHelper.elements.input.phone.attr.placeholder.value
        );
      });
      it(`Checking that Phone Input Field has attribute"${rpHelper.elements.input.phone.attr.type.name}" with the value "${rpHelper.elements.input.phone.attr.type.value}"`, () => {
        cy.get(phoneSelector).should(
          'have.attr',
          rpHelper.elements.input.phone.attr.type.name,
          rpHelper.elements.input.phone.attr.type.value
        );
      });
      it(`Checking that "${rpHelper.elements.input.country.arrt.value}" has phone code value "${rpHelper.elements.input.country.arrt.code}"`, () => {
        cy.get(phoneSelector)
          .prev('span')
          .should('have.text', rpHelper.elements.input.country.arrt.code);
      });
      it(`Enter a valid random phone number`, () => {
        cy.get(phoneSelector).type(
          rpHelper.methods.general.getRandomBetween(1000000000, 9999999999)
        );
      });
    });

    describe('Checking Email Input Field', () => {
      it('Checking with the standart method for All Symbols Input Field', () => {
        const host1 = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.letter.eng.lower
        );
        const domen1 = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.numbers
        );

        const host2 = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.special.email
        );
        let host2fixed = host2
          .split('')
          .map((e) => (e === '@' || e === '.' ? '$' : e))
          .join('');
        const domen2 = rpHelper.methods.general.getSomeSymbolsFromSet(
          rpHelper.set.symbol.letter.eng.upper
        );

        cy.get(emailSelector)
          .should('be.visible')
          .type(`${host1}-${host2fixed}_@${domen1}.${domen2}`);
      });
    });

    describe('Checking Password Input Field', () => {
      it('Checking with the standart method for Password Input Field', () => {
        rpHelper.methods.checkPasswordField(
          rpHelper.elements.input.password.id.value
        );
      });
    });

    describe('Checking Agreements block', () => {
      const linkSelector = `${rpHelper.elements.termsBlock.link.selector.element}[${rpHelper.elements.termsBlock.link.selector.name}="${rpHelper.elements.termsBlock.link.selector.value}"]`;
      describe('Checking Agreements block text', () => {
        it('Checking that Terms and Agreements text exists (it is possible to find any element by given selector)', () => {
          cy.get(linkSelector).parent('span');
        });
        it('Checking that Terms and Agreements text is visible', () => {
          cy.get(linkSelector).parent('span').should('be.visible');
        });
        it(`Checking that Terms and Agreements text has value "${rpHelper.elements.termsBlock.link.text}"`, () => {
          cy.get(linkSelector)
            .parent('span')
            .should(
              'have.text',
              rpHelper.elements.termsBlock.text +
                rpHelper.elements.termsBlock.link.text
            );
        });
      });

      describe('Checking Agreements Link', () => {
        it('Checking that Terms and Agreements link exists (it is possible to find any element by given selector)', () => {
          cy.get(linkSelector);
        });
        it('Checking that Terms and Agreements link is visible', () => {
          cy.get(linkSelector).should('be.visible');
        });
        it(`Checking that Terms and Agreements link has text "${rpHelper.elements.termsBlock.link.text}"`, () => {
          cy.get(linkSelector).should(
            'have.text',
            rpHelper.elements.termsBlock.link.text
          );
        });
        it(`Checking that Terms and Agreements link is clickable and opens a new modal`, () => {
          cy.get(linkSelector).click();
          cy.get(rpHelper.elements.termsBlock.modal.closeBtn)
            .next('div')
            .should('be.visible')
            .should('have.text', rpHelper.elements.termsBlock.modal.text);
          cy.get(rpHelper.elements.termsBlock.modal.closeBtn)
            .should('be.visible')
            .click();
        });
        it(`Checking that Register button is disabled before check box is unchecked`, () => {
          cy.get(
            `${rpHelper.elements.registerBtn.element}[${rpHelper.elements.registerBtn.selector}]`
          ).should('be.disabled');
        });
        //TODO!
        describe('Checking Agreements modal', () => {});
      });
      describe('Checking Agreements checkbox', () => {
        it('Checking that Agreements checkbox exists (it is possible to find any element by given selector)', () => {
          cy.get(checkBoxSelector);
        });
        it('Checking that Agreements checkbox is unchecked by default', () => {
          cy.get(checkBoxSelector).should('not.be.checked');
        });
        it('Click', () => {
          cy.get(checkBoxSelector).check();
        });
        it('Checking that Agreements checkbox is checked after the click', () => {
          cy.get(checkBoxSelector).should('be.checked');
        });
      });
    });
    describe('Checking Register button', () => {
      it(`Checking that Register button is enabled after check box is checked`, () => {
        cy.get(registerBtnSelector).should('be.enabled');
      });
      it('Uncheck', () => {
        cy.get(checkBoxSelector).uncheck();
      });
    });
    describe('Checking Log In block', () => {
      const logBl = rpHelper.elements.logInBlock;
      const logBlSel = `${logBl.link.element}[${logBl.link.attr}="${logBl.link.value}"]`;
      describe('Checking Log In block text', () => {
        it('Checking that Log In block text exists (it is possible to find any element by given selector)', () => {
          cy.get(logBlSel).parent('p');
        });
        it('Checking that Log In block text is visible', () => {
          cy.get(logBlSel).parent('p').should('be.visible');
        });
        it(`Checking that Log In block text has value "${logBl.text}"`, () => {
          cy.get(logBlSel)
            .parent('p')
            .should('have.text', logBl.text + ' ' + logBl.link.text + '.');
        });
      });
      describe('Checking Log In block link', () => {
        it('Checking that Log In block link exists (it is possible to find any element by given selector)', () => {
          cy.get(logBlSel);
        });
        it('Checking that Log In block link is visible', () => {
          cy.get(logBlSel).should('be.visible');
        });
        it(`Checking that Log In block link has text "${logBl.link.text}"`, () => {
          cy.get(logBlSel).should('have.text', logBl.link.text);
        });
      });
    });
  });
  describe('SMOKE TEST. POSITIVE', () => {
    it('Load Register Page', () => {
      cy.visit(rpHelper.endpoint);
    });
    it('Input First Name', () => {
      cy.get(firstNameSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.firstName)
        .should('have.value', newUser.firstName);
    });
    it('Input Last Name', () => {
      cy.get(lastNameSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.lastName)
        .should('have.value', newUser.lastName);
    });
    it('Input Phone', () => {
      cy.get(phoneSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.phoneNumber)
        .should('have.value', newUser.phoneNumber);
    });
    it('Input Email', () => {
      cy.get(emailSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.email)
        .should('have.value', newUser.email);
    });
    it('Input Password', () => {
      cy.get(passwordSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.password)
        .should('have.value', newUser.password);
    });
    it('Agree with Terms', () => {
      cy.get(checkBoxSelector).check().should('be.checked');
    });
    it('Click Register button', () => {
      cy.get(registerBtnSelector).should('be.enabled').click();
    });
    it('Check that user was registered successfuly and redirected to Welcome Page', () => {
      cy.location('pathname').should('eq', '/welcome');
      cy.get('h1')
        .should(
          'have.text',
          'Welcome to the coolest coding school. We are excited you are here!'
        )
        .wait(2000);
    });
  });
  describe('SMOKE TEST. NEGATIVE', () => {
    it('Load Register Page', () => {
      cy.visit(rpHelper.endpoint);
    });
    it('Input First Name', () => {
      cy.get(firstNameSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.firstName)
        .should('have.value', newUser.firstName);
    });
    it('Input Last Name', () => {
      cy.get(lastNameSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.lastName)
        .should('have.value', newUser.lastName);
    });
    it('Input Phone', () => {
      cy.get(phoneSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.phoneNumber)
        .should('have.value', newUser.phoneNumber);
    });
    it('Input Email', () => {
      cy.get(emailSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.email)
        .should('have.value', newUser.email);
    });
    it('Input Password', () => {
      cy.get(passwordSelector)
        .clear()
        .should('have.value', '')
        .type(newUser.password)
        .should('have.value', newUser.password);
    });
    it('Agree with Terms', () => {
      cy.get(checkBoxSelector).check().should('be.checked');
    });
    it('Click Register button', () => {
      cy.get(registerBtnSelector).should('be.enabled').click();
    });
    it('Check that user was not registered successfuly and error message apears at Registration Page', () => {
      cy.location('pathname').should('eq', rpHelper.endpoint);
      cy.get('div[class=ant-notification-notice-message]').should(
        'have.text',
        'User with this e-mail exists'
      );
    });
  });
});
