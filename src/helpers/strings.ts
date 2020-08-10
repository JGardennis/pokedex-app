function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function prefixZeros(str: string): string {
  let pad = "000";
  return (pad + str).slice(-pad.length);
}

function getIdFromUrl(url: string): string {
  const rgx = new RegExp(/v2\/[\w]*\/([\d]*)/g).exec(url);
  return rgx && rgx.length === 2 ? rgx[1] : "";
}

function getOffsetFromUrl(url: string): number | null {
  const rgx = new RegExp(/(offset=)(\d+)/g).exec(url);
  return rgx && rgx.length === 3 ? parseInt(rgx[2]) : null;
}

export { capitalize, prefixZeros, getIdFromUrl, getOffsetFromUrl };
