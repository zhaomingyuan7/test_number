describe("number", function () {


    beforeEach(function () {
        init_number_database()
    });
    afterEach(function(){
        localStorage.clear();
    })

    it("should the number  is four length ", function () {

        var numbers = JSON.parse(localStorage.numbers)

        var number = new Number();
        number.create();

        var current_number = localStorage.current_number
        expect(current_number.length).toEqual(4)
    });

});