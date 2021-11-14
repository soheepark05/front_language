// 객체 선언
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let area = document.getElementById('area1');
    let product = {
        // 'pName': '아이폰 12 미니'
        // '0': '배열 흉내', 
        0: '배열 흉내', 
        pName: '아이폰 12 미니',
        price: 1000000,
        brand: '삼성',
        brand: '애플', // 중복 선언하게 되면 마지막에 선언된 프로퍼티가 덮어쓰게 된다.
        spec: ['OLED', 'IOS15']
    };

    // 속성명을 제시할 때 공백이나 특수문자가 들어가야 하는 경우 '', "" 묶어줘야 한다.
    let user = {
        'user name': '문인수',
        'age!!': 20
    }

    console.log(product);

    area.innerHTML = `product : ${product} <br><br>`;

    area.innerHTML += '객체명["속성명"]으로 접근하는 방법<br>';
    // area.innerHTML += `product['0'] : ${product['0']}`/
    area.innerHTML += `product[0] : ${product[0]}<br>`
    area.innerHTML += `product['pName'] : ${product['pName']}<br>`
    area.innerHTML += `product['price'] : ${product['price']}<br>`
    area.innerHTML += `product['brand'] : ${product['brand']}<br>`
    area.innerHTML += `product['spec'][0] : ${product['spec'][0]}<br>`
    area.innerHTML += `product['spec'][1] : ${product['spec'][1]}<br><br>`
    
    area.innerHTML += '객체명.속성명으로 접근하는 방법<br>';
    // area.innerHTML += `product.0 : ${product.0} <br><br>`;
    area.innerHTML += `product.pName : ${product.pName} <br>`;
    area.innerHTML += `product.price : ${product.price} <br>`;
    area.innerHTML += `product.brand : ${product.brand} <br>`;
    area.innerHTML += `product.spec.0 : ${product.spec[0]} <br>`;
    area.innerHTML += `product.spec.1 : ${product.spec[1]} <br><br>`;

    area.innerHTML += '공백이나 특수문자가 속성명에 있는 경우 대괄호를 이용해서 값을 가져올 수 있다.'
    // area.innerHTML += `user.user name : ${user."user name"}<br>`;
    area.innerHTML += `user['user name'] : ${user['user name']}<br>`;
    // area.innerHTML += `user['age!!'] : ${user.age!!}<br>`;
    area.innerHTML += `user['age!!'] : ${user['age!!']}<br>`;
});

// 객체의 메소드
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let name = '문인수';

    let dog = {
        name: '백구',
        kind: '진돗개',
        eat: function(food) {
            // this를 명시적으로 꼭 써주세요~! (객체 내부의 속성에 접근하기 위해서는 'this.속성명'으로 작성해야 한다.)
            console.log(`${this.kind} 종류인 ${this.name}가 ${food}를 먹고 있네요~!`);
        }
    };

    dog.eat('닭가슴살');
});

// 객체와 반복문
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    let game = {
        title: '디아블로2',
        price: 40000,
        supportOS: ['win32', 'win64'],
        service: true
    };

    console.log(game);

    for (const key in game) {
        console.log(`key: ${key}, game[key]: ${game[key]}`);
    }
});

// 객체의 속성 추가 및 삭제
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', ( ) => {
    // let student = {
    //     name: '홍길동',
    //     age: 20,
    //     job: '의적',
    //     whoAreYou: () => {
    //         let str = '';
    
    //         for (const key in this) {
    //             if(key !== 'whoAreYou') {
    //                 str += `${key}: ${this[key]} `;
    //             }
    //         }
    
    //         return str;
    //     }
    // }

    // 빈 객체 선언
    let student = {};

    // 객체에 속성 추가
    student.name = '홍길동';
    student.age = 20;
    student['job'] = '의적';

    // 객체에 메소드 추가
    student.whoAreYou = function () {
        let str = '';

        for (const key in this) {
            // if(key !== 'whoAreYou') {
            if(typeof(this[key]) !== 'function') {
                str += `${key}: ${this[key]} `;
            }
        }

        return str;
    };

    console.log(student);
    console.log(student.whoAreYou());
    console.log(('job' in student))

    delete(student.job);

    console.log(student);
    console.log(student.whoAreYou());
    console.log(('job' in student))
});

