export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function prefixZeros(str: string) {
  let pad = "000";
  return (pad + str).slice(-pad.length);
}
