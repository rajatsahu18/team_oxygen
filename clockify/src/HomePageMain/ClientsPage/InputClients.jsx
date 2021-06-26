import axios from "axios";
import React, { useEffect, useState } from "react";

function InputClient() {
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);
  const handlesearch = () => {
    const requestparam2 = {
      method: "get",
      url: "https://json-server-mocker-pooran.herokuapp.com/userdata",
      params: {
        q: query
      }
    };
    axios(requestparam2)
      .then((Response) => setData(Response.data.items))
      .catch((err) => console.log("err"));
  };

  useEffect(() => {
    handlesearch();
  }, []);

  return (
    <div>
      <div>
        Search:
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          placeholder="search"
        />
        <button onClick={handlesearch}>ADD</button>
        <div>
          {data &&
            data.map((el) => {
              return <div>{el.login}</div>;
            })}
        </div>
      </div>
      ;
    </div>
  );
}

export { InputClient };
