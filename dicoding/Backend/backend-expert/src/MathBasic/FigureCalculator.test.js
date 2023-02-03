const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

describe('A figureCalculator', () => {
    it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, calculateTriangleArea ', () => {
        const figureCalculator = new FigureCalculator({})

        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter')
        expect(figureCalculator).toHaveProperty('calculateRectangleArea')
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter')
        expect(figureCalculator).toHaveProperty('calculateTriangleArea')
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function)
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function)
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
    });


describe('A calculateRectanglePerimeter',  () => {
    it('should return error when not giving 2 parameter',  () => {
        const figureCalculator = new FigureCalculator({})

        expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError()
        expect(() => figureCalculator.calculateRectanglePerimeter(1,2,3)).toThrowError()
        expect(() => figureCalculator.calculateRectanglePerimeter(1,2,3,4)).toThrowError()
    });

    it('should throw error when given non number parameter',  () => {
        const figureCalculator = new FigureCalculator({})

        expect(() => figureCalculator.calculateRectanglePerimeter(null,'2')).toThrowError()
        expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError()
        expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError()
    });

    it('should return correct value based on rectangle perimeter formula',  () => {
        // Arrange
        const length = 20;
        const width = 10;
        const spyAdd = jest.spyOn(MathBasic, 'add')
        const spyMultiply = jest.spyOn(MathBasic, 'multiply')
        const figureCalculator = new FigureCalculator(MathBasic)

        // Action
        const result = figureCalculator.calculateRectanglePerimeter(length, width)

        // Assert
        expect(result).toEqual(60)
        expect(spyAdd).toHaveBeenCalledWith(length, width)
        expect(spyMultiply).toHaveBeenCalledWith(2, 30)
      });
    });

    describe('A calculateRectangleArea', () => {
        it('should return error when not giving two parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectangleArea()).toThrowError()
            expect(() => figureCalculator.calculateRectangleArea(1,2,3)).toThrowError()
            expect(() => figureCalculator.calculateRectangleArea(1,2,3,4)).toThrowError()
        });

        it('should return error when not giving non number',  () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectangleArea(null, '2'))
            expect(() => figureCalculator.calculateRectangleArea([], {}))
            expect(() => figureCalculator.calculateRectangleArea(true, {}))
        });

        it('should return right value according to calculateRectangleArea formula',  () => {
            // Arrange
            const length = 20
            const width = 10
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)

            // Action
            const result = figureCalculator.calculateRectangleArea(length, width)

            // Assert
            expect(result).toEqual(200)
            expect(spyMultiply).toBeCalledWith(length, width)
        })
    })

    describe('A calculateTrianglePerimeter',  () => {
        it('should return error when not giving 3 parameters',  () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter(1,2)).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter(1,2,5,6)).toThrowError()
        });

        it('should return error when giving non numbers',  () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter(true, [], {})).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter('1', [], {})).toThrowError()
            expect(() => figureCalculator.calculateTrianglePerimeter(null, [], false)).toThrowError()
        });

        it('should return correct value based on trianglePerimeter Formula',  () => {
            // Arrange
            const sideA = 2
            const sideB = 2
            const base = 2
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const figureCalculator = new FigureCalculator(MathBasic)

            // Action
            const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base)

            // Assert
            expect(result).toEqual(6)
            expect(spyAdd).toBeCalledWith((sideA + sideB), base)
        });
    });

        // TODO: calculatedTriangleArea
        describe('A calculateTriangleArea', () => {
            it('should return error when not given 2 parameters',  () => {
                const figureCalculator = new FigureCalculator({})

                expect(() => figureCalculator.calculateTriangleArea()).toThrowError()
                expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError()
                expect(() => figureCalculator.calculateTriangleArea(1,2,3)).toThrowError()
            });

            it('should return error when giving not a number',  () => {
                const figureCalculator = new FigureCalculator()

                expect(() => figureCalculator.calculateTriangleArea(true, [])).toThrowError()
                expect(() => figureCalculator.calculateTriangleArea({}, null)).toThrowError()
                expect(() => figureCalculator.calculateTriangleArea('1', '2')).toThrowError()
               });

        it('should return correct value based on calculatedTriangleArea formula', () => {
            // Arrage
            const base = 10;
            const height = 15;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const spyDivide = jest.spyOn(MathBasic, 'divide')
            const figureCalculator = new FigureCalculator(MathBasic)

            // Action
            const result = figureCalculator.calculateTriangleArea(base, height)

            // Assert
            expect(result).toEqual(75)
            expect(spyMultiply).toBeCalledWith(base, height)
            expect(spyDivide).toBeCalledWith(150, 2)
        })
   });
});