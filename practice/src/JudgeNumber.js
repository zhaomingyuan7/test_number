function JudgeNumber(){

}
JudgeNumber.create_number = function(){
    return Random.is_test_number();
}
JudgeNumber.is_number = function(){
    return isNaN(JudgeNumber.create_number()) == 0
}
JudgeNumber.is_not_number = function(name){
    return isNaN(name) == 0
}
JudgeNumber.compare_number_with_input = function(number1,number2){
    var the_first = JudgeNumber.get_every_number(number1);
    var the_second = JudgeNumber.get_every_number(number2);
    var x = 0,y = 0;
    for(var i = 0;i < 4;i ++){
       for(var j = 0;j < 4;j ++){
           if(the_first[i] == the_second[j] && i==j){
                x ++;
           }
           if(the_first[i] == the_second[j] && i!=j){
                y ++;
           }
       }
    }
    return x+'A'+y+'B';
}
JudgeNumber.get_every_number = function(number){
    var one = parseInt(number / 1000);
    var two = parseInt((number - one * 1000) / 100);
    var three = parseInt((number - one * 1000 - two * 100) / 10);
    var four = number % 10;
    var every_number = [];
    every_number.push(one,two,three,four)
    return every_number;
}
var z = 0;
function print_number(){
    var number = document.getElementById("name").value
    z++;
    if(z == 6){
        document.getElementById('end').disabled = true
        document.getElementById("times").innerHTML = "你已竞猜六次";
    }
    var b = JudgeNumber.compare_number_with_input(number,localStorage.current_number)
    if(b == "4A0B"){
        document.getElementById("demo").innerHTML = "成功猜对数字" + b;
    }
    else{
        document.getElementById("demo").innerHTML = b;
    }
}
function start_button(){
    Random.test_number;
    document.getElementById('end').disabled = false;
    document.getElementById('start').disabled = true;
    document.getElementById('name').disabled = false
    console.log(localStorage.current_number,'3333333333')

}