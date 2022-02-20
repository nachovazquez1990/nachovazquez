import anime from 'animejs';

export function startMainAnimation(title, content, menu) {
  let timeline = anime.timeline({
    easing: 'easeOutCubic',
    direction: 'reverse',
    duration: 500
  });

  timeline
    .add({
      targets: `.${menu}`,
      opacity: 0,
    })
    .add({
      targets: `.${content}`,
      translateX: 800,
    })
    .add({
      targets: `.${title}`,
      translateY: -800,
    })
}
export function exitMainAnimation(title, content, setPosition, position) {
  let timeline = anime.timeline({
    easing: 'easeInOutBack',
    duration: 500
  });

  timeline
    .add({
      targets: `.${content}`,
      translateX: 800,
    })
    .add({
      targets: `.${title}`,
      translateY: -800,
      complete: function () {
        setPosition(position)
      }
    })
    .add({
      targets: `.${title}`,
      translateY: 0,
    })
    .add({
      targets: `.${content}`,
      translateX: 0,
    })
}