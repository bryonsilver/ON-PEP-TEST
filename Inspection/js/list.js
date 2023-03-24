$(document).ready(function() {
    console.log(QUESTION[0][1].value.length)
    for(let i=0; i<12; i++) {
        let list = `<div class="q_list">
                        <div class="ql_question_box">
                            <span class="ql_q_num"><span>Q${QUESTION[0][i].item_no}</span></span>
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
                            <span class="ql_q_num"><span>Q${QUESTION[1][i].item_no}</span></span>
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
                            <span class="ql_q_num"><span>Q${QUESTION[2][i].item_no}</span></span>
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
    $('.next_page2').css({display: 'none'})

    $('.prev_page').click(function(){
        $('.prev_page').css({opacity: '1', zIndex: '99'})
        $('.next_page1').css({right: '0'})
        $('.next_page2').css({
            opacity: '0',
            zIndex: '9',
            bottom: '-100px',
        })
        $('.next_page1').html('다음')
        history.back();
    })
    $('.next_page1').click(function(){
        $('.next_page1').css({display: 'none'})
        $('.prev_page').css({display: 'none'})
        $('.prev_page2_1').css({display: 'inline-block'})
        $('.next_page2').css({
            display: 'inline-block'
        })
        $('#pan_pc').css({
            display: 'none'
        })
        $('#dis').css({opacity: 1})
        $('#pan_cancer').css({
            display: 'inline-block',
            opacity: 1,
        })
        
        $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );
    })
    $('.next_page2').click(function(){
        $('.prev_page').css({display: 'none'})
        $('.prev_page2_1').css({display: 'none'})
        $('.prev_page3_1').css({display: 'block'})

        $('.next_page2').css({display: 'none'})
        $('.next_page1').css({display: 'none'})
        $('.next_page1').css({right: '0'})
        $('.last_result').css({display: 'inline-block'})

        $('.pre_next').css({opacity:'1', zIndex: '99'})



        $('#pan_pc').css({
            display: 'none'
        })
        $('#dis').css({opacity: 0})
        $('#pan_cancer').css({
            display: 'none',
            opacity: 0,
        })
        $('#pan').css({
            display: 'block'
        })
    })

    $('.prev_page2_1').click(function(){
        $('.position_r').css({height: 'auto'})
        $('#pan_pc').css({display: 'block'})
        $('#pan_cancer').css({display: 'none'})
        $('#pan').css({display: 'none'})

        $('.prev_page').css({display: 'inline-block'})
        $('.prev_page2_1').css({display: 'none'})
        $('.next_page2').css({display: 'none'})
        $('.next_page1').css({display: 'inline-block'})
        console.log("1번페이지")
    })


    $('.prev_page3_1').click(function(){
        $('.position_r').css({height: 'auto'})
        $('#pan_pc').css({display: 'none'})
        $('#pan_cancer').css({display: 'block'})
        $('#pan_cancer').css({opacity: '1'})
        $('#pan').css({display: 'none'})

        $('.prev_page').css({display: 'none'})
        $('.prev_page2_1').css({display: 'inline-block'})
        $('.prev_page3_1').css({display: 'none'})

        $('.next_page2').css({display: 'inline-block'})
        $('.next_page1').css({display: 'none'})
        $('.last_result').css({display: 'none'})
        console.log("2번페이지")
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
        $('.position_wrap ').css({top: '170px'})
    });
    $('.next_page2').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        $('.position_wrap ').css({top: '170px'})
    });

    let d_height = $(document).height();
    let w_height = $(window).height();

    $(window).resize(function(){
        w_height = $(window).height();
    })
    let count = 0;
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let s_bot = w_height+s_top;
        // console.log('d_height',d_height, 's_bot', s_bot)

        if(count < 3){
            if(d_height == s_bot) {
                $('.position_wrap ').css({top: '80px'})
                count+=1;
                console.log("count" + count);
            }
            d_height = $(document).height();
        }
    })



    // name, gender, b_type, year, month, day, age, height, wegiht, bsa, bmi

    const urlParams1 = new URL(location.href).searchParams;
    const gender = urlParams.get('gender');
    
    const urlParams2 = new URL(location.href).searchParams;
    const b_type = urlParams.get('b_type');
    
    const urlParams3 = new URL(location.href).searchParams;
    const year = urlParams.get('year');

    const urlParams4 = new URL(location.href).searchParams;
    const month = urlParams.get('month');

    const urlParams5 = new URL(location.href).searchParams;
    const day = urlParams.get('day');

    const urlParams6 = new URL(location.href).searchParams;
    const age = urlParams.get('age');

    const urlParams7 = new URL(location.href).searchParams;
    const height = urlParams.get('height');

    const urlParams8 = new URL(location.href).searchParams;
    const weight = urlParams.get('weight');

    const urlParams9 = new URL(location.href).searchParams;
    const bsa = urlParams.get('bsa');

    const urlParams10 = new URL(location.href).searchParams;
    const bmi = urlParams.get('bmi');
    console.log('name :', name)
    console.log('gender :', gender)
    console.log('b_type :', b_type)
    console.log('year :', year)
    console.log('month :', month)
    console.log('day :', day)
    console.log('height :', height)
    console.log('weight :', weight)
    console.log('bsa :', bsa)
    console.log('bmi :', bmi)
    console.log('age :', age)


    // if ($('input:radio[name="pan_pc_1"]:checked').val()) {
    //     console.log('되어있어요!!')
    //     return false;
    // } else {
    //     console.log("안돼..ㅠ")
    // }

    const searchParams = new URLSearchParams(location.search);
    for (const param of searchParams) {
        if(param[1] == 'women') {
            $("#pan_pc_Sex2").css('display', 'none');
            $("#pan_pc_Sex2").parent('label').css('display', 'none');
            $("#pan_pc_Sex2").parents('.ql_question_box').css('opacity', '0.4');
            $("#pan_pc_Sex2").parents('.q_list_tab').css('opacity', '0.4');
            
        } else if (param[1] == 'men') {
            $("#pan_pc_Sex1").css('display', 'none');
            $("#pan_pc_Sex1").parent('label').css('display', 'none');
            $("#pan_pc_Sex1").parents('.ql_question_box').css('opacity', '0.4');
            $("#pan_pc_Sex1").parents('.q_list_tab').css('opacity', '0.4');
            
        } else if (param[0] == 'age') {
            var param_n = Number(param[1])
            if(param_n < 55) {
                $("#pan_pc_Age2").css('display', 'none');
                $("#pan_pc_Age2").parent('label').css('display', 'none');
                $("#pan_pc_Age2").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Age2").parents('.q_list_tab').css('opacity', '0.4');
                
            } 
            else{
                $("#pan_pc_Age1").css('display', 'none');
                $("#pan_pc_Age1").parent('label').css('display', 'none');
                $("#pan_pc_Age1").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Age1").parents('.q_list_tab').css('opacity', '0.4');
                
            }
        } else if (param[0] == 'bmi') {
            var param_bmi = Number(param[1])
            if(param_bmi < 25) {
                $("#pan_pc_Obesity2").css('display', 'none');
                $("#pan_pc_Obesity2").parent('label').css('display', 'none');
                $("#pan_pc_Obesity2").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity2").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity3").css('display', 'none');
                $("#pan_pc_Obesity3").parent('label').css('display', 'none');
                $("#pan_pc_Obesity3").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity3").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity4").css('display', 'none');
                $("#pan_pc_Obesity4").parent('label').css('display', 'none');
                $("#pan_pc_Obesity4").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity4").parents('.q_list_tab').css('opacity', '0.4');
                
            } else if(param_bmi <= 29) {
                $("#pan_pc_Obesity1").css('display', 'none');
                $("#pan_pc_Obesity1").parent('label').css('display', 'none');
                $("#pan_pc_Obesity1").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity1").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity3").css('display', 'none');
                $("#pan_pc_Obesity3").parent('label').css('display', 'none');
                $("#pan_pc_Obesity3").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity3").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity4").css('display', 'none');
                $("#pan_pc_Obesity4").parent('label').css('display', 'none');
                $("#pan_pc_Obesity4").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity4").parents('.q_list_tab').css('opacity', '0.4');
                
            } else if (param_bmi <= 30) {
                $("#pan_pc_Obesity1").css('display', 'none');
                $("#pan_pc_Obesity1").parent('label').css('display', 'none');
                $("#pan_pc_Obesity1").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity1").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity2").css('display', 'none');
                $("#pan_pc_Obesity2").parent('label').css('display', 'none');
                $("#pan_pc_Obesity2").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity2").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity4").css('display', 'none');
                $("#pan_pc_Obesity4").parent('label').css('display', 'none');
                $("#pan_pc_Obesity4").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity4").parents('.q_list_tab').css('opacity', '0.4');
                
            } else if (param_bmi <= 35) {
                $("#pan_pc_Obesity1").css('display', 'none');
                $("#pan_pc_Obesity1").parent('label').css('display', 'none');
                $("#pan_pc_Obesity1").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity1").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity2").css('display', 'none');
                $("#pan_pc_Obesity2").parent('label').css('display', 'none');
                $("#pan_pc_Obesity2").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity2").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_Obesity3").css('display', 'none');
                $("#pan_pc_Obesity3").parent('label').css('display', 'none');
                $("#pan_pc_Obesity3").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Obesity3").parents('.q_list_tab').css('opacity', '0.4');
                
            }
        }
        else if (param[0] == 'bsa') {
            var param_bsa = Number(param[1])
            if(param_bsa <= 1.60) {
                $("#pan_pc_bsa2").css('display', 'none');
                $("#pan_pc_bsa2").parent('label').css('display', 'none');
                $("#pan_pc_bsa2").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_bsa2").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_bsa3").css('display', 'none');
                $("#pan_pc_bsa3").parent('label').css('display', 'none');
                $("#pan_pc_bsa3").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_bsa3").parents('.q_list_tab').css('opacity', '0.4');
                
            } else if(param_bsa <= 1.90) {
                $("#pan_pc_bsa1").css('display', 'none');
                $("#pan_pc_bsa1").parent('label').css('display', 'none');
                $("#pan_pc_bsa1").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_bsa1").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_bsa3").css('display', 'none');
                $("#pan_pc_bsa3").parent('label').css('display', 'none');
                $("#pan_pc_bsa3").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_bsa3").parents('.q_list_tab').css('opacity', '0.4');
                
            } else if (param_bsa >= 1.91) {
                $("#pan_pc_bsa1").css('display', 'none');
                $("#pan_pc_bsa1").parent('label').css('display', 'none');
                $("#pan_pc_bsa1").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_bsa1").parents('.q_list_tab').css('opacity', '0.4');
                
                $("#pan_pc_bsa2").css('display', 'none');
                $("#pan_pc_bsa2").parent('label').css('display', 'none');
                $("#pan_pc_bsa2").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_bsa2").parents('.q_list_tab').css('opacity', '0.4');
                
            }
        }
        else if (param[0] == 'b_type') {
            if(param[1] == 'O_type' ) {
                $("#pan_pc_Blood1").css('display', 'none');
                $("#pan_pc_Blood1").parent('label').css('display', 'none');
                $("#pan_pc_Blood1").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Blood1").parents('.q_list_tab').css('opacity', '0.4');
                
            } else {
                $("#pan_pc_Blood2").css('display', 'none');
                $("#pan_pc_Blood2").parent('label').css('display', 'none');
                $("#pan_pc_Blood2").parents('.ql_question_box').css('opacity', '0.4');
                $("#pan_pc_Blood2").parents('.q_list_tab').css('opacity', '0.4');
                
            }
        }
    }




    $('.next_page1').click(function(e) {
        // $('#name_text').val().length === 0  && $('#year').val().length === 0 && $('#month').val().length === 0 && $('#day').val().length === 0 && $('#height').val().length === 0 && $('#weight').val().length === 0 && $('#bmi').val().length === 0 && $('#bsa').val().length === 0 && $('#cr').val().length === 0 && $('#ccr').val().length === 0
        var chk = $(':radio[name="pan_pc_4"]').is(":checked");
        var chk2 = $(':radio[name="pan_pc_5"]').is(":checked");
        var chk3 = $(':radio[name="pan_pc_6"]').is(":checked");
        var chk4 = $(':radio[name="pan_pc_7"]').is(":checked");
        var chk5 = $(':radio[name="pan_pc_8"]').is(":checked");
        var chk6 = $(':radio[name="pan_pc_9"]').is(":checked");
        var chk7 = $(':radio[name="pan_pc_10"]').is(":checked");
        var chk8 = $(':radio[name="pan_pc_11"]').is(":checked");
        var chk9 = $(':radio[name="pan_pc_12"]').is(":checked");
        if (!chk) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );
        }
        else if (!chk2) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk4) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk5) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk6) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk7) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk8) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk9) {
            alert('정보를 전부 입력해야 됩니다');
            $('.next_page1').css({display: 'inline-block'})
            $('.prev_page').css({display: 'inline-block'})
            $('.prev_page2_1').css({display: 'none'})
            $('.next_page2').css({
                display: 'none'
            })
            $('#pan_pc').css({
                display: 'inline-block'
            })
            $('#dis').css({opacity: 0})
            $('#pan_cancer').css({
                display: 'none',
                opacity: 0,
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else {
            console.log("선택함")
        }
    })



    $('.next_page2').click(function(e) {
        // $('#name_text').val().length === 0  && $('#year').val().length === 0 && $('#month').val().length === 0 && $('#day').val().length === 0 && $('#height').val().length === 0 && $('#weight').val().length === 0 && $('#bmi').val().length === 0 && $('#bsa').val().length === 0 && $('#cr').val().length === 0 && $('#ccr').val().length === 0
        var chk2_1 = $(':radio[name="pc_13"]').is(":checked");
        var chk2_2 = $(':radio[name="pc_14"]').is(":checked");
        var chk2_3 = $(':radio[name="pc_15"]').is(":checked");
        var chk2_4 = $(':radio[name="pc_16"]').is(":checked");
        var chk2_5 = $(':radio[name="pc_17"]').is(":checked");
        var chk2_6 = $(':radio[name="pc_18"]').is(":checked");
        var chk2_7 = $(':radio[name="pc_19"]').is(":checked");
        var chk2_8 = $(':radio[name="pc_20"]').is(":checked");
        var chk2_9 = $(':radio[name="pc_21"]').is(":checked");
        var chk2_10 = $(':radio[name="pc_22"]').is(":checked");
        var chk2_11 = $(':radio[name="pc_23"]').is(":checked");
        if (!chk2_1) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );
        }
        else if (!chk2_2) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_3) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_4) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_5) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_6) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_7) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_8) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_9) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_10) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk2_11) {
            alert('정보를 전부 입력해야 됩니다');
            $('.prev_page').css({display: 'none'})
            $('.prev_page2_1').css({display: 'inline-block'})
            $('.prev_page3_1').css({display: 'none'})

            $('.next_page2').css({display: 'none'})
            $('.next_page1').css({display: 'inline-block'})
            $('.next_page1').css({right: '1'})
            $('.last_result').css({display: 'none'})

            $('.pre_next').css({opacity:'0', zIndex: '9'})



            $('#pan_pc').css({
                display: 'none'
            })
            $('#dis').css({opacity: 1})
            $('#pan_cancer').css({
                display: 'inline-block',
                opacity: 1,
            })
            $('#pan').css({
                display: 'none'
            })
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else {
            console.log("선택함");
        }
    })


    $('.last_result').click(function(e) {
        // $('#name_text').val().length === 0  && $('#year').val().length === 0 && $('#month').val().length === 0 && $('#day').val().length === 0 && $('#height').val().length === 0 && $('#weight').val().length === 0 && $('#bmi').val().length === 0 && $('#bsa').val().length === 0 && $('#cr').val().length === 0 && $('#ccr').val().length === 0
        var chk3_1 = $(':radio[name="pan_24"]').is(":checked");
        var chk3_2 = $(':radio[name="pan_25"]').is(":checked");
        var chk3_3 = $(':radio[name="pan_26"]').is(":checked");
        var chk3_4 = $(':radio[name="pan_27"]').is(":checked");
        var chk3_5 = $(':radio[name="pan_28"]').is(":checked");
        var chk3_6 = $(':radio[name="pan_29"]').is(":checked");
        var chk3_7 = $(':radio[name="pan_30"]').is(":checked");
        var chk3_8 = $(':radio[name="pan_31"]').is(":checked");
        var chk3_9 = $(':radio[name="pan_32"]').is(":checked");
        var chk3_10 = $(':radio[name="pan_33"]').is(":checked");
        var chk3_11 = $(':radio[name="pan_34"]').is(":checked");
        if (!chk3_1) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );
        }
        else if (!chk3_2) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_3) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_4) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_5) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_6) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_7) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_8) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_9) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_10) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else if (!chk3_11) {
            alert('정보를 전부 입력해야 됩니다');
            e.preventDefault();
            
            $('.window').animate( { scrollTop : $('.header').offset().top }, 500 );reventDefault();
        }
        else {
            console.log("선택함");
        }
    })
    
})

