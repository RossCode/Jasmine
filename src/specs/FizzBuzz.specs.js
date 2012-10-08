/// <reference path="../FizzBuzz.js" />

describe('FizzBuzz specs', function() {
    var fizzBuzz;

    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    })

    describe('when passing in a simple number', function() {
        it('It should return that number', function() {
            var result = fizzBuzz.getOutput(1);
            expect(result).toEqual('1');
        });
    });

    describe('when passing in three', function() {
        it ('it should return fizz', function () {
            var result = fizzBuzz.getOutput(3);
            expect(result).toEqual('fizz');
        });
    });

    describe('when passing in a multiple of three', function (){
        it ('it should return fizz', function() {
            var result = fizzBuzz.getOutput(9);
            expect(result).toEqual('fizz');
        });
    });

    describe('when passing in five', function() {
        it ('it should return buzz', function () {
            var result = fizzBuzz.getOutput(5);
            expect(result).toEqual('buzz');
        });
    });

    describe('when passing in a multiple of five', function (){
        it ('it should return buzz', function() {
            var result = fizzBuzz.getOutput(10);
            expect(result).toEqual('buzz');
        });
    });

    describe('when passing in a multiple of three and five', function() {
        it ('it should return fizzbuzz', function() {
            var result = fizzBuzz.getOutput(15);
            expect(result).toEqual('fizzbuzz');
        });
    });
});
