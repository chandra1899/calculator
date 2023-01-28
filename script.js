var buttons=document.getElementsByClassName('button');
var display=document.getElementById('dispalycontet');

var operand1=0;
var operand2=null;
var operator=null;

function isOperator(value){
    return value=="+" || value=="-" || value=="*" || value=="/" ;
}


for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        var text= display.textContent;

        if((isOperator(value)|| value=="%" || value=="sign") && text==""){
            alert('Enter a value');
        }

        else if(value=="ac"){
            display.textContent="";
             operand1=0;
             operand2=null;
             operator=null;
        }
        else if(value=="." && text==""){
            display.textContent="0.";
        }
        else if(text!="" && isOperator(value)){
            operand1=parseFloat(text);
            operator=value;
            display.textContent="";
        }
        else if(value=="%"){
            operand1=parseFloat(text);
            operand1=operand1/100;
            display.textContent=operand1;
        }
        else if(value=="sign"){
            operand1=parseFloat(text);
            operand1=-1*operand1;
            display.textContent=operand1;
        }
        else if(value=="="){
            operand2=parseFloat(text);
            var result=eval(operand1+operator+operand2);
            display.textContent=result;
        }
        else{
            display.textContent+=value;
        }
    });
}