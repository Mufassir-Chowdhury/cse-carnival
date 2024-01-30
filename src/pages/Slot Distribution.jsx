import { SecondaryButton } from "../components/Button"
import { useState } from "react";

const people = [
  {
    "university": "Ahsanullah University of Science and Technology",
    "count": "2"
  },
  {
    "university": "American International University-Bangladesh",
    "count": "1"
  },
  {
    "university": "Bangabandhu Sheikh Mujibur Rahman University, Kishoreganj",
    "count": "1"
  },
  {
    "university": "Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University",
    "count": "1"
  },
  {
    "university": "Bangladesh Army International University of Science & Technology (BAIUST), Comilla",
    "count": "1"
  },
  {
    "university": "Bangladesh University of Business & Technology",
    "count": "1"
  },
  {
    "university": "Bangladesh University of Engineering & Technology",
    "count": "5+1"
  },
  {
    "university": "Bangladesh University of Professionals",
    "count": "1"
  },
  {
    "university": "Begum Rokeya University, Rangpur",
    "count": "1"
  },
  {
    "university": "BRAC University",
    "count": "3"
  },
  {
    "university": "Chittagong University of Engineering & Technology",
    "count": "3+1"
  },
  {
    "university": "Comilla Universtiy",
    "count": "2+1"
  },
  {
    "university": "Daffodil International University",
    "count": "1"
  },
  {
    "university": "Dhaka City College",
    "count": "1"
  },
  {
    "university": "Dhaka University of Engineering & Technology",
    "count": "1"
  },
  {
    "university": "East Delta University",
    "count": "1"
  },
  {
    "university": "East West University",
    "count": "2"
  },
  {
    "university": "Green University of Bangladesh",
    "count": "1"
  },
  {
    "university": "Hajee Mohammad Danesh Science & Technology University",
    "count": "1"
  },
  {
    "university": "Independent University, Bangladesh",
    "count": "1"
  },
  {
    "university": "International Islamic University, Chittagong",
    "count": "1"
  },
  {
    "university": "International University of Business Agriculture & Technology",
    "count": "1"
  },
  {
    "university": "Islamic University of Technology",
    "count": "3"
  },
  {
    "university": "Islamic University, Bangladesh",
    "count": "1"
  },
  {
    "university": "Jagannath University",
    "count": "1"
  },
  {
    "university": "Jahangirnagar University",
    "count": "3"
  },
  {
    "university": "Jatiya Kabi Kazi Nazrul Islam University",
    "count": "1"
  },
  {
    "university": "Jessore University of Science & Technology",
    "count": "1"
  },
  {
    "university": "Khulna University of Engineering & Technology",
    "count": "4"
  },
  {
    "university": "Leading University",
    "count": "1"
  },
  {
    "university": "Mawlana Bashani Science & Technology University",
    "count": "2"
  },
  {
    "university": "Metropolitan University",
    "count": "1"
  },
  {
    "university": "Military Institute of Science & Technology",
    "count": "2"
  },
  {
    "university": "Mymensingh Engineering College",
    "count": "1"
  },
  {
    "university": "Noakhali Science & Technology University",
    "count": "1"
  },
  {
    "university": "North East University Bangladesh",
    "count": "1"
  },
  {
    "university": "North South University",
    "count": "2"
  },
  {
    "university": "Pabna University of Science & Technology",
    "count": "1"
  },
  {
    "university": "Patuakhali Science & Technology University",
    "count": "1"
  },
  {
    "university": "Port City International University",
    "count": "1"
  },
  {
    "university": "Premier University",
    "count": "1"
  },
  {
    "university": "Rajshahi University of Engineering & Technology",
    "count": "4"
  },
  {
    "university": "Sheikh Hasina University",
    "count": "1"
  },
  {
    "university": "Southeast University",
    "count": "1"
  },
  {
    "university": "Sylhet Engineering College",
    "count": "2"
  },
  {
    "university": "Tejgaon College",
    "count": "1"
  },
  {
    "university": "United International University",
    "count": "1"
  },
  {
    "university": "University of Asia Pacific",
    "count": "1"
  },
  {
    "university": "University of Barishal",
    "count": "1"
  },
  {
    "university": "University of Chittagong",
    "count": "1"
  },
  {
    "university": "University of Dhaka",
    "count": "5"
  },
  {
    "university": "University of Information Technology & Sciences",
    "count": "1"
  },
  {
    "university": "University of Rajshahi",
    "count": "3"
  },
  {
    "university": "Varendra University",
    "count": "1"
  }
]

export default function IUPCSlot() {
  const [search, setSearch] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(people);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredPeople(
      people.filter((person) =>
        person.university.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  return (
    <div >
      <div className="container mx-auto"> 

        <ul className="divide-y divide-gray-100 overflow-scroll p-6 pt-28 sm:p-28 lg:px-48" >
          <h2 className="text-center text-3xl font-semibold mt-4">IUPC Slot Distribution</h2>
          <div className="w-full flex justify-center md:justify-end py-4">
            <a href="/resources/iupc_slot_distribution.pdf" download="iupc_slot_distribution.pdf" target="_blank" rel="noopener noreferrer">
              <button type="button" className="py-2 px-4 bg-navbar-button text-white">Download PDF</button>
            </a>
          </div>
          <div className=" my-4 flex justify-center ">
            <input
              type="text"
              placeholder="Search by University Name"
              className="border-2 border-navbar rounded-md p-2 w-[80%] md:w-[50%]"
              value={search}
              onChange={handleSearch}
            />

          </div>
          <li className="flex justify-between gap-x-2 md:gap-x-6 py-5 items-center bg-slate-900 bg-opacity-10 px-4 text-lg font-semibold">
              <div className="flex min-w-0 gap-x-2 sm:gap-x-4 items-center">
                <div className="min-w-0 flex-auto">
                  <p className="mt-1 truncate leading-5 ">University name</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-end">
                <p className="leading-6 text-gray-900">Slot Count</p>
              </div>
            </li>
          {filteredPeople.length === 0 && <p className="text-center text-2xl mt-4 font-semibold max-h-screen">No Team Found</p>}
          {filteredPeople.map((person, index) => (
            <li key={person.university} className="flex justify-between odd:bg-slate-500 odd:bg-opacity-10 px-4 gap-x-2 md:gap-x-6 py-5 items-center">
              <div className="grid grid-cols-12 min-w-0 gap-x-2 sm:gap-x-4 items-center">
                <div className="h-6 w-6 col-span-1 md:h-12 md:w-12 flex rounded-full bg-gray-700 text-center text-white justify-center items-center">{index + 1}</div>
                <div className="min-w-0 flex-auto col-span-9 pl-2">
                  <p className="mt-1 truncate leading-5 ">{person.university}</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-end">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.count}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-1 px-4 lg:px-10 py-3 lg:py-8 sticky bottom-0 bg-[#7777FF] text-white w-full border-2 border-red-300">
        <b>Slots are given based on the performances of ICPC Dhaka Regionals 2023, BUET IUPC 2023, CUET IUPC 2024. </b><br/>
        <b>An extra slot is given to universities (BUET, CoU, CUET) that have hosted IUPC in 2023-24.</b>

      </div>
    </div>
  )
}