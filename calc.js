var zero =document.getElementById("0");
var one =document.getElementById("1");
var two =document.getElementById("2");
var three =document.getElementById("3");
var four =document.getElementById("4");
var five =document.getElementById("5");
var six =document.getElementById("6");
var seven =document.getElementById("7");
var eight =document.getElementById("8");
var nine =document.getElementById("9");
var plus =document.getElementById("+");
var minus =document.getElementById("-");
var mult =document.getElementById("X");
var divide =document.getElementById("divd");
var eq =document.getElementById("=");
var cl =document.getElementById("C");
var ef =document.getElementById("eff");
var parr1 =document.getElementById("par1");
var parr2 =document.getElementById("par2");
var coma =document.getElementById(".");

function operation(op){
    var inpt=document.getElementById("input").textContent;
    var out=document.getElementById("output").textContent;
    if(inpt==="Input"){
        var valeur=op.textContent;
        inpt=valeur;
    }else{
        if (op.textContent === "Del") {
            inpt = inpt.slice(0, -1);
        } else if (op.textContent === "Clr") {
            location.reload();
        }else if (op.textContent === "=") {
            try {
                var result = math.evaluate(inpt);
                out = result;
                document.getElementById("output").textContent = out;
            } catch (error) {
                out="Syntax Error";
            };
        } else {
            inpt += op.textContent;
        }

    }
   document.getElementById("input").textContent = inpt;

};


zero.addEventListener("click", function() {
    operation(zero);
});

one.addEventListener("click", function() {
    operation(one);
});

two.addEventListener("click", function() {
    operation(two);
});

three.addEventListener("click", function() {
    operation(three);
});

four.addEventListener("click", function() {
    operation(four);
});

five.addEventListener("click", function() {
    operation(five);
});

six.addEventListener("click", function() {
    operation(six);
});

seven.addEventListener("click", function() {
    operation(seven);
});

eight.addEventListener("click", function() {
    operation(eight);
});

nine.addEventListener("click", function() {
    operation(nine);
});

coma.addEventListener("click", function() {
    operation(coma);
});

plus.addEventListener("click", function() {
    operation(plus);
});

minus.addEventListener("click", function() {
    operation(minus);
});

mult.addEventListener("click", function() {
    operation(mult);
});

divide.addEventListener("click", function() {
    operation(divide);
});

eq.addEventListener("click", function() {
    operation(eq);
});

cl.addEventListener("click", function() {
    operation(cl);
});

ef.addEventListener("click", function() {
    operation(ef);
});

parr1.addEventListener("click", function() {
    operation(parr1);
});

parr2.addEventListener("click", function() {
    operation(parr2);
});




