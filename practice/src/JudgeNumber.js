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