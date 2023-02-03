const MathBasic = require("./MathBasic");

// TODO: add function test
describe("A MathBasic", () => {
	it("should contains add, subtract, multiply, and divide function", () => {
		expect(MathBasic).toHaveProperty("add");
		expect(MathBasic).toHaveProperty("subtract");
		expect(MathBasic).toHaveProperty("multiply");
		expect(MathBasic).toHaveProperty("divide");
		expect(MathBasic.add).toBeInstanceOf(Function);
		expect(MathBasic.subtract).toBeInstanceOf(Function);
		expect(MathBasic.multiply).toBeInstanceOf(Function);
		expect(MathBasic.divide).toBeInstanceOf(Function);
	});
});

describe("A add function", () => {
	it('should throw an error when not given 2 parameter', () => {
		expect(() => MathBasic.add()).toThrowError();
		expect(() => MathBasic.add(1)).toThrowError()
		expect(() => MathBasic.add(1,2,3)).toThrowError()
		expect(() => MathBasic.add(1,2,3,4)).toThrowError()
	});
})

describe('A add function', () => {
	it('should throw an error when giving no number', () => {
		expect(() => MathBasic.add('1', '2')).toThrowError()
		expect(() => MathBasic.add(true, {})).toThrowError()
		expect(() => MathBasic.add(null, false)).toThrowError()
	});
})

describe('A add function', () => {
	it('should return a + b when given two number',() => {
		expect(MathBasic.add(1, 2)).toEqual(3)
		expect(MathBasic.add(3, 6)).toEqual(9)
		expect(MathBasic.add(3, 7)).toEqual(10)
	});
})

// TODO: Subtract function test
describe('A subtract function', () => {
	it('should return error when not given 2 parameters', () => {
		expect(() => MathBasic.subtract()).toThrowError()
		expect(() => MathBasic.subtract(1,2,3)).toThrowError()
		expect(() => MathBasic.subtract(1,2,3,4)).toThrowError()
	});
})

describe('A subtract function', () => {
	it('should throw error when given non number',  () => {
		expect(() => MathBasic.subtract('1', '2')).toThrowError()
		expect(() => MathBasic.subtract(true, {})).toThrowError()
		expect(() => MathBasic.subtract(false, null)).toThrowError()
	});
})

describe('A subtract function', () => {
	it('should return a - b when given two number', () => {
		expect(MathBasic.subtract(1, 3)).toEqual(-2)
		expect(MathBasic.subtract(10, 5)).toEqual(5)
		expect(MathBasic.subtract(6, 3)).toEqual(3)
	});
})

//TODO: multiply function test
describe('A multiply function', () => {
	it('should accept only two parameters', () =>  {
		expect(() => MathBasic.multiply()).toThrowError()
		expect(() => MathBasic.multiply(1,2,3)).toThrowError()
		expect(() => MathBasic.multiply(1,2,3,4)).toThrowError()
	});
})

describe('A multiply function', () => {
	it('should accept only number as a parameters',  () => {
		expect(() => MathBasic.multiply('1','2')).toThrowError()
		expect(()=> MathBasic.multiply(true, {})).toThrowError()
		expect(() => MathBasic.multiply(false, null)).toThrowError()
	});
})

describe('A multiply function', () => {
	it('should return a * b when given two number',  () => {
		expect(MathBasic.multiply(1,3)).toEqual(3)
		expect(MathBasic.multiply(3,3)).toEqual(9)
		expect(MathBasic.multiply(4,4)).toEqual(16)
	});
})

//TODO: Divide function test
describe('A divide function', () => {
	it('should only accept 2 number as a parameters',  () => {
		expect(() => MathBasic.divide()).toThrowError()
		expect(() => MathBasic.divide(1,2,3)).toThrowError()
		expect(() => MathBasic.divide(1,2,3,4)).toThrowError()
	});
})

describe('A divide function',  () => {
	it('should only accept number as a parameters', () => {
		expect(() => MathBasic.divide('1', '2')).toThrowError()
		expect(() => MathBasic.divide(true, {})).toThrowError()
		expect(() => MathBasic.divide(false, null)).toThrowError()
	});
});

describe('A divide funtion',  () => {
	it('should return a/b if given two number as a parameter', () => {
		expect(MathBasic.divide(4,2)).toEqual(2)
		expect(MathBasic.divide(10, 2)).toEqual(5)
		expect(MathBasic.divide(20, 5)).toEqual(4)
	});
});