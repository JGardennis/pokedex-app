function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function prefixZeros(str: string) {
  let pad = "000";
  return (pad + str).slice(-pad.length);
}

function getIdFromUrl(url: string): string {
  const rgx = new RegExp(/v2\/[\w]*\/([\d]*)/g).exec(url);
  return rgx && rgx.length === 2 ? rgx[1] : "";
}

function getOffsetFromUrl(url: string) {
  const regex = new RegExp(/offset=([\d]*)/gm).exec(url);
  if (regex && regex.length === 2) {
    return parseInt(regex[1]);
  }

  return 0;
}

export { capitalize, prefixZeros, getIdFromUrl, getOffsetFromUrl };
