import React from "react";

function Cards({ item }) {
  //   console.log(item);
  //   console.log("hi i am jai");
  return (
    <>
      <div className="mt-4 my-3">
        <div className="card bg-base-100 w-96  shadow-sm hover:scale-105 duration-200 ">
          <figure className="h-64 w-full flex-center justify-center bg-gray-100">
            <img
              className="w-full h-full object-contain"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex flex-col justify-between  dark:bg-slate-900 dark:text-white ">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
