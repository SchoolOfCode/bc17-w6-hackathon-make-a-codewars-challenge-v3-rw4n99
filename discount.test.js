import {test, expect} from "vitest";
import {discount} from "./discounts";

test('Bare bones, should pass', () => {

})

//Test to check function works with whole numbers
test('20% discount for £100 should show £80', () => {
    const endPrice = discount(100)
    expect(endPrice).toBe(80)
});

//Test to check function aonly applies discounts on orders worth £20 or more
test('20% discount for 20 should show £16', () => {
    const endPrice = discount(20)
    expect(endPrice).toBe(16)
})

//Test to check function aonly applies discounts on orders worth £20 or more
test('No discount should be applied for £19', () => {
    const endPrice = discount(19)
    expect(endPrice).toBe(19)
})
