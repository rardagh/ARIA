describe("Simple Calculator", function() {
    it("should add two numbers together", function() {
        expect(calculator.add(2,9)).toBe(11);
    })
    it("should should subtract one number from another", function() {
        expect(calculator.subtract(9,2)).toBe(7);
    })
    it("should multiply two numbers together", function() {
        expect(calculator.multiply(2,9)).toBe(18);
    })
    it("should divide two numbers", function() {
        expect(calculator.divide(8,2)).toBe(4);
    })
    it("should be able to handle divide by 0 error", function() {
        expect(calculator.divide(8,0)).toBe(Infinity);
    })
    it("should be able to deal with strings", function(){
        expect(function() {calculator.add("hello")}).toThrow(new Error("Not a number"))
    })
})