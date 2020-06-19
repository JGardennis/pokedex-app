import { ItemsResponse } from "./types";

const baseUrl = "https://pokeapi.co/api/v2/";

function getEnglishEntryFromItem(item: any, key: string) {
  return item[key].find((entry: any) => {
    return entry.language.name === "en";
  });
}

async function getItems(path: string) {
  const data = await fetch(`${baseUrl}${path}`);
  const response: ItemsResponse = await data.json();

  const results = await Promise.all(
    response.results.map(async ({ url }) => await (await fetch(url)).json())
  );

  return {
    next: response.next
      ? response.next.substring(response.next.indexOf("?"))
      : null,
    results,
  };
}

export { getItems, getEnglishEntryFromItem };
