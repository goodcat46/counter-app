export default function numberWithSpaces(x) {
  if (x === undefined) {
    return '0.00';
  } else if (x === null) {
    return '0.00';
  }
  return x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
