import anime from 'animejs';

export function startContactAnimation(menu, question, answer, form) {
    let timeline = anime.timeline({
        easing: 'easeInOutCirc',
        direction: 'reverse',
    });
    let timeline2 = anime.timeline({
        easing: 'easeInOutCirc',
    });
    timeline
        .add({
            targets: `.${menu}`,
            opacity: 0,
            duration: 500
        })
        .add({
            targets: `.${form}`,
            translateX: 1300,
            duration: 700,
        })
        .add({
            targets: `.${form}`,
            duration: 1400
        })
    timeline2
        .add({
            targets: `.${question}`,
            opacity: 1,
            duration: 500,
            delay: 100,
            delay: anime.stagger(100)
        })
        .add({
            targets: `.${answer}`,
            opacity: 1,
            duration: 500,
            delay: anime.stagger(100)
        })
}