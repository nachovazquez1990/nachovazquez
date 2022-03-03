import anime from 'animejs';

export function startMainAnimation(title, content, menu, pagination) {
  let timeline = anime.timeline({
    easing: 'easeInOutQuad',
    direction: 'reverse',
    duration: 450
  });

  timeline
    .add({
      targets: `.${menu}`,
      opacity: 0,
    })
    .add({
      targets: `.${content}`,
      translateX: 1100,
    })
    .add({
      targets: `.${title}`,
      translateY: -800,
    })
}
export function exitMainAnimation(
  title,
  content,
  menu,
  pagination,
  setPosition,
  position,
  setPositionTitleStyle,
  setPositionContentStyle,
  titleStyles,
  contentStyles
) {
  let timeline = anime.timeline({
    easing: 'easeOutSine',
    duration: 320
  });

  timeline
    .add({
      targets: `.${menu}, .${pagination}`,
      opacity: 0,
    })
    .add({
      targets: `.${title}`,
      translateY: -800,
    })
    .add({
      targets: `.${content}`,
      translateX: 980,
      complete: function () {
        setPosition(position)
        if (position == 0) {
          setPositionTitleStyle(titleStyles.uno)
          setPositionContentStyle(contentStyles.uno)
        }
        if (position == 1) {
          setPositionTitleStyle(titleStyles.dos)
          setPositionContentStyle(contentStyles.dos)
        }
        if (position == 2) {
          setPositionTitleStyle(titleStyles.tres)
          setPositionContentStyle(contentStyles.tres)
        }
      }
    })
    .add({
      targets: `.${content}`,
      translateX: 0,
    })
    .add({
      targets: `.${title}`,
      translateY: 0,
    })
    .add({
      targets: `.${menu}, .${pagination}`,
      opacity: 1,
    })
}