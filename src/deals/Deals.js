import { useEffect, useState } from "react";
import Card from "../Card";

export default function Deals() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setData(json))
  })

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.length > 0 && data.map((a, i) => (
          <div>
            <Card data={a} />
          </div>
        ))

        }
      </div>
    </>
  )
}
