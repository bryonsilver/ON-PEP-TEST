$(document).ready(function() {
    console.log(QUESTION[0][1].value.length)
    for(let i=0; i<12; i++) {
        let list = `<div class="q_list">
                        <div class="ql_question_box">
                            <span class="ql_q_num"><span>${QUESTION[0][i].item_no}</span></span>
                            <span class="ql_q_text">${QUESTION[0][i].title}</span>
                        </div>
                        
                        <div class="q_list_tab">`
                        for(let j=0; j<QUESTION[0][i].question.length; j++) {
                list +=`    <label for="pan_pc_${QUESTION[0][i].num[j]}">
                                <input type="radio" name="pan_pc_${QUESTION[0][i].item_no}" id="pan_pc_${QUESTION[0][i].num[j]}" value="${QUESTION[0][i].value[j]}">
                                <span>${QUESTION[0][i].question[j]}</span>
                            </label>`
                        }
                list +=`</div>
                    </div>`

        $('#pan_pc').append(list);
    }

    console.log(QUESTION[1][1].value.length)
    for(let i=0; i<11; i++) {
        let list = `<div class="q_list">
                        <div class="ql_question_box">
                            <span class="ql_q_num"><span>${QUESTION[1][i].item_no}</span></span>
                            <span class="ql_q_text">${QUESTION[1][i].title}</span>
                        </div>
                        
                        <div class="q_list_tab">`
                        for(let j=0; j<QUESTION[1][i].question.length; j++) {
                list +=`    <label for="pc_${QUESTION[1][i].num[j]}">
                                <input type="radio" name="pc_${QUESTION[1][i].item_no}" id="pc_${QUESTION[1][i].num[j]}" value="${QUESTION[1][i].value[j]}">
                                <span>${QUESTION[1][i].question[j]}</span>
                            </label>`
                        }
                list +=`</div>
                    </div>`

        $('#pan_cancer').append(list);
    }
    
    console.log(QUESTION[2][1].value.length)
    for(let i=0; i<11; i++) {
        let list = `<div class="q_list">
                        <div class="ql_question_box">
                            <span class="ql_q_num"><span>${QUESTION[2][i].item_no}</span></span>
                            <span class="ql_q_text">${QUESTION[2][i].title}</span>
                        </div>
                        
                        <div class="q_list_tab">`
                        for(let j=0; j<QUESTION[2][i].question.length; j++) {
                list +=`    <label for="pan_${QUESTION[2][i].num[j]}">
                                <input type="radio" name="pan_${QUESTION[2][i].item_no}" id="pan_${QUESTION[2][i].num[j]}" value="${QUESTION[2][i].value[j]}">
                                <span>${QUESTION[2][i].question[j]}</span>
                            </label>`
                        }
                list +=`</div>
                    </div>`

        $('#pan').append(list);
    }





        //문제 question의 버튼들을 누르면 색칠 되는 기능
        $('.ql_a_text').click((function(){
            alert(1)
        }))
        
    $(document).on('click', '#page1', function(){
        $('.position_r').css({height: 'auto'})
    })
    $(document).on('click', '#page2', function(){
        $('.position_r').css({height: 'auto'})
        $('#pan_pc').css({display: 'none'})

    })
    $(document).on('click', '#page3', function(){
        $('.position_r').css({height: 'auto'})
        $('#pan').css({display: 'block'})
        $('#pan_pc').css({display: 'none'})
        $('#pan_cancer').css({display: 'none'})
    })

    const urlParams = new URL(location.href).searchParams;
    const name = urlParams.get('name');
    console.log(name)
    $('#id_name').html(name)
    $('input[name=index_name]').attr('value', name);


    $('.prev_page').click(function(){
        $('.prev_page').css({opacity: '1', zIndex: '99'})
        $('.next_page1').css({right: '0'})
        $('.next_page2').css({
            opacity: '0',
            zIndex: '9',
            bottom: '-100px',
        })
        $('.next_page1').html('다음')
    })
    $('.next_page1').click(function(){
        $('.prev_page').css({opacity: '0', zIndex: '9', display: 'none'})
        $('.next_page1').css({right: '90px', zIndex: '9', opacity: '0'})
        $('.next_page2').css({
            opacity: '1',
            zIndex: '99',
            bottom: '0',
        })
        $('#pan_pc').css({
            display: 'none'
        })
        $('#pan_cancer').css({
            display: 'inline-block'
        })
        
        $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );
    })
    $('.next_page2').click(function(){
        $('.prev_page').css({opacity: '0', zIndex: '9', display: 'none'})
        $('.next_page1').css({opacity: '0', zIndex: '9', display: 'none'})
        $('.next_page1').css({right: '0'})
        $('.next_page2').css({
            opacity: '0',
            zIndex: '9',
            bottom: '0',
        })

        $('.pre_next').css({opacity:'1', zIndex: '99'})
    })

    

    // var top_prev = $('.prev_page');
    // var delay = 1000;
    // top_prev.on('click', function(){
    //     $('html, body').stop().animate({scrollTop:0}. delay);
    // });

    $('.next_page1').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
    $('.next_page2').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
})

