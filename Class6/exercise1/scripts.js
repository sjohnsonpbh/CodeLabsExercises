// aim - Create a function that calculates the area of a triangle
// given the base and height as arguments. Call the function a few times 
// with different inputs.

function calculateTriangleArea(base, height) {

    let triangleBase = parseInt(base);

    let triangleHeight = parseInt(height);

    let triangleArea = (triangleBase * triangleHeight) / 2;

    console.log("The area of the triangle is " + triangleArea);

}

