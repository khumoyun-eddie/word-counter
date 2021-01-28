function count() {
    var text=document.getElementById('text').value;
    var suz=text.split(" ");
    var n=0;
    for(var i of suz){
        if(i !== ""){
            n++;
        }
    }
    document.getElementById('result').innerText=n+"ta suz bor";
}