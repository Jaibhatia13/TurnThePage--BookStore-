import React from "react";
import Cards from "./Cards.jsx";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div>
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl  text-center mt-20  dark:bg-slate-900 dark:text-white">
            We're delighted to have you{" "}
            <span className="text-blue-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our collection of books and courses designed to spark
            curiosity and enhance your learning journey. Whether you're here to
            pick up a new skill or dive into a good read, there’s something for
            everyone
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
