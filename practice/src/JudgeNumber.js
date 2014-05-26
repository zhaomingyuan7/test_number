function JudgeNumber(){

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
function guess_button(){
    var number = document.getElementById("name").value
    var random_number = localStorage.current_number
    z++;
    var b = JudgeNumber.compare_number_with_input(number,random_number)
    if(z == 6 ){
        z = 0;
        document.getElementById('end').disabled = true
        document.getElementById('name').disabled = true
        if(b != "4A0B"){
            document.getElementById("times").innerHTML = "你已竞猜六次";
        }
    }
    if(number == ''){
        document.getElementById("demo").innerHTML = "0A0B";
    }
    if(b == "4A0B"){
        document.getElementById("demo").innerHTML = "成功猜对数字";
    }
    else{
        document.getElementById("demo").innerHTML = b;
    }
}
function start_button(){
    creat_a_number();
    document.getElementById('end').disabled = false;
    document.getElementById('name').disabled = false
    document.getElementById("demo").innerHTML = "";
    document.getElementById("times").innerHTML = "";
}