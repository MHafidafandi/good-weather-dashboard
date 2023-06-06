import React from "react";

export default function Weather({ cities, handleSelect }) {
  return (
    <div className="w-3/5 mx-auto flex justify-center items-center">
      <h2 className="my-3 w-full text-sky-700 text-4xl font-semibold">
        Current Weather
      </h2>
      <select
        className="block appearence-none w-full bg-gray-100 border border-gray-100 py-3 px-4 pr-8 rounded leading-tight"
        onChange={handleSelect}
      >
        {cities.length > 0 &&
          cities.map((city, i) => <option key={i}>{city}</option>)}
      </select>
    </div>
  );
}
