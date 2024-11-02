"use client";
import { Card } from "@/components/Card";
import Image from "next/image";

import EmployeesData from "@/data.json";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFiltered] = useState(EmployeesData.employees);

  useEffect(() => {
    const filterEmployees = () => {
      let filtered = EmployeesData.employees;

      if (filter === "active") {
        filtered = filtered.filter((employee) => employee.is_active);
      } else if (filter === "inactive") {
        filtered = filtered.filter((employee) => !employee.is_active);
      }

      if (searchQuery) {
        filtered = filtered.filter((employee) =>
          employee.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      return filtered;
    };

    setFiltered(filterEmployees());
  }, [filter, searchQuery]);

  return (
    <>
      <div className="p-5 w-full flex justify-between">
        <div className="flex justify-center items-center">
          <SearchIcon className={"size-8 absolute left-6"} onClick={() => console.log("ehhe")} />
          <input
            type="text"
            className="border-2 border-gray-500 bg-transparent rounded-lg px-10 text-lg py-2 w-80"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image src={'/static/users/user.jpg'} width={50} height={50} alt="user-profile" className="rounded-full m-1" />
          <p className="m-1 text-lg">Alex Doe</p>
          <ArrowIcon className={"size-5"} />
        </div>
      </div>

      <div className="p-5 w-full flex justify-between">
        <p className="text-4xl font-bold">Employees</p>

        <div>
          <button className={`${filter === "all" ? 'bg-blue-400 text-white' : ''} font-medium my-1 mx-2 py-1 px-6 rounded-full`} onClick={() => setFilter("all")}>All</button>
          <button className={`${filter === "active" ? 'bg-blue-400 text-white' : ''} font-medium my-1 mx-2 py-1 px-6 rounded-full`} onClick={() => setFilter("active")}>Active</button>
          <button className={`${filter === "inactive" ? 'bg-blue-400 text-white' : ''} font-medium my-1 mx-2 py-1 px-6 rounded-full`} onClick={() => setFilter("inactive")}>Inactive</button>
        </div>
      </div>

      <div className="flex flex-wrap p-5 justify-center">
        {filteredData.map((employee) => (
          <Card employee={employee} key={employee.id} />
        ))}
      </div>
    </>
  );
}
