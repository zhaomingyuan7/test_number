function Random(){

}
Random.create_number = function(){
    var numbers = [];
    for(var i = 0; i < 1000; i++){
        var number = Random.is_test_number()
        numbers.push(number);
        localStorage.numbers = JSON.stringify(numbers);
    }
    return numbers;
}
Random.search_the_number = function(){
    Random.create_number();
    var numbers = JSON.parse(localStorage.numbers)
    var random_number =  _.filter(numbers,function(number){
        return numbers[0] == number
    })
    return random_number.length/numbers.length
}
Random.is_test_number = function(){
    var one = Math.floor(Math.random()*9+1);
    var two = Math.floor(Math.random()*9+0);
    var three = Math.floor(Math.random()*9+0);
    var four = Math.floor(Math.random()*9+0);
    if(!(one!=two&&one!=three&&one!=four&&two!=three&&two!=four&&three!=four)){
        return Random.is_test_number ();
    }
    var number = one*1000+two*100+three*10+four*1;
    var number = number.toString()
//    localStorage.current_number = number
    return number
}
