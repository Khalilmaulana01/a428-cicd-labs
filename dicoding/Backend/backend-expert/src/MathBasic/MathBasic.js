const MathBasic = {
    add: (...args) => {
        if(args.length !== 2) {
            throw new Error('function only accept 2 parameters')
        }

        const [a, b] = args

        if (typeof a !==  'number' || typeof b !== 'number') {
            throw new Error('function only accept number')
        }

        return a + b
    },
    subtract: (...args) => {
        if(args.length !== 2) {
            throw new Error('function only accept 2 parameter')
        }

        const [a,b] = args

        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('function only accept number')
        }

        return a - b
    },
    multiply: (...args) => {
        if(args.length !== 2) {
            throw new Error('function only accept 2 parameter')
        }

        const [a, b] = args

        if( typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('function only accept number as a parameter')
        }

        return a * b

    },
    divide: (...args) => {
        if(args.length !== 2) {
            throw new Error('function only accept 2 parameters')
        }

        const [a, b] = args
        if( typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('function only accept number as a parameter')
        }

        return a / b
    }
}

module.exports = MathBasic