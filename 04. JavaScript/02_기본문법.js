// 1. 변수와 자료형
// 1) 변수 테스트
// 전역 변수 선언
str1 = '전역변수';
// 함수 외부에 선언한 변수는 var를 붙여도 전역변수이다.
var str2 = 'var 전역변수';

// var h = document.getElementById('heading1');
// h.style.backgroundColor = 'red';

// console.log(str1);
// console.log(str2);

// 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되는 함수를 구현 시 사용한다.
window.onload = function () {
    var str1 = '지역변수 1';
    var str3 = '지역변수 2';
    var str4;

    // var h = document.getElementById('heading1');
    // h.style.backgroundColor = 'red';

    console.log(str1); // 지역변수 1
    console.log(this.str1); // 전역변수
    console.log(window.str1); // 전역변수

    console.log(str2); // var 전역변수
    console.log(this.str2); // var 전역변수
    console.log(window.str2); // var 전역변수
    
    console.log(str3); // 지역변수 2
    console.log(this.str3); // undefined
    console.log(window.str3); // undefined

    console.log(str4); // undefined

    console.log('--------------------------------------');

    // var, let, const(상수)
    // 1) 중복선언 

    var num = 0;
    console.log(num);
    
    var num = 10;
    console.log(num);
    
    var num = 20;
    console.log(num);
    
    let num2 = 10;
    console.log(num2);
    
    // let num2 = 20;
    // console.log(num2);

    const num3 = 10;
    console.log(num3);

    // const num3 = 20;
    // console.log(num3);

    // num3 = 20; // 값의 재할당이 불가능하다.

    console.log('-------------------------------------------')

    // 2) 유효 범위(스코프) 
    // 함수 안에서 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    if(true) {
        var num4 = 10;

        console.log(num4);
    }

    console.log(num4);

    // 함수 안에서 let, const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.
    if (true) {
        let num5 = 20;
        const num6 = 30;

        console.log(num5);
        console.log(num6);
    }
    
    // console.log(num5);
    // console.log(num6);
}

// 2) 자료형 테스트
function typeTest() {
    let name = '문인수'; // 문자열
    let age = 20; // 숫자
    let height = 183.5; // 숫자
    let check = false; // 논리값
    let hobbies = ['축구', '야구', '농구']; // 배열
    // 객체
    let user = {
        name: '문인수',
        age: 20,
        height: 183.5,
        id : 'ismoon',
        // hobbies: ['축구', '야구', '농구'] 
        // hobbies: hobbies 
        hobbies
    };
    // 함수
    let testFunction = function (num1, num2) {
        alert(num1 + num2);
    };

    // testFunction(10, 20);
    // testFunction();

    // console.log(hobbies);
    // console.log(user);
    // console.log(testFunction);

    let area = document.getElementById('area1');

    // typeof() 연산자
    // 값의 자료형을 확인하는 연산자로
    // 변수 선언 시 자료형을 지정하지 않기 때문에 변수 명만으로는 데이터의 자료형을 확인할 수 없다.
    // 따라서 변수의 자료형을 확인하려면 typeof() 연산자를 사용해야 한다.
    area.innerHTML = '<h4>안녕하세요.</h4>';
    area.innerHTML += `${name}, ${typeof(name)} <br>`;
    area.innerHTML += `${age}, ${typeof(age)} <br>`;
    area.innerHTML += `${height}, ${typeof(height)} <br>`;
    area.innerHTML += `${check}, ${typeof(check)} <br>`;
    area.innerHTML += `${hobbies}, ${typeof(hobbies)} <br>`;
    area.innerHTML += `${user}, ${typeof(user)} <br>`;
    area.innerHTML += `${testFunction}, ${typeof(testFunction)} <br>`;
}

