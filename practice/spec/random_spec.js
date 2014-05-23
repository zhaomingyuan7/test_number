describe("Random", function () {


    beforeEach(function () {

    });


    it("should this number is randomly generated", function () {
//        Random.create_number();

        var numbers_probability = Random.search_the_number()
        expect(numbers_probability>=0.001 && numbers_probability<0.005).toEqual(true)

    });


});