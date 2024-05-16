const loading = {
    start: () => {
        // @로딩 시작
        const loading = document.querySelector('#loading');
        loading.style.display = 'block';
    },
    end: () => {
        // @로딩 종료
        const loading = document.querySelector('#loading');
        loading.style.display = 'none';
    },
}

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap code here!
})

var menuAnimation = gsap.timeline({paused:true});
var menuAnimationBack = gsap.timeline({paused:true, reversed: true});
var navMain = document.getElementById("mMenu");
var menuButton = document.getElementById("mBtn");
var toggle = true;

gsap.set('.link',{y:30});

menuAnimation
    .to(navMain, {duration:.8, width: '100%', clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power2.inOut", x:0, y:0, z:0})
    .to('.link',{duration:.5,autoAlpha:1,y:0,stagger:.2,ease: "power4.out"});


menuAnimationBack
    .to('.link',{duration:.5,autoAlpha:0,y:30,stagger:.2,ease: "power4.out"})
    .to(navMain, {duration:0.55,width: 0, clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)", ease: "power4.in", x:0, y:0, z:0});


menuButton.onclick = function() {
    toggle = !toggle;
    if(toggle === false) {
        menuAnimation.play(0);
        document.body.style.overflowY = "hidden";
    } else {
        menuAnimationBack.play(0);
        document.body.style.overflowY = "initial";
    }
};

