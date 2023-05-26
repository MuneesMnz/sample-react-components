import React, { useState } from "react";
import { useEffect } from "react";

const FilterData = ({ filtvalue }) => {
  const [data, setData] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Ali", age: 45 },
    { id: 5, name: "Athul", age: 30 },
    { id: 6, name: "Gopu", age: 25 },
    { id: 7, name: "Faiz", age: 5 },
    { id: 8, name: "Hadi", age: 15 },
    { id: 9, name: "Fidu", age: 20 },
    { id: 10, name: "Fayas", age: 15 },
    { id: 11, name: "saju", age: 18 },
    { id: 12, name: "Sinu", age: 25 },
    { id: 13, name: "shafi", age: 35 },
    { id: 14, name: "Adarsh", age: 45 },
    { id: 15, name: "mnz", age: 21 },
    // Add more data items as needed
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [filterValue, setFilterValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsperpage = 5;
  const LastIndex = currentPage * recordsperpage;
  const firstIndex = LastIndex - recordsperpage;
  const records = filteredData.slice(firstIndex, LastIndex);
  const npages = Math.ceil(filteredData.length / recordsperpage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== LastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    filterData(value);
  };

  const filterData = (value) => {
    const filtered = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filtered);
  };
  useEffect(() => {
    filterData(filtvalue);
  }, [filtvalue]);

  return (
    <div className="mt-10">
      <input
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Filter table..."
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>
          <button
            className={`bg-green-500 p-2 `}
            onClick={prePage}
            disabled={currentPage !== 1 ? false : true}
          >
            prev
          </button>
          {numbers.map((num, ind) => {
            return (
              <button
                className={` p-2 mx-2 ${
                  currentPage === num ? "bg-red-500" : ""
                }`}
                key={ind}
                onClick={() => changeCurrentPage(num)}
              >
                {num}
              </button>
            );
          })}
          <button
            className="bg-green-500 p-2"
            onClick={nextPage}
            disabled={currentPage !== npages ? false : true}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterData;
