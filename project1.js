const a=document.getElementById("t1");
const b=document.getElementById('t2');
const c=document.getElementById('t3');
function change(){
    var heightChange=a.value;
    var widthChange=b.value;
    var colorChange=c.value;
    document.getElementById("block").style.height=heightChange+"px";
    document.getElementById("block").style.width=widthChange+"px";
    document.getElementById("block").style.backgroundColor=colorChange;
}
