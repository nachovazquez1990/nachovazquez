import anime from 'animejs';

export function startWorkAnimation(title, bar, items, content, menu) {
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
      targets: `.${bar}`,
      width: '0%'
    })
    .add({
      targets: `.${items}`,
      opacity: 0,
      delay: anime.stagger(100)
    }, '-=280')
    .add({
      targets: `.${content}`,
      translateX: 800,
    })
    .add({
      targets: `.${title}`,
      translateY: -800,
    })
}
export function changeItemAnimation(
  bar,
  time,
  content,
  setMainPosition,
  newPosition
) {
  let timeline = anime.timeline({
    easing: 'easeOutCubic',
    duration: 350
  });

  timeline
    .add({
      targets: `.${bar}`,
      width: '0%'
    })
    .add({
      targets: `.${content}`,
      translateY: 900
    }, '-=350')
    .add({
      targets: `.${bar}`,
      translateY: (60 * (newPosition - 1)),
      complete: function () {
        setMainPosition(newPosition - 1)
      }
    })
    .add({
      targets: `.${bar}`,
      width: '100%'
    })
    .add({
      targets: `.${content}`,
      translateY: 0
    }, '-=350')
}