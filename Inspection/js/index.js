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
    $('.AB_type > .ab_before').css({display: 'inline-block'})
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