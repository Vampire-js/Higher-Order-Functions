# Higher Order Functions

_Definition: Any function that either takes another function as arguement or returns a function._

```js
//Example without HOF used

const radius = [2,3,4,5]

/*We have to find the area, circumference, and diameter using 
this array*/

function calculateArea(radius){
    let output = []
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i]*radius[i])
    }
    return output
}

function calculateCircumference(radius){
    let output = []
    for(let i = 0; i< radius.length; i++){
        output.push(2* Math.PI *radius[i])
    }
    return output
}

function calculateArea(radius){
    let output = []
    for(let i = 0; i< radius.length; i++){
        output.push(2*radius[i])
    }
    return output
}
```

It works, but leads to bad readability, and also seems unnecessary as ultimately the difference between each function is just the line where the result is calculated and rest of the body is the same. To avoid this repetition, we can _**use a HOF**_.

```js
//Example with HOF used

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
```

- Notice that now the code is much more readable, as we have extracted the reused code into a separate function.
- *Here, ```calculate()``` is a Higher Order Function*

## Another application of HOF: Array.Map()
Array.map() is a function which is used to go through all the elements of an array. 

```js
//Example of Array.map()
let arr = [1,2,3,4,5]
arr.map(e => {
    console.log(e)
})
/* OUTPUT:
1
2
3
4
5
*/
```
Notice that we are passing a function in the map function, so by defination, this is a HOF!!

### Pollyfil of map function
Map function uses a for-loop to iterate through an array. We can always put a for-loop and loop through ourselves right, but in that case we lose the readability. Hence HOF is used here. Following is what map function does in the background
```js
let arr = [1,2,3,4,5]
function map(arr , logic){
    for(let i=0; i<arr.length ; i++>){
        logic(arr[i])
    }
}

//Usage
map(arr , (e) => {console.log(e)})

/* OUTPUT:
1
2
3
4
5
*/
```