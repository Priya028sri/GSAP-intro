var tl=gsap.timeline()

tl.from(".nav",{
    y:-20,
    duration:1,
    delay:0.5,
    opacity:0
})
tl.from("h4",{
    y:-20,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.4
})
tl.from(".main",{
    y:40,
    opacity:0,
    duration:0.3,
})
tl.from(".box",{
    y:330,
    opacity:0,
    duration:2,
    rotate: 360,
    borderRadius:"50%",
    backgroundColor:"royalblue",
    yoyo:true,
    delay:1,
    repeat: -1,
    scale:0.01,
    
})