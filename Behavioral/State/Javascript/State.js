var Vehicle = function () {
    var currentState = new Idle(this);
    var isAccelerating = false;

    this.changeState = function (pState) {
        currentState = pState;
    }
    this.getNextState = function(){
        if(isAccelerating) return new Running(this);
        else return new Idle(this);
    }
    this.start = function(){
        // Testing. Simply alternates the state.
        for (var i = 0; i < 10; i++) {
            isAccelerating = !isAccelerating;
            currentState.doSomething();
            currentState.next();            
        }
    }    
}

var Idle = function (pVehicle) {
    this.vehicle = pVehicle;
    
    this.doSomething = function(){
        console.log("Idle");
    }
    this.next = function () {
        this.vehicle.changeState(this.vehicle.getNextState());
    }
}

var Running = function (pVehicle) {
    this.vehicle = pVehicle;
    
    this.doSomething = function(){
        console.log("Running");
    }
    this.next = function () {        
        this.vehicle.changeState(this.vehicle.getNextState());        
    }
}

function main(){
    var car = new Vehicle();
    car.start();
}


