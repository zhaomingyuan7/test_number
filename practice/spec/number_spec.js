describe("number", function () {


    beforeEach(function () {
    });
    afterEach(function(){
    })

    it("should the number  is four length ", function () {

        var current_number = localStorage.current_number
        expect(current_number.length).toEqual(4)
    });

});