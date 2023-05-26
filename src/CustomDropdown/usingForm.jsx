import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";

const options = [
  {
    key: 1,
    value: "Test 1",
  },
  {
    key: 2,
    value: "Test 2",
  },
  {
    key: 3,
    value: "Test 3",
  },
  {
    key: 4,
    value: "Test 4",
  },
];
const data = [
  {
    name: "Ali",
  },
  {
    name: "akbar",
  },
  {
    name: "Athul",
  },
  {
    name: "Marjan",
  },
];

const UsingForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedname, setSelectedName] = useState("");

  return (
    <div>
      <h1>Custom DropDown</h1>
      <CustomDropdown
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to Search"}
        keys="key"
        values="value"
      />
      {/* <div className="ml-[500px]">
     <CustomDropdown
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to Search"}
        key="key"
      />
     </div> */}
      <div className="ml-[500px]">
        <CustomDropdown
          options={data}
          onChange={(item) => setSelectedName(item)}
          selectedKey={selectedname}
          placeholder={"type to Search"}
          keys="name"
          values="name"
        />
      </div>
      <p>Selected option : {selectedOption}</p>
      <p>Selected Name : {selectedname}</p>
    </div>
  );
};

export default UsingForm;
