import React, { useState, useEffect } from "react";
import Page from "./Page";
import { Pokemon } from "../../helpers/types";
import { Link, Button } from "../../components/Buttons";

interface iProps {
  match: { params: { id: string } };
  location: { state: { data: Pokemon } };
}

const DataPage = ({ match, location }: iProps) => {
  const [data, setData] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (
      location &&
      location.state &&
      location.state.data &&
      location.state.data.id === match.params.id
    ) {
      setData(location.state.data);
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Page>
      <p>id: {match.params.id}</p>
      <p>name: {data ? data.name : ""}</p>
      <Link to={`/pokemon/${parseInt(match.params.id) + 1}`}>
        <Button>Next</Button>
      </Link>
    </Page>
  );
};
export default DataPage;
