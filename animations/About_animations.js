import anime from 'animejs';

export function startMainAnimation(title, content, image, menu, pagination) {
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
      translateX: 1300,
    })
    .add({
      targets: `.${title}`,
      translateY: -800,
    })
    .add({
      targets: `.${image}`,
      translateY: 550,
    })
}
export function exitMainAnimation(
  title,
  content,
  image,
  menu,
  pagination,
  setPosition,
  position,
  setPositionTitleStyle,
  setPositionContentStyle,
  titleStyles,
  contentStyles,
  setImage,
  image1,
  image2,
  image3
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
      translateX: 1800,
    })
    .add({
      targets: `.${image}`,
      translateY: 550,
      complete: function () {
        setPosition(position)
        if (position == 0) {
          setPositionTitleStyle(titleStyles.uno)
          setPositionContentStyle(contentStyles.uno)
          setImage(image1)
        }
        if (position == 1) {
          setPositionTitleStyle(titleStyles.dos)
          setPositionContentStyle(contentStyles.dos)
          setImage(image2)
        }
        if (position == 2) {
          setPositionTitleStyle(titleStyles.tres)
          setPositionContentStyle(contentStyles.tres)
          setImage(image3)
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
      targets: `.${image}`,
      translateY: 0,
    })
    .add({
      targets: `.${menu}, .${pagination}`,
      opacity: 1,
    })
}