import axios from "axios";
import React, { useEffect, useState } from "react";

const Autocomplete = () => {
  const [display, setDisplay] = useState(false);
  const [option, setoption] = useState([]);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFuYW50aGFrcmlzaG5hbkBmbG9naWMuaW4iLCJ1c2VyX2lkIjo1NCwiZXhwaXJlc19hdCI6IjIwMjMtMDMtMDYgMDg6NTc6MTkgKzAwMDAiLCJpc3MiOiJmb3J0ZWxvZ2ljLmluIn0.Plp7KV-YfhW6tgQ0ilzKCwElsVlPjdSIk0z1_Qoqfe4";

  const apiValue = {
    baseurl: "https://selfserv-staging.fortelogic.in/",
    header: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };

  useEffect(() => {
    async function vendorapi() {
      const res = await axios.get(
        `${apiValue.baseurl}vendors.json`,
        apiValue.header
      );
      setoption(res.data);
    }

    vendorapi();
  }, []);

  const setValuedex = (value) => {
    setInputValue(value);
    setDisplay(false);
  };
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const results = option.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(results);
    console.log(results);
  }, [inputValue]);
  return (
    <div className="relative w-[600px] ml-10">
      <input
        type="text"
        value={inputValue}
        onClick={() => setDisplay(!display)}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 outline-none border-black p-2 w-full"
      />

      {display && (
        <div className="absolute border bg-none w-full text-center">
          {filteredData.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => setValuedex(value.name)}
                className="py-2 cursor-pointer hover:bg-white "
              >
                <p className="text-lg">{value.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
