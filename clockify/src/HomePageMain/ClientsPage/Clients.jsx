import React from "react";
import { InputClient } from "./InputClients";
import { Search } from "./Search";

function Clients() {
  return (
    <div>
      <div>
        <h2>Clients</h2>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <Search />
        </div>
        <div>
          <InputClient />
        </div>
      </div>
    </div>
  );
}

export { Clients };
