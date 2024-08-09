# Plan:

## 1) Setup environment
- Clone repo and cd to it ✔
- npm install to download dependencies in package.json ✔
- npm install vitest ✔
- Update package.json to include test script: vitest ✔
- Include "dev": "vitest --watch" within the scripts to automatically re-run them during develpoment with npm run dev' ✔

## 2) Plan the Kata
- Theme: use famous weatherman, Michael Fish ✔
- Write table with info on weather predictions and the oppostite ✔

| Input   | Output  |
|---------|---------|
| Rainy   | Sunny   |
| Foggy   | Clear   |
| Snowy   | Dry     |
| Frosty  | Blazing |
| Stormy  | Calm    |

## 3) Write the description
- Rename 'main.js' as 'weather.js' ✔
- Add introduction as multiline comment ✔
- Make sure clear examples are in the comment to guide users on how the function should work ✔
- Include export function in 'weather.js' ✔

## 4) Write barebones unit tests
- In test file import vitest ✔
- In test file import function from ./weather.js ✔
- Write a basic, bare bones test to fail TDD ✔
- Run the barebones test and receive error when npm test is run ✔
- Write another test to confirm setup ✔
- Run the second test to pass as function exists in weather ✔
- Ensure all basic tests work before moving forward ✔

## 5) Writing the full unit tests
- Create the tests for specific weather conditions 'Rainy' ✔
- Write second test for Foggy conditions 'Clear' ✔
- Write third test for Snowy conditions 'Clear' ✔
- Write fourth test for frosty conditions 'Blazing' ✔
- Write fifth test for Stormy conditions 'Calm' ✔

## 6) Adding function solution
- Write function to return opposite values ✔