function product(product1, product2, product3) {
    let sum1 = [0][0] * [0][1];
    let sum2 = [1][0] * [1][1];
    let sum3 = [2][0] * [2][1];
    let allproducts = sum1 + sum2 + sum3;

    return allproducts;
}


const productList1 = ([[1, 2], [1, 1], [2, 3]]);
console.log("productList1 is ", productList1);

const productList2 = ([[10, 2], [5, 0], [2, 3]]);
console.log("productList2 is ", productList2);

const productList3 = ([[1, 2], [2, 3], [3, 4]]);
console.log("productList3 is ", productList3)

const productList4 = ([[1, 2], [0, 3], [3, 0]]);
console.log("productList4 is ", productList4)


