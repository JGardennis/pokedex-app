import React, { useState, useEffect } from "react";
import Page from "./Page";
import { Button } from "../Buttons";
import { getItems } from "../../helpers/pokeApi";

interface iProps {
  title: string;
  dataName: string;
  children: Function;
}

const ResultsPage = ({ title, dataName, children }: iProps) => {
  const [items, setItems] = useState<any>([]);
  const [next, setNext] = useState("");

  const updateItems = async (path: string) => {
    const data = await getItems(path);
    setItems([...items, ...data.results]);
    setNext(data.next || "");
  };

  useEffect(() => {
    updateItems(dataName);
    // eslint-disable-next-line
  }, []);

  return (
    <Page title={title} backButton wide>
      {children(items)}
      {next && (
        <Button onClick={() => updateItems(`${dataName}${next}`)} center cta>
          More
        </Button>
      )}
    </Page>
  );
};

export default ResultsPage;