function opTest() {
    // Infinity : 양의 무한대
    // -Infinity : 음의 무한대
    // NaN : 산술 연산 불가
    let num1 = 10 / 0;
    let num2 = 10 / 'a';
    let area = document.getElementById('area2');

    area.innerHTML = `10 / 0 : ${num1} <br>`;
    area.innerHTML += `10 / a : ${num2} <br>`;
    area.innerHTML += `num1 == Infinity : ${num1 === Infinity} <br>`;
    area.innerHTML += `isFinite(num1) : ${isFinite(num1)} <br>`;
    // area.innerHTML += `num2 == NaN : ${num2 === NaN} <br>`; // isNaN으로 판별해야 한다.
    area.innerHTML += `isNaN(num2) : ${isNaN(num2)} <br>`;    
}


// --------------------------------------------------

// 2. 데이터 형변환
// 1) 문자열과 숫자의 '+' 연산
function testPlus() {
    let test1 = 7 + 7; // 14
    let test2 = 7 + '7'; // '77'
    let test3 = '7' + 7; // '77'
    let test4 = '7' + '7'; // '77'
    let test5 = 7 + 7 + '7'; // '147'
    let test6 = 7 + '7' + 7; // '777'
    let test7 = '7' + 7 + 7; // '777'
    let test8 = '7' + (7 + 7); // '714'
    let test9 = 7 * '7'; // 49
    let test10 = '7' - 3; // 4
    let test11 = 4 / '2' + 3; 
    let test12 = '3' * '7';
    let test13 = '3' * 'a';
    let area = document.getElementById('area3');

    area.innerHTML = `test1 : ${test1} <br>`;
    area.innerHTML += `test2 : ${test2} <br>`;
    area.innerHTML += `test3 : ${test3} <br>`;
    area.innerHTML += `test4 : ${test4} <br>`;
    area.innerHTML += `test5 : ${test5} <br>`;
    area.innerHTML += `test6 : ${test6} <br>`;
    area.innerHTML += `test7 : ${test7} <br>`;
    area.innerHTML += `test8 : ${test8} <br>`;
    area.innerHTML += `test9 : ${test9} <br>`;
    area.innerHTML += `test10 : ${test10} <br>`;
    area.innerHTML += `test11 : ${test11} <br>`;
    area.innerHTML += `test12 : ${test12} <br>`;
    area.innerHTML += `test13 : ${test13} <br>`;
}

function castingTest() {
    let area = document.getElementById('area4');

    area.innerHTML = `${2 + '3'} <br>`; // 23
    area.innerHTML += `${2 + Number('3')} <br>`; // 5
    area.innerHTML += `${String(2) + Number('3')} <br>`; // 23
    area.innerHTML += `${2 + parseInt('3')} <br>`; // 5
    area.innerHTML += `${2 + parseFloat('3')} <br>`; // 5
    area.innerHTML += `${parseInt('0xff', 16)} <br>`; // 255
}

// 연산자 테스트
function opTest2() {
    let area = document.getElementById('area5');

    area.innerHTML = '"=" 연산자 테스트 <br>';
    area.innerHTML += `'7' == 7 : ${'7' == 7} <br>`;
    area.innerHTML += `'7' == '7' : ${'7' == '7'} <br>`;
    area.innerHTML += `7 == 7 : ${7 == 7} <br>`;
    area.innerHTML += `'7' != 8 : ${'7' != 8} <br>`;
    area.innerHTML += `'7' != '8' : ${'7' != '8'} <br>`;
    area.innerHTML += `7 != 8 : ${7 != 8} <br>`;


    area.innerHTML += '<br>'

    area.innerHTML += '"===" 연산자 테스트 <br>';
    area.innerHTML += `'7' === 7 : ${'7' === 7} <br>`;
    area.innerHTML += `'7' === '7' : ${'7' === '7'} <br>`;
    area.innerHTML += `7 === 7 : ${7 === 7} <br>`;
    area.innerHTML += `'7' !== 8 : ${'7' !== 8} <br>`;
    area.innerHTML += `'7' !== '8' : ${'7' !== '8'} <br>`;
    area.innerHTML += `7 !== 8 : ${7 !== 8} <br>`;
}

// 제어문 테스트
function forInTest() {
    let result = '';
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    // 반복 변수에 array의 index를 순서대로 i에 담아서 반복시킨다.
    for (const i in array) {
        // console.log(index);
        console.log(array[i]);

        result += array[i] + ' ';
    }

    alert(result);
}