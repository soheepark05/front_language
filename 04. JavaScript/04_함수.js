// 함수 선언
// 1) 선언적 함수
function test1() {
    alert('test1() 함수 실행');
}

// 2) 익명 함수
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
    alert('익명 함수 실행(이벤트 핸들러를 통해 실행)');
});

// 3) 스스로 실행하는 함수
// (
//     function (a, b) {
//         document.getElementById('p1').innerHTML = `a : ${a}, b : ${b} (자동으로 혼자 실행)`;
//     } (10, 20)
// );
(
    function (a, b) {
        document.getElementById('p1').innerHTML = `a : ${a}, b : ${b} (자동으로 혼자 실행)`;
    } 
) (30, 70);

// 함수의 매개변수
// 1) 매개변수
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', (event) => {
    // argTest('안녕하세요.');
    // argTest('안녕하세요.', '반갑습니다.');
    argTest();

    // console.log(arguments); 화살표 함수는 arguments를 생성하지 않는다.
    console.log(event);
    console.log(e.target);
});

// 매개변수 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다. (ES6 부터 도입)
function argTest(value = '매개값 없음') {
    alert(value);
}

// 2) arguments
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let result = 0;
    // result =  sum(11, 22, 33, 44);
    result = sum(125, 600);

    alert(`sum : ${result}`)
});

function sum() {
    let result = 0;

    console.log(arguments);
    console.log(arguments.length);
    console.log(typeof(arguments));

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

// 3) 매개변수에 this 요소 전달하기
function thisTest(element) {
    console.log(this); // window 객체(함수, 전역변수는 window에 포함되기 때문에)
    console.log(element); // 이벤트가 발생했을 때의 이벤트가 발생한 요소
}

// 함수의 리턴
// 1) 일반적인 값 리턴
function returnTest() {
    let random = ran();

    alert(`random : ${random}`)
}

function ran() {

    return parseInt(Math.random() * 100 + 1);
}

// 2) 익명 함수를 리턴하는 함수
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    // let func = returnTest2();
    
    // func();

    returnTest2()();
});

function returnTest2() {
    // 클로저
    //   - 내부함수가 사용하는 외부함수의 지역변수는 내부함수가 소멸할 때까지 소멸되지 않는 특성을 클로저라고 한다.
    let userName = document.getElementById('userName').value;    

    return function() {
        alert(userName + '님 환영합니다.');
    }
}

// 내장 함수
// 1) eval()
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    let p2 = document.getElementById('p2');
    let calc = document.getElementById('calc');

    p2.innerHTML += `실제 입력된 값 : ${calc.value} <br>`;
    p2.innerHTML += `eval() 후 : ${eval(calc.value)} <br>`
});