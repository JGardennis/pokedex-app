import React, { useState, useEffect } from "react";
import Page from "./Page/Page";
import { Button } from "../Buttons";
import { FlexBox } from "../Theme/GlobalStyles";

interface iProps {
  title: string;
  dataName: string;
  children(items: any): React.ReactNode[] | null;
  columns?: number;
}

const ResultsPage = () => {
  // const [items, setItems] = useState<any>([]);
  // const [next, setNext] = useState("");
  // const [loading, setLoading] = useState(false);

  // const updateItems = async (path: string) => {
  //   setLoading(true);
  //   const data = await getItems(path);
  //   setItems([...items, ...data.results]);
  //   setNext(data.next || "");
  //   setLoading(false);
  // };

  // const printChildren = () => {
  //   const all = children(items);

  //   if (all) {
  //     const chunks: React.ReactNode[] = [];

  //     while (all.length) {
  //       chunks.push(all.splice(0, 3));
  //     }

  //     return chunks.map((chunk) => (
  //       <FlexBox justify="space-between">{chunk}</FlexBox>
  //     ));
  //   }

  //   return null;
  // };

  // useEffect(() => {
  //   updateItems(dataName);
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Page title={""} backButton>
      {/* <FlexBox wrap="wrap">
        {printChildren()}
        {next && (
          <Button onClick={() => updateItems(`${dataName}${next}`)} center cta>
            {loading ? "Loading..." : "More"}
          </Button>
        )}
      </FlexBox> */}
    </Page>
  );
};

export default ResultsPage;
