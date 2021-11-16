$(document).ready(() => {
    // 1. 자손 선택자와 후손 선택자
    //  1) 자손 선택자 : 부모>자손
    $('div>h3').css('color', 'violet');
    $('div>li').css('color', 'violet');
    $('div>ul h3').css('color', 'green')

    //  2) 후손 선택자 : 부모 후손
    $('div h3').css('background-color', 'skyblue');
    $('div .test').css('background-color', 'tomato');

    // 2. 기본 속성 선택자
    // $('input[class]').css('background-color', 'tomato');
    // $('input[type=text]').val('Change Value');
    // $('input[class~=test]').val('123456');
    // $('input[type^=ra]').prop('checked', 'true');
    // $('input[type$=box]').prop('checked', 'true');
    // $('input[class*=st2]').css('width', '100px').css('height', '100px');

    // 3. 입력 양식 선택자
    // $(':text').css('background-color', 'pink');
    // $(':button').val('왕버튼').css({width: '200px', height: '200p'});
    // $(':checkbox').prop('checked', true).css({width: '50px', height: '50px'});
    // $(':file').css('background-color', 'yellow');
    
    // $(':image').mouseenter((event) => {
    //     console.log(event);

    //     $(event.target).attr('src', '../resources/image/flower2.PNG');
    // });
    
    // $(':image').mouseout((event) => {
        //     console.log(event);
        
        //     $(event.target).attr('src', '../resources/image/flower1.PNG');
        // });
    
    // hover(): mouseenter() + mouseout()
    // $(':image').hover(
    //     (event) => {
    //         $(event.target).attr('src', '../resources/image/flower2.PNG');
    //     }, 
    //     (event) => {
    //         $(event.target).attr('src', '../resources/image/flower1.PNG');
    //     }
    // );

    // 4. checkbox 상태에 대한 선택자
    // input 태그 중에 체크가 된 객체 선택
    $('input:checked').css({width: '50px', height: '50px'});
    $('input:checkbox').change((event) => {
        let target = $(event.target);

        console.log(event.target);
        console.log(target);

        if(target.prop('checked')) {
            target.css({width: '50px', height: '50px'});
        } else {
            target.css({width: '15px', height: '15px'});
        }
    });

    // 5. select, option 태그의 상태에 대한 선택자
    $('#national').change(() => {
        // select 태그의 option 태그 중 선택된 객체를 선택 -> value 값을 가져온다.
        let value = $('#national>option:selected').val();

        // id가 result인 요소에 값을 value로 변경
        $('#result').val(value);
    });

    // 6. input 상태에 대한 선택자
    // $('input:enabled').css('background-color', 'tomato');
    $('input:disabled').css('background-color', 'tomato');
    
    // 7. attr()와 prop()
    let cb1 = $('#cb1');
    let cb2 = $('#cb2');

    console.log(`cb1.attr('checked') : ${cb1.attr('checked')}`);
    console.log(`cb2.attr('checked') : ${cb2.attr('checked')}`);

    console.log(`cb1.prop('checked') : ${cb1.prop('checked')}`);
    console.log(`cb2.prop('checked') : ${cb2.prop('checked')}`);

    // cb2.attr('checked', 'checked');
    // cb2.prop('checked', true);
});