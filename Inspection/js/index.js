if (self.name != 'reload') {
    self.name = 'reload';
    self.location.reload(true);
}
else self.name = ''; 



$(window).resize(function(){ 
    if (window.innerWidth < 1030) {  
        $("input#cr").attr("placeholder", "Cr값");
    } 
}).resize(); 

// women, men 버튼
$("input:radio[name='gender'][value='women']").prop("checked", true);
$('.women > .g_img_after').css({display: 'inline-block'});
$('.women > .g_img_before').css({display: 'none'});

$('.women > .g_img_before').on('click', function(e){
    e.preventDefault();   
    $(this).css({display: 'none'});
    $('.women > .g_img_after').css({display: 'inline-block'});

    $('.men > .g_img_before').css({display: 'inline-block'});
    $('.men > .g_img_after').css({display: 'none'});
    console.log("before 클릭 후 after 보임");
})
$('.men > .g_img_before').on('click', function(e){
    e.preventDefault();   
    $(this).css({display: 'none'})
    $('.men > .g_img_after').css({display: 'inline-block'})

    $('.women > .g_img_before').css({display: 'inline-block'})
    $('.women > .g_img_after').css({display: 'none'})
    console.log("before 클릭 후 after 보임")
})


// 혈액형 버튼
$("input:radio[name='b_type'][value='A_type']").prop("checked", true);
$('.A_type > .a_after').css({display: 'inline-block'});
$('.A_type > .a_before').css({display: 'none'});

$('.A_type > .a_before').on('click', function(e){
    e.preventDefault();   
    $(this).css({display: 'none'})
    $('.A_type > .a_after').css({display: 'inline-block'})

    // b혈액형
    $('.B_type > .b_before').css({display: 'inline-block'})
    $('.B_type > .b_after').css({display: 'none'})
    
    // b혈액형
    $('.O_type > .o_before').css({display: 'inline-block'})
    $('.O_type > .o_after').css({display: 'none'})
    
    // ab혈액형
    $('.AB_type > .ab_before').css({display: 'inline-block'})
    $('.AB_type > .ab_after').css({display: 'none'})
    console.log("before 클릭 후 after 보임")
})

// b 혈액형
$('.B_type > .b_before').on('click', function(e){
    e.preventDefault();   
    $(this).css({display: 'none'})
    $('.B_type > .b_after').css({display: 'inline-block'})

    // a혈액형
    $('.A_type > .a_before').css({display: 'inline-block'})
    $('.A_type > .a_after').css({display: 'none'})
    
    // b혈액형
    $('.O_type > .o_before').css({display: 'inline-block'})
    $('.O_type > .o_after').css({display: 'none'})
    
    // ab혈액형
    $('.AB_type > .ab_before').css({display: 'inline-block'})
    $('.AB_type > .ab_after').css({display: 'none'})
    console.log("before 클릭 후 after 보임")
})

// o 혈액형
$('.O_type > .o_before').on('click', function(e){
    e.preventDefault();   
    $(this).css({display: 'none'})
    $('.O_type > .o_after').css({display: 'inline-block'})

    // b혈액형
    $('.B_type > .b_before').css({display: 'inline-block'})
    $('.B_type > .b_after').css({display: 'none'})
    
    // a혈액형
    $('.A_type > .a_before').css({display: 'inline-block'})
    $('.A_type > .a_after').css({display: 'none'})
    
    // ab혈액형
    $('.AB_type > .ab_after').css({display: 'none'})
    console.log("before 클릭 후 after 보임")
})

// ab 혈액형
$('.AB_type > .ab_before').on('click', function(e){
    e.preventDefault();   
    $(this).css({display: 'none'})
    $('.AB_type > .ab_after').css({display: 'inline-block'})

    // b혈액형
    $('.B_type > .b_before').css({display: 'inline-block'})
    $('.B_type > .b_after').css({display: 'none'})
    
    // b혈액형
    $('.O_type > .o_before').css({display: 'inline-block'})
    $('.O_type > .o_after').css({display: 'none'})
    
    // a혈액형
    $('.A_type > .a_before').css({display: 'inline-block'})
    $('.A_type > .a_after').css({display: 'none'})
    console.log("before 클릭 후 after 보임")
})



// 메인페이지의 라디오 버튼 전부 클릭하지 않으면 넘어가지 못하도록 
// $("#btn_test").on("click", function() {
//     var radios = $(":radio:nth-child(odd)");
//     console.log("radios : ", radios)
//     for(var i = 0; i < radios.length; i++) {
//         var $this = $(radios[i]);
//         if(!$this.is(":checked")) {  //동의함이 선택되어있지 않다면
//             alert('반드시 동의해야 합니다.');
//             $this.focus();
//             $("#btn_test").prop("disabled", true);
//             return;
//         }
//     }
// });
$('#btn_test').click(function(e) {
    // $('#name_text').val().length === 0  && $('#year').val().length === 0 && $('#month').val().length === 0 && $('#day').val().length === 0 && $('#height').val().length === 0 && $('#weight').val().length === 0 && $('#bmi').val().length === 0 && $('#bsa').val().length === 0 && $('#cr').val().length === 0 && $('#ccr').val().length === 0
    if ($('#name_text').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        console.log("잘되고 있냐?")
        e.preventDefault();
    } else if ($('#year').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#month').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#day').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#height').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#weight').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#bmi').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#bsa').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#cr').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    } else if ($('#ccr').val().length === 0) {
        alert('정보를 전부 입력해야 됩니다');
        e.preventDefault();
    }
    else {
        // alert('정보를 전부 입력해야 됩니다');
        $(this).unbind('click', preventDefault);
    }
})
