import React from 'react'
import { useState } from 'react';

const FilterWithTable = () => {
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
  return (
    <div>
      <input
        type="text"
        // value={filterValue}
        // onChange={handleFilterChange}
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
          {data.map((item) => (
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
          {/* <button
            className={`bg-green-500 p-2 `}
            // onClick={prePage}
            // disabled={currentPage !== 1 ? false : true}
          >
            prev
          </button>
          {numbers.map((num, ind) => {
            return (
              <button
                // className={` p-2 mx-2 ${
                //   currentPage === num ? "bg-red-500" : ""
                // }`}
                // key={ind}
                // onClick={() => changeCurrentPage(num)}
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
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default FilterWithTable
