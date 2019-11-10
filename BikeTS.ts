class Bike {
    miles: number;

    constructor(public price: number,public max_speed: String) {
        this.miles = 0
    }
    ride = () =>{
        this.miles +=10;
        console.log(`You traveled ${this.miles} miles`);
        return this;
    }
    reverse = () => {
        this.miles -=5;
        console.log(`You traveled backwards ${this.miles} miles `)
        return this;
    }
    displayinfo = () => {
        console.log(`Bike Info:
            Price: ${this.price},
            Max_speed: ${this.max_speed},
            Miles: ${this.miles}
        `)
        return this;
    }
}

var b1 = new Bike(0,"30 mph")
var b2 = new Bike(10,"20 mph")
var b3 = new Bike(100000,"99999 mph")

b1.ride().reverse().displayinfo()
b2.ride().reverse().displayinfo()
b3.ride().reverse().displayinfo()
