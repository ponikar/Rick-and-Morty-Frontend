import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert } from "./Alert/Alert";
import CardGrid from "./Cards/CardGrid";

function Page() {
  const [items, setItems] = useState([]);

  // we can use Reducers in our components with this hook! :)
  const data = useSelector((state) => state.cards);
  useEffect(() => {
    const fetchItems = async () => {
      let res1 = await fetch("https://rickandmortyapi.com/api/character");
      let data1 = await res1.json();

      let res2 = await fetch(
        "https://rickandmortyapi.com/api/character?page=2"
      );
      let data2 = await res2.json();

      let res3 = await fetch(
        "https://rickandmortyapi.com/api/character?page=3"
      );
      let data3 = await res3.json();

      const data = data1.results.concat(
        data2.results,
        data3.results.splice(10, 20)
      );
      setItems(data);
    };

    fetchItems();
  }, []);

  console.log(data); // open console you will see two things.
  return (
    <div className="container">
      {/* if We have dispatch action then this propery will be set */}
      {data.alertMessage && <Alert />}
      <CardGrid items={items} />
    </div>
  );
}

export default Page;
