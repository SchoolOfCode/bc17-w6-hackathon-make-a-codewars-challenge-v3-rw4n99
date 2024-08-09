# Weather Forecast Reverser

Michael Fish, the infamous weather forecaster, needs your help! He’s been consistently getting his weather predictions wrong, and it’s your job to correct them by reversing the forecasts. For each weather condition, you’ll need to provide the exact opposite prediction.

## Objective

Given a weather condition as input, your task is to output the opposite condition. If no input is provided, return "Unknown."

## Input and Output Mapping

Below is the mapping of weather conditions that you will use to reverse the forecasts:

| Input   | Output  |
|---------|---------|
| Rainy   | Sunny   |
| Foggy   | Clear   |
| Snowy   | Dry     |
| Frosty  | Blazing |
| Stormy  | Calm    |

## Requirements

- **Input:** A single word representing the weather condition (e.g., "Rainy").
- **Output:** A single word representing the opposite weather condition (e.g., "Sunny").
- **Unknown Input:** If the input is empty or not recognized, return "Unknown."

## Examples

Here are some example transformations based on the mappings:

- **Input:** `Rainy` → **Output:** `Sunny`
- **Input:** `Foggy` → **Output:** `Clear`
- **Input:** `Snowy` → **Output:** `Dry`
- **Input:** `Frosty` → **Output:** `Blazing`
- **Input:** `Stormy` → **Output:** `Calm`
- **Input:** *(empty or unrecognized)* → **Output:** `Unknown`

## Usage

This program can be used in weather applications, games, or simulations where reversing weather conditions is needed for fun or testing purposes. It's a simple yet engaging exercise in conditional logic and text manipulation.

## Edge Cases

- Ensure that the function correctly handles inputs that are not part of the defined mappings, such as unexpected words or an empty string.
- Consider expanding the list of weather conditions for more comprehensive coverage if needed.

## Conclusion

Help Michael Fish get it right by flipping his forecasts! This is a straightforward and fun way to practice basic programming concepts like conditionals, input handling, and output formatting.