// 객체 배열
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    let area = document.getElementById('area2');

    // 배열을 사용하지 않았을 경우
    let student1 = {name: '문인수', java: 100, oracle: 70};
    let student2 = {name: '홍길동', java: 70, oracle: 60};
    let student3 = {name: '백구', java: 100, oracle: 100};
    let student4 = {name: '누렁이', java: 80, oracle: 80};
    let student5 = {name: '이몽룡', java: 20, oracle: 20};

    // console.log(student1);
    // console.log(student2);
    // console.log(student3);
    // console.log(student4);
    // console.log(student5);

    // 배열 선언 및 초기화
    let students = [
        {name: '문인수', java: 100, oracle: 70},
        {name: '홍길동', java: 70, oracle: 60}
    ];

    // 배열에 요소 추가
    students.push({name: '백구', java: 100, oracle: 100});
    students.push(student4);
    students.push(student5);

    // 배열에 담겨있는 모든 객체에 메소드를 추가
    for (let i = 0; i < students.length; i++) {
        students[i].getSum = function() {
            return this.java + this.oracle;
        };

        students[i].getAvg = function() {
            return this.getSum() / 2;
        };        
    }

    console.log(students);

    // 모든 학생의 정보가 담긴 배열을 출력 (이름, 총점, 평균)
    for (const index in students) {
        with(students[index]) {
            area.innerHTML += `이름 : ${name}, 총점 : ${getSum()}, 평균 : ${getAvg()} <br><br>`;
        }
    }
});

// 생성자 함수
function Student(name, java, oracle) {
    // 속성 정의
    this.name = name;
    this.java = java;
    this.oracle = oracle;

    // 메소드 정의
    // this.getSum = function() {
    //     return this.java + this.oracle;
    // };
    // this.getAvg = function() {
    //     return this.getSum() / 2;
    // }
}

Student.prototype.getSum = function() {
    return this.java + this.oracle;
};

Student.prototype.getAvg = function() {
    return this.getSum() / 2;
};

let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', () => {
    let area = document.getElementById('area3');
    let student = new Student('문인수', 80, 80);
    let students = [];

    students.push(student);
    students.push(new Student('이수정', 100, 100));
    students.push(new Student('김형진', 100, 100));
    students.push(new Student('이몽룡', 40, 40));

    // 생성자 함수로 만들어진 객체의 경우 해당 객체가 어떤 생성자 함수로 생성되었는지 instanceof 연산자로 검사할 수 있다.
    console.log(student instanceof Student);
    console.log(students instanceof Student);
    console.log(students);

    // 모든 학생의 정보가 담긴 배열을 출력 (이름, 총점, 평균)
    for (const index in students) {
        area.innerHTML += `이름 : ${students[index].name}, 총점 : ${students[index].getSum()} ,` + 
                            `평균 : ${students[index].getAvg()} <br><br>`
    }
})

// 캡슐화
function IdolGroup(n, m) {
    let name = n;
    let members = m;

    this.getGroupName = function() {
        return name;
    }

    this.getMembers = function() {
        return members;
    }

    this.getMemberCount = function() {
        return members.length;
    }

    this.setGroupName = function(n) {
        name = n;
    }

    this.setMembers = function(m) {
        members = m;
    }
}

let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', () => {
    // 생성자 함수를 이용하여 객체 생성
    let bts = new IdolGroup('방탄소년단', ['지민', '뷔', '정국', '랩몬', '슈가', '진', '제이홉']);
    let area = document.getElementById('area4');

    console.log(bts);
    // console.log(bts.name, bts.members);
    console.log(bts.getGroupName(), bts.getMembers(), bts.getMemberCount());

    bts.setGroupName('레드벨벳');
    bts.setMembers(['아이린', '슬기', '조이', '웬디', '예리']);

    area.innerHTML += `그룹명 : ${bts.getGroupName()}, 멤버 : ${bts.getMembers()} , 멤버수: ${bts.getMemberCount()} <br><br>`;
});