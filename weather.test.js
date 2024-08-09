import { test, expect } from "vitest";
import { weatherPrediction } from "./weather";

//Main unit tests
test('Rainy should be Sunny', () => {
  const response = weatherPrediction("Rainy");
  expect(response).toMatch(/Sunny|sunny/);
});

test('Foggy should be Clear', () => {
  const response = weatherPrediction("Foggy");
  expect(response).toMatch(/Clear|clear/);
});

test('Snowy should be dry', () => {
  const response = weatherPrediction("Snowy");
  expect(response).toMatch(/Dry|dry/)
});

test('Frost should be Blazing', () => {
  const response = weatherPrediction("Frosty");
  expect(response).toMatch(/Blazing|blazing/)
});

test('Stormy should be Calm', () => {
  const response = weatherPrediction("Stormy");
  expect(response).toMatch(/Calm|calm/)
});

//Boundary testing
test('"r" should be Unknown', () => {
  const response = weatherPrediction("r");
  expect(response).toMatch(/Unknown|unknown/)
});

test("barebones 2 test - function should exist"), () => {
  expect(typeof weatherPrediction).toBe("function");
};

//Handling of numbers and special characters
test('Numeric input ("123") should be Unknown', () => {
  const response = weatherPrediction("123");
  expect(response).toMatch(/Unknown|unknown/);
});

test('Special character input ("!@#$") should be Unknown', () => {
  const response = weatherPrediction("!@#$");
  expect(response).toMatch(/Unknown|unknown/);
});

//input validation testing
test('"StRomy" should be Unknown', () => {
  const response = weatherPrediction("StRomy");
  expect(response).toMatch(/Unknown|unknown/)
});

test('"" should be Unknown', () => {
  const response = weatherPrediction("");
  expect(response).toMatch(/Unknown|unknown/)
});

test('"Windy" should be Unknown', () => {
  const response = weatherPrediction("Windy");
  expect(response).toMatch(/Unknown|unknown/);
});

