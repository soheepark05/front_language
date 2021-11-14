// 정규 표현식 객체 생성
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let area = document.getElementById('area1');
    // 생성자 함수를 이용한 정규 표현식 객체 생성
    let regExp = new RegExp('script'); // 생성자의 매개값으로 패턴을 문자열로 지정한다.

    // 리터럴을 이용한 정규 표현식 객체 생성
    let regExp2 = /script/; // 패턴 양쪽에 /로 작성한다.(시작 기호, 종료 기호)
    let str = 'javascript jqueryscript ajax';
    let str2 = 'java jquery ajax';

    console.log(regExp, typeof(regExp));
    console.log(regExp2, typeof(regExp2));
    

    /*
        RegExp 객체에서 제공하는 메소드
            객체.test(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다.
            객체.exec(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열 리턴한다.

        String 객체에서 정규 표현식 객체를 이용하는 메소드
            문자열.match(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 리턴한다.
            문자열.replace(정규식, 바꿀값) : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀값으로 변경한다.
            문자열.search(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 부분의 시작 인덱스를 리턴한다.
            문자열.split(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 구분자로 하여 배열을 생성하여 리턴한다.
    */

    area.innerHTML = '<h3>정규 표현식 객체 생성</h3>';
    // RegExp 객체에서 제공하는 메소드 사용
    area.innerHTML += `regExp.test(str) : ${regExp.test(str)} <br>`;
    area.innerHTML += `regExp.test(str2) : ${regExp.test(str2)} <br>`;
    area.innerHTML += `regExp.exec(str) : ${regExp.exec(str)} <br>`;
    area.innerHTML += `regExp.exec(str2) : ${regExp.exec(str2)} <br><br>`;

    // String 객체에서 정규 표현식 객체를 이용하는 메소드
    area.innerHTML += `str.match(regExp) : ${str.match(regExp)} <br>`
    area.innerHTML += `str.replace(regExp, '스크립트') : ${str.replace(regExp, '스크립트')} <br>`
    area.innerHTML += `str.search(regExp) : ${str.search(regExp)} <br>`
    area.innerHTML += `str.split(regExp) : ${str.split(regExp)} <br>`

    console.log(str.split(regExp));
});

// 플래그 문자
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let area = document.getElementById('area2');
    let str = 'JAvaScript jQuery Ajax';
    let regExp = /a/;
    let regExp1 = /a/i;
    let regExp2 = /a/g;
    let regExp3 = /a/ig;
    let regExp4 = /a/gi;

    area.innerHTML = '<h3>플래그 문자</h3>';

    // '$&'는 패턴을 만족하는 문자열을 가리킨다.
    area.innerHTML += `/a/ : ${str.replace(regExp, '($&)')} <br>`
    area.innerHTML += `/a/i : ${str.replace(regExp1, '($&)')} <br>`
    area.innerHTML += `/a/g : ${str.replace(regExp2, '($&)')} <br>`
    area.innerHTML += `/a/ig : ${str.replace(regExp3, '($&)')} <br>`
    area.innerHTML += `/a/gi : ${str.replace(regExp4, '($&)')} <br>`

    // let str2 = str.replace(regExp4, (match) => {
    //     return '+' + match + '+';
    // });

    // console.log(str2);    
});
