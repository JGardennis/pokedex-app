import React, { useState, useEffect } from "react";
import Page from "../../components/Page";

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
    <Page
      title={title}
      className="wide"
      searchOptions={{ placeholder: `Search ${title.toLowerCase()}` }}
      backButton
    >
      {list.map((data: any) => (
        <Comp key={data.name} {...data} />
      ))}

      {nextUrl && <button onClick={() => updateList(nextUrl)}>More</button>}
    </Page>
  );
};

export default ResultsPage;
