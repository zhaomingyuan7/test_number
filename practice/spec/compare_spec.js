describe("compare", function () {


    beforeEach(function () {

    });

    it("should be comparing 1234 with 5678 to 0A0B", function () {
        var input_number = JudgeNumber.compare_number_with_input(1234,5678)

        expect(input_number).toEqual("0A0B");
    });

    it("should be comparing 1234 with 1234 to 4A0B", function () {
        var input_number = JudgeNumber.compare_number_with_input(1234,1234)

        expect(input_number).toEqual("4A0B");
    });

    it("should be comparing 1234 with 4321 to 0A4B", function () {
        var input_number = JudgeNumber.compare_number_with_input(1234,4321)

        expect(input_number).toEqual("0A4B");
    });

    it("should be comparing 1234 with 1243 to 2A2B", function () {
        var input_number = JudgeNumber.compare_number_with_input(1234,1243)

        expect(input_number).toEqual("2A2B");
    });

    it("should be comparing 1234 with 5123 to 0A3B", function () {
        var input_number = JudgeNumber.compare_number_with_input(1234,5123)

        expect(input_number).toEqual("0A3B");
    });

    it("should be comparing 1234 with 1235 to 3A0B", function () {
        var input_number = JudgeNumber.compare_number_with_input(1234,1235)

        expect(input_number).toEqual("3A0B");
    });



});