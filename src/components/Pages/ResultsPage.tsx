import React, { useState, useEffect } from "react";
import Page from "./Page";
import { Button } from "../Buttons";

interface iProps {
  title: string;
  getData: Function;
  Comp: any;
}

const ResultsPage = ({ title, getData, Comp }: iProps) => {
  const [list, setList] = useState<any>([]);
  const [nextUrl, setNextUrl] = useState("");

  const updateList = (url?: string) => {
    getData(url).then(({ results, next }: any) => {
      setList([...list, ...results]);
      setNextUrl(next || "");
    });
  };

  useEffect(updateList, []);

  return (
    <Page title={title} backButton wide>
      {list.map((data: any) => (
        <Comp key={data.name} {...data} />
      ))}

      {nextUrl && (
        <Button onClick={() => updateList(nextUrl)} center cta>
          More
        </Button>
      )}
    </Page>
  );
};

export default ResultsPage;
