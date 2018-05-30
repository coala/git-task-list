/* eslint-disable import/prefer-default-export */
export function calculateForegroundColor(bgColor) {
  if (!bgColor) { return ''; }
  return (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2) ? '#000' : '#fff';
}
