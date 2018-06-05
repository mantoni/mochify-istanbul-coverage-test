# Illustrate Mochify Coverage Report

Usage:

```
npm test
```

This performs three different test runs, one for each file in `/test`:

- `yes.js`: Includes and uses `hello.js`
- `no.js`: Includes `hello.js`, but does not use it
- `omit.js`: Does not include `hello.js`

Each of the test files runs the `test()` function in the corresponding file.

This is the output:

```
> coverage-test@1.0.0 test /Users/max/projects/coverage-test
> npm run cover -- test/yes-test.js && npm run cover -- test/no-test.js && npm run cover -- test/omit-test.js


> coverage-test@1.0.0 cover /Users/max/projects/coverage-test
> mochify --plugin [ mochify-istanbul --report text ] "test/yes-test.js"

# chromium:


  yes
Hello world
    ✓ includes and uses = covers


  1 passing (8ms)

---------------------|----------|----------|----------|----------|----------------|
File                 |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------------|----------|----------|----------|----------|----------------|
 coverage-test/      |      100 |      100 |      100 |      100 |                |
  hello.js           |      100 |      100 |      100 |      100 |                |
  yes.js             |      100 |      100 |      100 |      100 |                |
 coverage-test/test/ |      100 |      100 |      100 |      100 |                |
  yes-test.js        |      100 |      100 |      100 |      100 |                |
---------------------|----------|----------|----------|----------|----------------|
All files            |      100 |      100 |      100 |      100 |                |
---------------------|----------|----------|----------|----------|----------------|


> coverage-test@1.0.0 cover /Users/max/projects/coverage-test
> mochify --plugin [ mochify-istanbul --report text ] "test/no-test.js"

# chromium:


  no
Hello world
    ✓ include, but doesn't use = doesn't cover


  1 passing (7ms)

---------------------|----------|----------|----------|----------|----------------|
File                 |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------------|----------|----------|----------|----------|----------------|
 coverage-test/      |       80 |      100 |       50 |       80 |                |
  hello.js           |       50 |      100 |        0 |       50 |              4 |
  no.js              |      100 |      100 |      100 |      100 |                |
 coverage-test/test/ |      100 |      100 |      100 |      100 |                |
  no-test.js         |      100 |      100 |      100 |      100 |                |
---------------------|----------|----------|----------|----------|----------------|
All files            |       90 |      100 |       50 |       90 |                |
---------------------|----------|----------|----------|----------|----------------|


> coverage-test@1.0.0 cover /Users/max/projects/coverage-test
> mochify --plugin [ mochify-istanbul --report text ] "test/omit-test.js"

# chromium:


  omit
Hello world
    ✓ doesn't include = covers


  1 passing (9ms)

---------------------|----------|----------|----------|----------|----------------|
File                 |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------------|----------|----------|----------|----------|----------------|
 coverage-test/      |      100 |      100 |      100 |      100 |                |
  omit.js            |      100 |      100 |      100 |      100 |                |
 coverage-test/test/ |      100 |      100 |      100 |      100 |                |
  omit-test.js       |      100 |      100 |      100 |      100 |                |
---------------------|----------|----------|----------|----------|----------------|
All files            |      100 |      100 |      100 |      100 |                |
---------------------|----------|----------|----------|----------|----------------|
```

So, `hello.js` only contributes to coverage if it is `require`d. Otherwise it
doesn't because it's not part of the Browserify bundle.
