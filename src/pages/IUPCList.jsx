import { SecondaryButton } from "../components/Button"
import { useState } from "react";
import { iupcSelectedTeams } from "../data/data";
import Marquee from "react-fast-marquee";

// add people from a json file
const people = iupcSelectedTeams;

//sort the people array by university name
people.sort((a, b) => a.university.localeCompare(b.university));

export default function IUPCList() {
  const [search, setSearch] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(people);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredPeople(
      people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.university.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  return (
    <div className=" pt-24"> 

    

      <Marquee gradient={false} speed={100} className=" overflow-y-hidden bg-navbar-button-hover">
        <p className="text-center text-xl font-semibold py-1 text-white">**IUPC Payment Deadline: 7th February, 2024** </p>
      </Marquee>
      <div className="container mx-auto">
    <ul className="divide-y divide-gray-100 px-6 sm:px-28 lg:px-48" >
      {/* add a marquee to show the payment deadline repeated*/}
      <h2 className="text-center text-3xl font-semibold mt-4">IUPC Selected Teams</h2>
      <div className=" my-4 flex justify-center ">
        <input
          type="text"
          placeholder="Search by Team Name or University Name"
          className="border-2 border-navbar rounded-md p-2 w-[80%] md:w-[50%]"
          value={search}
          onChange={handleSearch}
        />

      </div>
      {/* {filteredPeople.length === 0 && <p className="text-center text-2xl mt-4 font-semibold max-h-screen">No Team Found</p>} */}

      <li className="flex justify-between gap-x-2 md:gap-x-6 py-5 items-center bg-slate-900 bg-opacity-10 px-4 text-lg font-semibold">
        <div className="flex min-w-0 gap-x-2 sm:gap-x-4 items-center">
          <div className="min-w-0 flex-auto">
            <p className="mt-1 truncate leading-5 ">Team name</p>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-end">
          <p className="leading-6 text-gray-900">Payment Link</p>
        </div>
      </li>
      {filteredPeople.length === 0 && <p className="text-center text-2xl mt-4 font-semibold max-h-screen">No Team Found</p>}
      {filteredPeople.map((person, index) => (
        <li key={person.university} className="flex justify-between odd:bg-slate-500 odd:bg-opacity-10 px-4 gap-x-2 md:gap-x-6 py-5 items-center">
          <div className="grid grid-cols-12 min-w-0 gap-x-2 sm:gap-x-4 items-center">
            <div className="h-6 w-6 col-span-1 md:h-12 md:w-12 flex rounded-full bg-gray-700 text-center text-white justify-center items-center">{index + 1}</div>
            <div className="min-w-0 flex-auto col-span-9 pl-2">
              <p className="mt-1 truncate leading-5 ">{person.name}</p>
              <p className="mt-1 truncate text-sm leading-5 text-gray-500">{person.university}</p>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end">
            <a href={person.url}>
              <SecondaryButton text="Payment Link" />
            </a>

          </div>
        </li>
      ))}

      {/* {filteredPeople.map((person, index) => (
        <li key={person.url} className="flex justify-between gap-x-2 md:gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-2 sm:gap-x-4 items-center">
            <div className="h-6 w-6 md:h-12 md:w-12 flex rounded-full bg-gray-700 text-center text-white justify-center items-center">{index + 1}</div>
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.university}</p>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end">
            <a href={person.url}>
              <SecondaryButton text="Payment Link" />
            </a>
          </div>
        </li>
      ))} */}
    </ul>
    </div>
    </div>
  )
}