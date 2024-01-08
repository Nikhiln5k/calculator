function clik(num){
    result.value+=num
}

function clean(){
    result.value=""
}

function cal(){
    result.value=eval(result.value)
}

function del(){
    result.slice(0,-1)
}