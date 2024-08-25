function page1(){
    
var tl = gsap.timeline()


tl.from('ul li, h1,.requestBtn',{
    y: -40,
    opacity: 0, 
    stagger: 0.3,
    duration: 0.8,
})

tl.from('.part-1 h4, .part-1 p',{
    x: -200,
    duration:0.8,
    opacity:0,
    // stagger: 0.3,
})

tl.from('.part-1 button ',{
    opacity:0,
    duration:0.4,
})

tl.from('.part-2 img',{
    opacity:0,
    duration: 0.5,
    x:200,

},"-=0.3")

tl.from('.section-2 img',{
    opacity:0,
    duration:0.5,
    y:100,
    stagger:0.3,
})
}

page1()

function page2Animation(){
    
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services-section h4",
        scroller: "body",
        start: "top 50%",
        end:"top 0",
        scrub:2
    }
})

tl2.from('.services-section',{
    y: 20,
    opacity:0,
    duration:0.1,
})

tl2.from('.box-section .left1',{
   x:-300,
   opacity:0,
   duration:1
}, "anime")

tl2.from('.box-section .right1',{
   x:300,
   opacity:0,
   duration:1
}, "anime")

tl2.from('.box-section .left2',{
   x:-300,
   opacity:0,
   duration:1
}, "anime1")

tl2.from('.box-section .right2',{
   x:300,
   opacity:0,
   duration:1
}, "anime1")

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-4 .section-4-container",
        scroller: "body",
        start: "top 50%",
        end:"top 0",
        scrub:2
    }
})
tl3.from('.section-4 .section-4-container',{
    opacity:0,
   
})

gsap.from('.case-study',{
    y:10,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: " .case-study",
        scroller: "body",
        start: "top 50%",
        end:"top 30%",
        scrub:2
    }
})

}

page2Animation()