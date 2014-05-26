describe("page", function () {


    beforeEach(function () {
        document.getElementById('end').disabled = true;
        document.getElementById('name').disabled = true;
    });

    afterEach(function(){
        document.getElementById('start').disabled = false;
        document.getElementById('end').disabled = true;
        document.getElementById('name').disabled = true;
        document.getElementById('demo').innerHTML = '';
        document.getElementById('times').innerHTML = '';
        document.getElementById('name').value = '';
    })

    it("should can make start button going", function () {
        var start_status = document.getElementById('start').disabled;
        var end_status = document.getElementById('end').disabled;
        var input_box = document.getElementById('name').disabled;

        expect(start_status).toEqual(false);
        expect(end_status).toEqual(true);
        expect(input_box).toEqual(true);

    });

    it("should can click guess button and input number after click start button", function () {
        document.getElementById('start').onclick();

        var start_status = document.getElementById('start').disabled;
        var end_status = document.getElementById('end').disabled;
        var input_box = document.getElementById('name').disabled;

        expect(start_status).toEqual(false);
        expect(end_status).toEqual(false);
        expect(input_box).toEqual(false);
    });

    it("should show reminding when first click guess button", function () {
        document.getElementById('name').value = 1234;
        localStorage.current_number = 1234;
        document.getElementById('end').onclick();
        var remind = document.getElementById("demo").innerHTML;

        expect(remind).toEqual("成功猜对数字");
    });

    it("should show reminding when click guess button three times", function () {
        document.getElementById('name').value = 1234;
        localStorage.current_number = 1356;
        document.getElementById('end').onclick();
        var remind = document.getElementById("demo").innerHTML;

        expect(remind).toEqual("1A1B");

        document.getElementById('end').onclick();
        var remind = document.getElementById("demo").innerHTML;

        expect(remind).toEqual("1A1B");

        localStorage.current_number = 1430;
        document.getElementById('end').onclick();
        var remind = document.getElementById("demo").innerHTML;

        expect(remind).toEqual("2A1B");

        document.getElementById('end').onclick();
        var remind = document.getElementById("demo").innerHTML;

        expect(remind).toEqual("2A1B");

    });

    it("should show reminding when fifth click guess button", function () {
        document.getElementById('name').value = 1234;
        localStorage.current_number = 2345;
        for(var i=0; i<5; i +=1){
            document.getElementById('end').onclick();
        }
        var remind = document.getElementById("demo").innerHTML;

        expect(remind).toEqual("0A3B");
    });

    it("should show reminding when sixth click guess button if guess successfully", function () {
        document.getElementById('name').value = 1234;
        localStorage.current_number = 1234;
        for(var i=0; i<6; i +=1){
            document.getElementById('end').onclick();
        }
        var remind = document.getElementById("demo").innerHTML;

        expect(remind).toEqual("成功猜对数字");
    });

    it("should show reminding when sixth click guess button if not guess successfully", function () {
        document.getElementById('name').value = 1234;
        localStorage.current_number = 1256;
        for(var i=0; i<6; i +=1){
            document.getElementById('end').onclick();
        }
        var remind = document.getElementById("demo").innerHTML;
        var times = document.getElementById("times").innerHTML;

        expect(remind).toEqual("2A0B");
        expect(times).toEqual("你已竞猜六次");
    });
    it("should can click guess button but only can click six times", function () {
        var times = 0;
        for(var i = 0; i < times; i +=1 ){
            document.getElementById('end').onclick();
        }
        var start_status = document.getElementById('start').disabled;
        var end_status = document.getElementById('end').disabled;
        var input_box = document.getElementById('name').disabled;

        expect(start_status).toEqual(false);
        expect(end_status).toEqual(true);
        expect(input_box).toEqual(true);
    });

});