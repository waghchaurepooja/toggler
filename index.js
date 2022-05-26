

function toggler(x,y,z) {
    console.log(x,y,z);
    return function (value) {
        if(value === "x") {
            console.log(x);
        }
        else if(value === "y") {
            console.log(y);
        }
        else {
            console.log(z);
        }
    }
}

const toggle = toggler(1,2,3)
toggle("x")
// 1
toggle("y")
// 2
toggle("z")
// 3