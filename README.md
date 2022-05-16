# cypress-good-practices
This project contains a few examples which make use of known good practices for testing automation. 
Additionaly, the content found here it's entirely based on this [udemy course.](https://www.udemy.com/course/boas-praticas-em-automacao-de-testes-com-cypress)

### Course certificate: [certificate course.](./certificate.pdf)

___


```diff
+ Prerequisites / Tech stack:

 - cypress ^9.5.1
 - Node.js 12 or 14 and above
 - faker ^6.6.6
 - Websites:
    - https://notes-serverless-app.com
    - https://hackernews-seven.vercel.app
    - https://bit.ly/2XSuwCW
```

___

```diff
+ How do I run tests?

Currently there are 2 commands that can be used for running tests:

1) This command is used to open cypress locally: npm run cy:open
2) This command is used to run cypress in headless mode: npm test
```

___

```diff
+ Known bad practices and how to avoid them:

-1. Browser testing

Are you testing the application behavior or the browser behavior?

[Bad practice] Browser testing is widley known as a test in which evaluates the browser's behavior instead of application's behavior. 
For example, HTML anchor tags <a>link</a> have default behaviors regardless the browser they are loaded on. For instance, if an anchor tag is configured 
with the attribute target="_blank", then we don't need to test if browser is going to open a new tab, because the default behavior 
of anchor tags with target="_blank" is to open a new tab. Therefore, those kind of functionalities are tested ONLY by developers who develop browsers.

[Good practice] By using Cypress, one possible way to avoid browser testing is by just checking if the property href of the anchor tag contains the expected address.

Examples can be found on:
1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/browser-testing/sample1.spec.js
2) Sample2: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/browser-testing/sample2.spec.js


-2. Code duplication

Do you remember of all the places where you've added the same code?

[Bad practice] As the name suggests this bad practices implies of replicating the exact same code in multiple places. Spreading the same code in multiple places
is a bad huge disavantage for the developers who maintain a code solution. Despite being an error-prone approach, it doesn't allow programmers to refactor their code in an 
elegant fashion and will for sure require more time than you have to refactor your tests as nobody is able to remember all the places where a specific code lives.

[Good practice] This project contains 4 examples on how to avoid code duplication. They respectively suggest you to make use 
of Cypress beforeEach, Commands, Lodash and "Get all" approaches to avoid code duplication.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/duplication/sample1.spec.js
2) Sample2: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/duplication/sample2.spec.js
3) Sample3: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/duplication/sample3.spec.js
4) Sample4: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/duplication/sample4.spec.js


-3. Flaky test

Does your test work randomly?

[Bad practice] Flaky tests can be caused due to different aspects such as an unstable application or even a bad automation design. 
As flaky tests tend to behave differently in each execution, we tend to not pay attention to their result as most of the time the result is just a false negative result.
On the other hand, by assuming this approach we are most likely to not detect real defects.

[Good practice] Tests must provide deterministic outcomes, not random results. An alternative to deal with this behavior is to make Cypress to wait for a HTTP request result instead of an 'intermediate state', for example an element to be displayed.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/flaky-test/sample1.spec.js


-4. Hardcoded assertions

Does your test work randomly?

[Bad practice] Flaky tests can be caused due to different aspects such as an unstable application or even a bad automation design. 
As flaky tests tend to behave differently in each execution, we tend to not pay attention to their result as most of the time the result is just a false negative result.
On the other hand, by assuming this approach we are most likely to not detect real defects.

[Good practice] Tests must provide deterministic outcomes, not random results. An alternative to deal with this behavior is to make Cypress to wait for a HTTP request result instead of an 'intermediate state', for example an element to be displayed.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/hardcoded-assertion/sample1.spec.js
2) Sample2: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/hardcoded-assertion/sample2.spec.js


-5. Unnecessary complexity

Do I need to reinvent the wheel for each page element?

[Bad practice] Unnecessary code complexity can come due to uncountable reasons. 
However, the most common reasons for it a short job experience as an automation engineer, applications with complex logic to learn 
and finally, when we don't know it very well the library we chose to use it.

[Good practice] The examples contained in this project show us how to use Cypress native functions to 
deal with browser operations instead of programmatically creating a logic to handle them.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/unnecessary-complexity/sample1.spec.js


-6. Page Objects

[Bad practice] Page Objects

Source: https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions

"
- Page objects are hard to maintain and take away time from actual application development. I have never seen PageObjects documented well enough to actually help one write tests.
- Page objects introduce additional state into the tests, which is separate from the application’s internal state. This makes understanding the tests and failures harder.
- Page objects try to fit multiple cases into a uniform interface, falling back to conditional logic - a huge anti-pattern in our opinion.
- Page objects make tests slow because they force the tests to always go through the application user interface.
"

[Good practice] In the article writen by cypress team they provide many examples and explanations on how to avoid Page Objects and how to do it.
This project contains only one example that uses Cypress commands instead of Page objects.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/page-object/sample1.spec.js


-7. Sensitive data

[Bad practice] This bad practice can lead to sensitive data exposure which can be financially costly to your business and damage your company's
reputation.

[Good practice] This project contains an example of how to use Cypress environment variables to deal with such bad practices.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/sensitive-data/sample1.spec.js


-8. Slow tests

[Bad practice] E2E tests are known to be slow when compared with other types of tests such as API tests or even unit tests.

[Good practice] This project contains an example of how Cypress mocks E2E test dependencies by making use of Cypress fixtures.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/slow-test/sample1.spec.js
2) Sample2: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/slow-test/sample2.spec.js


-9. Unnecessary waits

[Bad practice] It's a common and wrong practice to use hardcoded 'wait' values in test scripts. They can cause tests to be flaky and
end up in a test that runs much more slower than it should.

[Good practice] Cypress by default already waits 4 seconds for elements to be present. However, another alternative to 
avoid using hardcoded wait values is to overwrite Cypress default timeout by informing a new value to it.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/unnecessary-waiting/sample1.spec.js


-10. Wrong abstractions

[Bad practice] Wrong abstractions can cause tests to not have clear results, as well as impact their readbility and maintainability. 

[Good practice] This project contains two examples of how to deal if wrong abstractions and improve code readbility, 
even by duplicating a few lines of code.

Examples can be found on:

1) Sample1: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/wrong-abstractions/sample1.spec.js
2) Sample2: https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/wrong-abstractions/sample2.spec.js


```