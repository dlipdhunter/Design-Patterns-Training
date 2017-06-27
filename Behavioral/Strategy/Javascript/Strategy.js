var Calculator = function(){
    this.operation = null;
};

Calculator.prototype = {
    setOperation : function (pOperation){
        this.operation = pOperation;
    },
    calculate : function (pVal1, pVal2){
        return this.operation.calculate(pVal1, pVal2);
    }
};

var Add = function(){
    this.calculate = function(pVal1, pVal2){
        return pVal1 + pVal2;
    }
}

var Sub = function(){
    this.calculate = function(pVal1, pVal2){
        return pVal1 - pVal2;
    }
}

var Mul = function(){
    this.calculate = function(pVal1, pVal2){
        return pVal1 * pVal2;
    }
}

var Div = function(){
    this.calculate = function(pVal1, pVal2){
        return pVal1 / pVal2;
    }
}

var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function main(){
    var val1 = 10, val2 = 5;

    // Strategies
    var operationAdd = new Add();
    var operationSub = new Sub();
    var operationMul = new Mul();
    var operationDiv = new Div();

    var calculatorClient = new Calculator();

    calculatorClient.setOperation(operationAdd);
    log.add("Add operation : " + calculatorClient.calculate(val1, val2));

    calculatorClient.setOperation(operationSub);
    log.add("Sub operation : " + calculatorClient.calculate(val1, val2));
    
    calculatorClient.setOperation(operationMul);
    log.add("Mul operation : " + calculatorClient.calculate(val1, val2));
    
    calculatorClient.setOperation(operationDiv);
    log.add("Div operation : " + calculatorClient.calculate(val1, val2));
    
    log.show();
}