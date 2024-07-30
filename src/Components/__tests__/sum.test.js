import { sum } from "../sum";

it("Sum function will sum up a and b",()=>{
    const result = sum(2,5);
    expect(result).toBe(7);
})