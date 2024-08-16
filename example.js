function area(r){
    return Math.PI *r *r
}
function circumference(r){
    return Math.PI*2*r
}
function diameter(r){
    return 2 * r
}

function calculate(radius , f){
     let output = []
    for(let i = 0; i< radius.length; i++){
        output.push(f(radius[i]))
    }
    return output
}

//Area
calculate(radius, area())
//Circumference
calculate(radius, circumference())
//Diameter
calculate(radius, diameter())