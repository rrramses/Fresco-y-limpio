gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: 'none', duration: 2 });

const tl = gsap.timeline();

tl.from('.about-us', { xPercent: -50, });

ScrollTrigger.create({
    animation: tl,
    trigger: '.about-us',
    markers: false,
    start: 'top 80%', 
    end: 'bottom 50%', 
});

tl.from('.section-lavanderia', { xPercent: 10, });

ScrollTrigger.create({
    animation: tl,
    trigger: '.section-lavanderia',
    markers: true,
    start: 'top 80%', 
    end: 'bottom 20%', 
});




