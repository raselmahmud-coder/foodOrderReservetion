import React from "react";

const ProductShowcase = () => {
  return (
    <section className="lg:py-0 py-0">
      <h2
        style={{ fontFamily: "'Jelytta', sans-serif" }}
        className="lg:text-6xl text-4xl text-center my-10 text-gray-100">
        Wish you were here
      </h2>
      <h1 className="lg:text-5xl text-3xl p-2 max-w-4xl mx-auto text-center text-gray-100">
        Join us at African Soul Food for an unforgettable journey to the middle
        east.
      </h1>
      <p className="lg:text-2xl p-2 text-xl text-gray-100 max-w-5xl mx-auto text-center my-10">
        Translating to "heart, captured" in Farsi, African Soul Food is a love
        letter to the influential dishes that shaped Fares Kargar's youth and
        the women in his life who instilled his deep appreciation for Middle
        Eastern cooking.
      </p>
      <button className="btn hover:animate-bounce btn-ghost mx-auto flex underline text-gray-100 text-2xl">
        CLICK TO VIEW OUR MENU
      </button>
      <button className="lg:my-22 hover:animate-ping my-16 btn btn-outline mx-auto flex text-gray-100 btn-md lg:btn-lg btn-wide">
        ORDER ONLINE
      </button>
        <img
          src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/1681442227650-0FNK4C40AXC1NAJE3AER/Dill+Labneh+Labneh+Atlanta.jpg?format=2500w"
          alt=""
          className="rounded"
        />
        <div className="bg-[#504E4E] bg-opacity-50 lg:py-16 py-8 lg:max-w-3xl max-w-xl mx-auto rounded-xl relative lg:-top-[550px] -top-[250px]">
          <h1 className="lg:text-6xl text-2xl text-center text-gray-100 ">
            “VACATION ON A PLATE”
          </h1>
          <p className="text-center text-xl text-gray-100 mt-10">
            - THE ATLANTAN, EDITOR LAUREN FINNEY
          </p>
        </div>
    </section>
  );
};

export default ProductShowcase;
