import React, { useState } from "react";

function Search() {
  var obj1 = {
   
    department: "",
    
  };

  const [query, setquery] = useState(obj1);

  const { department } = query;

  const handlechange = (e) => {
    const { name, value } = e.target;

    setquery({ ...query, [name]: value });
  };

  const depts = [
    {
      value: "",
      name: "Show All"
    },
    {
      value: "",
      name: "Show Active"
    }
  ];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <select
          style={{
            padding: "10px",
            fontSize: "14px",
            backgroundColor: "#FFFFF",
            color: "#66666",
            borderColor: "#F2F6F8"
          }}
          value={department}
          name="department"
          onChange={handlechange}
        >
          {depts.map((de) => (
            <option
              style={{ color: "#66666", fontSize: "14px", fontWeight: "bold" }}
              key={de.value}
            >
              {de.name}
            </option>
          ))}
        </select>
        <div>
          <input />
        </div>
      </div>
    </div>
  );
}

export { Search };
