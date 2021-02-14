function getParagraph1(){
    var inputs = [];
    for(var i = 1 ; i<=6 ; i++)
{
    inputs.push(document.getElementById("text_input_box_1" + i).value);
}
    inputs.join(".");
    document.getElementById("showParagraph1").innerHTML = inputs.join(".")
}
function getParagraph2(){
    var inputs = [];
    for(var i = 1 ; i<=6 ; i++)
{
    inputs.push(document.getElementById("text_input_box_7" + i).value);
}
    inputs.join(".");
    document.getElementById("showParagraph2").innerHTML = inputs.join(".")
}