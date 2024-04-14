// Или именованная функция
function animateBox() {
    gsap.to(".box", { x: 200 });
}

// Scroll Trigger + scrub line

let line = document.querySelector('.line-1')


gsap.from(line, {
    scaleX: 0,
    transformOrigin: 'left center',
    ease: none,
    scrollTrigger: {
        trigger: line,
        scrub: true,
        start: 'top bottom',
        end: 'top top',
        markers: true
    }
});

// Scroll Trigger + Pin + Stagger

let boxes = document.querySelectorAll('.boxes')

gsap.to(boxes, {
    scrollTrigger: {
        trigger: '.section.bg-red',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=200%',
        markers: true
    },
    x: '44vw',
    backgroundColor: 'blue',
    stagger: .5,
    ease: 'none'
});

// Scroll Trigger + TimeLine

let yellowSectionAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: '.section.bg-yellow',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=200%',
    }
});

yellowSectionAnimation.to(
    '.circle', { scale: 1.2, autoAlpha: 1, ease: 'power2', stagger: .5 })
    .from('.line-1', { scaleX: 0, transformOrigin: 'left center', ease: 'none' })
    .from('.text', { y: '5vw', autoAlpha: 0 }, 0);


// Scroll Trigger + Callback&Method

const callBacksrow = document.querySelector('.callback-rows')
console.log(callBacksrow.offsetWidth)
gsap.set('.box-2', { autoAlpha: 0 });

let balckRectangle = gsap.to('.box-2', {
    x: () => callBacksrow.offsetWidth,
    xPercent: -100,
    rotation: 360,
    autoAlpha: 1,
    backgroundColor: 'blue',
    ease: 'power2.out',
    paused: true,
    stagger: .5,
    duration: 1.5,
});

const play = document.getElementById('play')
const pause = document.getElementById('pause')
const reverse = document.getElementById('reverse')
const resume = document.getElementById('resume')

play.addEventListener('click', () => {
    balckRectangle.timeScale(1).play()
})

pause.addEventListener('click', () => {
    balckRectangle.pause()
})

reverse.addEventListener('click', () => {
    balckRectangle.timeScale(2).reverse()
})

resume.addEventListener('click', () => {
    balckRectangle.resume()
})



// Scroll To

const nav = document.querySelectorAll('.nav')

nav.forEach((item, index) => {
    console.log(item, index)
    item.addEventListener('click', () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '#section' + (index + 1), offsetY: 0
            }
        })
    })
})

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '#section5'
            }
        });
    });
});


// SplitText

let split = new SplitText("#split", { type: "chars" });
const play2 = document.querySelector('.play2')

const startAnimation = gsap.from(split.chars, {
    duration: 0.5,
    y: 10,
    autoAlpha: 0,
    stagger: 0.05,
    paused: true
});

play.addEventListener('click', () => {
    startAnimation.timeScale(1).play2()
});


// Draggable

const draggable = document.querySelector('.draggable')

Draggable.create(".drag", {
    // type: "y",
    bounds: draggable,
    // inertia: true,
    onRelease: function () {
        console.log("drag ended");
        gsap.to('.drag', { scale: 1 })
    },
    onPress: function () {
        console.log('onPress');
        gsap.to('.drag', { scale: .9 })
    },
    dragClickables: true
});


// Text первый вариант

const textAnimation = gsap.to('.span-text', {
    duration: 2,
    text: {
        value: 'Новый текст',
        newClass: 'class2',
        delimiter: '',
    },
    ease: 'none',
    paused: true
});

document.querySelector('.play-text').addEventListener('click', () => {
    textAnimation.play()
});

// Text второй вариант


const textTl = gsap.timeline({
    repeat: 3, repeatDelay: 1, yoyo: true
});

textTl.to('.span-text', { duration: 4, text: ' простой способ написать текст' })


// Финальная практика из TimeLine разных плагинов и их свойств

gsap.from('.root', {
    autoAlpha: 0,
    ease: 'power3.inOut',
    duration: 2,
    delay: 3
});


gsap.from('.text-animation', {
    autoAlpha: 0,
    y: '6vw',
    ease: 'power3.inOut',
    duration: 2,
    delay: 3.5,
    stagger: .5
});


const draggable2 = document.querySelector('.s-hero')
const scroll = document.querySelector('.scroll-down-icon')

Draggable.create(scroll, {
    // type 'y'
    bounds: draggable2,
    onRelease: function () {
        console.log('drag ended');
        gsap.to('.scroll-down-icon', { scale: 1 })
    },
    onPress: function () {
        console.log('onPress');
        gsap.to('scroll-down-icon', { scale: .9 })
    },
    dragClickables: true
});


scroll.addEventListener('click', () => {
    gsap.to(window, {
        duration: .8,
        scrollTo: {
            y: '#img',
            offsetY: 0
        }
    })
});


let imgSection = gsap.timeline({
    scrollTrigger: {
        trigger: '#img',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=300%'
    }
});

imgSection
    .from('.unsplash-image', { scale: 1.3 })
    .from('#left', { x: '-50vw' })
    .from('#right', { x: '50vw' })

const containerBox = document.querySelector('.box-container.flex')
const play3 = document.getElementById('play')
const reverse3 = document.getElementById('reverce')

let boxesAnim = gsap.to('.box', {
    x: () => containerBox.offsetWidth,
    xPercent: -100,
    rotation: 300,
    ease: 'power2.out',
    paused: true,
    stagger: .5,
    duration: 2.5,
})

play.addEventListener('click', () => {
    boxesAnim.timeScale(1).play()
})

reverse.addEventListener('click', () => {
    boxesAnim.timeScale(2).reverse()
})