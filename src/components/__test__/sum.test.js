import { sum } from "../sum";

test("Sum function should calculate teh sum of two numbers", () => {
    const result = sum(2, 3);
    expect(result).toBe(5); // Assertion
})
