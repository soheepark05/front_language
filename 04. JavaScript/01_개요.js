function external() {
    var result = add(10, 20);

    console.log('result : ' + result)
}

function add(x, y) {
    console.log('01_개요.js의 add() 호출');

    return x + y;
}
