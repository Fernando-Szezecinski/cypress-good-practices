# cypress-good-practices
This project contains a few examples which make use of known good practices for testing automation. 
Additionaly, the content found here it's entirely based on this [udemy course.](https://www.udemy.com/course/boas-praticas-em-automacao-de-testes-com-cypress)

### Course certificate: WIP...

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


```

___

```diff
+ Additionally, this project also contains:

1. An example on how to make use of Cypress intercept method for mocking backend results. This example can be found on:
 https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/browser-testing/sample2.spec.js
 
 
```