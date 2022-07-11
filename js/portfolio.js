$('document').ready(function(){
    $(".full-landing-image").ripples({
        resolution: 567, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
        perturbance: 0.03, // 잔물경 굴절 강도. 0은 굴절 없음
    });

    AOS.init({
        offset : 300,
        duration: 2000
    });

    let typed = new Typed("#typed1",{
        stringsElement: "#typed",
        typeSpeed: 100,
        loop :true,
        backSpeed: 50,
    })

    // full page

    $("#fullpage").fullpage({
        autoScrolling:true,
        scrollHorizontally: true, 
        navigation:true,
        navigationPosition: 'right',
        responsiveWidth: 1100,
        afterLoad: function(origin, destination){
            console.log(destination.index)
            if(destination.index == 1){
                $(".profile").addClass("aos-animate")

                
            }
        }
        // 모바일에서는 한칸씩 내려가는거 풀 수 있음
    })


    // Swiper.js
    
    const swiper = new Swiper(".main-content",{
        // loop: true,
        navigation: {
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"

        },
        pagination: {
            el:".swiper-pagination",
            clickable: true,
        },
    })
})