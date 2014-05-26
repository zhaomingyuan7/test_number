describe("number", function () {


    beforeEach(function () {

    });

    afterEach(function(){

    })

    it("should be four length ", function () {

        var number = creat_a_number().toString()

        expect(number.length).toEqual(4);

    });

    it("should be a number", function () {

        var number = creat_a_number();

        expect(isNaN(number) == 0).toEqual(true);

    });

    it("should be randomly producing", function () {

        var numbers = [];
        for(var i = 0; i < 1000; i++){
            var number = creat_a_number();
            numbers.push(number);
            localStorage.numbers = JSON.stringify(numbers);
        }

        var same_number =  _.filter(numbers,function(number){
            return numbers[0] == number;
        })

        var Probability =  same_number.length/numbers.length;

        expect(Probability>=0.001 && Probability<0.005).toEqual(true);

    });

});