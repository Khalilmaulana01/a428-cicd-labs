class FigureCalculator {
    constructor(mathBasic) {
        this._mathBasic = mathBasic
    }

    calculateRectanglePerimeter(...args) {
        if(args.length !== 2) {
            throw new Error('function only accept 2 parameters')
        }

        const [length, width] = args
        if(typeof length !== 'number' || typeof width !== 'number') {
            throw new Error('function should be a number')
        }

        return this._mathBasic.multiply(2, this._mathBasic.add(length, width))
    }

    calculateRectangleArea(...args) {
        if(args.length !== 2) {
            throw new Error('function only accept 2 paramters')
        }

        const [length, width] = args
        if(typeof length !== 'number' || typeof width !== 'number') {
            throw new Error('function should be number')
        }

        return this._mathBasic.multiply(length, width)
    }
    calculateTrianglePerimeter(...args) {
        if(args.length !== 3) {
            throw new Error('function only accept 3 parameters')
        }

        const [sideA, sideB, base ] = args
        if(typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
            throw new Error('parameter should be number')
        }

        return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base)

    }
    //TODO: CalculateTriangleArea
    calculateTriangleArea(...args) {
        if(args.length !== 2) {
            throw new Error("function only accept 2 parameters")
        }

        const [base, height] = args
        if(typeof base !== 'number' || typeof height !== 'number') {
            throw new Error('function should be number')
        }

        return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2)

    }
}


module.exports = FigureCalculator;