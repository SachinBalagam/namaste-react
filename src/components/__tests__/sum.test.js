import { sum } from "../sum";

test("Sum function should calcutate sum of two numbers", () => {
  const result = sum(3, 9);

  //Assersion
  expect(result).toBe(12);
});
