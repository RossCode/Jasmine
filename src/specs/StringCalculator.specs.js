describe('String calculator specs', function() {
    beforeEach(function() {
        stringCalculator = new StringCalculator();
    })

    describe('when adding an empty string', function() {
        it('It should return 0', function() {
            expect(stringCalculator.add(null)).toEqual(0);
        });
    });

    describe('when adding a single number', function() {
        it('it should return that number', function() {
            expect(stringCalculator.add('1')).toEqual(1);
        });
    });

    describe('when adding two numbers', function() {
        it('it should return the sum of those numbers', function() {
            expect(stringCalculator.add('1,2')).toEqual(3);
        });
    });

    describe('when adding multiple numbers', function() {
        it('it should return the sum of all of the numbers', function() {
            expect(stringCalculator.add('1,2,3,4,5')).toEqual(15);
        });
    });

    describe('when using a newline delimiter', function() {
        it('it should return the sum of all of the numbers', function() {
            expect(stringCalculator.add('1\n2,3')).toEqual(6);
        });
    });

    describe('when using a custom delimiter', function() {
        it('it should use the custom delimiter and return the sum', function() {
            expect(stringCalculator.add('//;\n1;2;3')).toEqual(6);
        });
    });

    describe('when sending in negatives', function() {
        it('it should throw an exception', function() {
            expect(function() { stringCalculator.add('-1')}).toThrow();
        });

        it('it should return negatives not allowed in the message', function() {
            try {
                stringCalculator.add('-1');
            }
            catch (ex) {
                expect(ex).toContain('negatives not allowed');
            }
        });

        it('it should contain the number passed in', function() {
            try {
                stringCalculator.add('-1');
            }
            catch (ex) {
                expect(ex).toContain('-1');
            }
        });
    });

    describe('when sending in two negatives', function() {
        it('it should return both negatives', function() {
            try {
                stringCalculator.add('-1,-2');
            }
            catch (ex) {
                expect(ex).toContain('-1');
                expect(ex).toContain('-2');
            }
        });
    });
});
