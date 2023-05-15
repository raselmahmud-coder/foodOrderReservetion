import React from "react";

const ProductShowcase = () => {
  return (
    <>
      <h2
        style={{ fontFamily: "'Jelytta', sans-serif" }}
        className="text-4xl text-center my-10 text-gray-100">
        Wish you were here
      </h2>
      <h1 className="text-7xl max-w-4xl mx-auto text-center text-gray-100">
        Join us at African Soul Food for an unforgettable journey to the middle
        east.
      </h1>
      <p className="text-2xl text-gray-100 max-w-5xl mx-auto text-center my-10">
        Translating to "heart, captured" in Farsi, African Soul Food is a love
        letter to the influential dishes that shaped Fares Kargar's youth and
        the women in his life who instilled his deep appreciation for Middle
        Eastern cooking.
      </p>
      <button className="btn btn-ghost mx-auto flex underline text-gray-100 text-2xl">
        CLICK TO VIEW OUR MENU
      </button>
      <button className="my-28 btn btn-outline mx-auto flex text-gray-100 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-wide">
        ORDER ONLINE
      </button>
      <div className="">
        <img
          src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/1681442227650-0FNK4C40AXC1NAJE3AER/Dill+Labneh+Labneh+Atlanta.jpg?format=2500w"
          alt=""
          className="rounded"
        />
        <div className="bg-[#504E4E] bg-opacity-50 py-20 max-w-3xl mx-auto rounded-xl relative -top-[550px]">
          <h1 className="text-6xl text-center text-gray-100 ">
            “VACATION ON A PLATE”
          </h1>
          <p className="text-center text-xl text-gray-100 mt-10">
            - THE ATLANTAN, EDITOR LAUREN FINNEY
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
