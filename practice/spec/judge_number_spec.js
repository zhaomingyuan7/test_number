describe("JudgeNumber", function () {


    beforeEach(function () {

    });

    it("should the number is a number", function () {
        var number = JudgeNumber.create_number();

        var is_number = JudgeNumber.is_number()

        expect(is_number).toEqual(true);

    });

    it("should the number is not a number", function () {
        var name = 'abcd'
        var number = JudgeNumber.is_not_number(name)

        expect(number).toEqual(false)
    });



});