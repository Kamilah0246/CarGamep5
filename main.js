//Variables
let car = {
    make: 'Tesla',
    model: 'S',
    color: 'silver',
    mileage: 0,
    isWorking: true,

    driveTouch(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 10;
        alert(`New Mileage: ${this.mileage}`);
    },
}

//Functions
//Logs all out car's current status to the console
const rewriteStats()=> {

}

// Main Process
// Captures keyboard inputs. Depending on the letter presses it will "call" (excute) different functions
const document.onkeyup(event) => {\
    //Captures th key press, converts it to lowercase, and saves it to variable
    let letter = String.fromCharCode(event.keycode)toLowerCase();

    if (letter === 'd'){
        car.driveToWork();
        rewriteStats();
    }
}

