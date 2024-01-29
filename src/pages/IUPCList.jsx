import { SecondaryButton } from "../components/Button"
import { useState } from "react";

const people = [


  {
    name: 'Team Name',
    university: 'Fake University of Technology',
    url: '/payment/id',
  },
  {
    name: 'Team Name',
    university: 'Fake University of Technology',
    url: '/payment/id',
  },
  {
    name: 'Team Name',
    university: 'Fake University of Technology',
    url: '/payment/id',
  },
  {
    name: 'Team Name',
    university: 'Fake University of Technology',
    url: '/payment/id',
  },
  {
    name: 'Team Name',
    university: 'Fake University of Technology',
    url: '/payment/id',
  },
  {
    name: 'Team Name',
    university: 'Fake University of Technology',
    url: '/payment/id',
  },
]

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
    <ul className="divide-y divide-gray-100 p-6 pt-28 sm:p-28">
      <h2 className="text-center text-3xl font-semibold mt-4">IUPC Team List</h2>
      <div className=" mt-4 flex justify-center ">
        <input
          type="text"
          placeholder="Search by Team Name or University Name"
          className="border-2 border-navbar rounded-md p-2 w-[80%] md:w-[50%]"
          value={search}
          onChange={handleSearch}
        />

      </div>
      {filteredPeople.length === 0 && <p className="text-center text-2xl mt-4 font-semibold max-h-screen">No Team Found</p>}

      {filteredPeople.map((person, index) => (
        <li key={person.url} className="flex justify-between gap-x-2 md:gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-2 sm:gap-x-4 items-center">
            <div className="h-6 w-6 md:h-12 md:w-12 flex rounded-full bg-gray-700 text-center text-white justify-center items-center">{index + 1}</div>
            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
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
      ))}
    </ul>
  )
}