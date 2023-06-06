import React from "react";

export default function AddCity({ handleSubmit, handleInputChange, newCity }) {
  return (
    <form className="px-8 pt-6 pb-8 mb-4">
      <input
        className="shadow border rounded w-3/5 p-2 m-2 px-3 py-2 text-gray-dark leading-tight focus:border-blue-400"
        type="text"
        placeholder="Add your favorite city"
        onChange={handleInputChange}
        value={newCity}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-1/5 bg-sky-700 hover:bg-sky-900 py-1.5 px-3 text-white font-bold mx-2 rounded"
      >
        Add city
      </button>
    </form>
  );
}
