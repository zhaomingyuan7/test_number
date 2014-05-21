function Test($scope){
    localStorage.current_input_name =$scope.input_name
}
Test.is_test_number = function(){
    localStorage.removeItem("current_number")
    console.log('hhh')
    var one = Math.floor(Math.random()*9+1);
    var two = Math.floor(Math.random()*9+0);
    var three = Math.floor(Math.random()*9+0);
    var four = Math.floor(Math.random()*9+0);
    if(!(one!=two&&one!=three&&one!=four&&two!=three&&two!=four&&three!=four)){
        return Test.is_test_number ();
    }
    var number = one*1000+two*100+three*10+four*1;
    console.log(number,'===')
    return number
}
Test.save_current_number = function(){
    localStorage.removeItem ('current_number');
    localStorage.current_number = Test.is_test_number();
}