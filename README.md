# cypress-good-practices
This project contains a few examples which make use of known good practices for testing automation. 
Additionaly, the content found here it's entirely based on course: https://www.udemy.com/course/boas-praticas-em-automacao-de-testes-com-cypress/

Course certificate: WIP...


```diff
+ Prerequisites / Tech stack:
- cypress ^9.5.1
- Node.js 12 or 14 and above
- faker ^6.6.6
- The following web sites are used/accessed by the tests:
    - https://notes-serverless-app.com
    - https://hackernews-seven.vercel.app
```


How do I run tests?
Currently there are 2 commands that can be used for running tests:
1) This command is used to open cypress locally: **npm run cy:open**
2) This command is used to run cypress in headless mode: **npm test**


---

Known bad practices and how to avoid them:

1) Browser testing

Are you testing the application behavior or the browser behavior?

[Bad practice] Browser testing is widley known as a test in which evaluates the browser's behavior instead of application's behavior. 
For example, HTML anchor tags (<a>link</a>) have default behaviors regardless the browser they are loaded on. For instance, if an anchor tag is configured 
with the attribute target="_blank", then we don't need to test if browser is going to open a new tab, because the default behavior 
of anchor tags with target="_blank" is to open a new tab. Therefore, those kind of functionalities are tested ONLY by developers who develop browsers.

[Good practice] By using Cypress, one possible way to avoid browser testing is by just checking if the property href of the anchor tag contains the expected address.

Examples can be found on:
1) https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/browser-testing/sample1.spec.js
2) https://github.com/Fernando-Szezecinski/cypress-good-practices/blob/main/cypress/integration/browser-testing/sample2.spec.js


---

```diff
+ Additionally, this project also contains:
```
* An example on how to make use of Cypress intercept method for mocking backend results
This example can be found on: ...

