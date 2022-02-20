import anime from 'animejs';

export function startMenu(target) {
  anime({
    targets: `.${target}`,
    opacity: 0,
    duration: 1200,
    direction: 'reverse',
    easing: 'easeInOutSine'
  });
}
export function startBandAnimation(target) {
  anime({
    targets: `.${target}`,
    translateX: 800,
    duration: 1000,
    direction: 'reverse',
    easing: 'easeInOutSine'
  });
}
export function startTitleAnimation(target) {
  anime({
    targets: `.${target}`,
    translateY: -800,
    duration: 1000,
    direction: 'reverse',
    easing: 'easeInOutSine'
  });
}
export function exitBandAnimation(target) {
  anime({
    targets: `.${target}`,
    translateX: 800,
    duration: 1000,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });
}
export function exitTitleAnimation(target) {
  anime({
    targets: `.${target}`,
    translateY: 800,
    duration: 1000,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });
}