function JudgeNumber(){

}
JudgeNumber.create_number = function(){
    return Number.prototype.create()
}
JudgeNumber.is_number = function(){
    return isNaN(JudgeNumber.create_number()) == 0
}
JudgeNumber.is_not_number = function(name){
    return isNaN(name) == 0
}