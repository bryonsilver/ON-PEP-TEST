$(window).resize(function(){ 
    if (window.innerWidth < 1030) {  
        $("input#cr").attr("placeholder", "Cr값");
    } 
}).resize(); 