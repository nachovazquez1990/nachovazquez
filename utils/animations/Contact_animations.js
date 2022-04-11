import anime from 'animejs';

export function startContactAnimation(menu, question, answer) {
    let timeline = anime.timeline({
        easing: 'easeInOutCirc',
        direction: 'reverse',
        duration: 450
    });

    timeline
        .add({
            targets: `.${menu}`,
            opacity: 0,
        })
        .add({
            targets: `.${question}`,
            opacity: 0,
            delay: anime.stagger(100)
        }, '-=280')
        .add({
            targets: `.${answer}`,
            opacity: 0,
            delay: anime.stagger(100)
        }, '-=280')
}