import { test, expect } from "vitest";
import { weatherPrediction } from "./weather";

//Main tests
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

test("barebones 2 test - function should exist"), () => {
  expect(typeof weatherPrediction).toBe("function");
};