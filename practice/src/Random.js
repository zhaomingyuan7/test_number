function creat_a_number(){
    var one = Math.floor(Math.random()*9+1);
    var two = Math.floor(Math.random()*9+0);
    var three = Math.floor(Math.random()*9+0);
    var four = Math.floor(Math.random()*9+0);
    if(!(one!=two&&one!=three&&one!=four&&two!=three&&two!=four&&three!=four)){
        return creat_a_number ();
    }
    var number = one*1000+two*100+three*10+four*1;
    localStorage.current_number = number;
    return number;
}
