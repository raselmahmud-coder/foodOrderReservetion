import React from "react";

const PrivateEventDining = () => {
  return (
    <>
      <section className="py-12">
        <h1 className="text-7xl text-center text-gray-100">
          Private Event
        </h1>
        <h2 className="lg:text-5xl text-3xl text-center text-gray-100 uppercase pt-12">
          LET US HOST YOUR NEXT EVENT
        </h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-2 items-center p-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/8473ba96-7552-4071-93c5-61cf1074310b/kookoo+sabzi.jpg?format=1000w"
            alt=""
            className="w-full lg:h-[75%]"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/8473ba96-7552-4071-93c5-61cf1074310b/kookoo+sabzi.jpg?format=1000w"
            alt=""
            className="w-full lg:h-[75%]"
          />
        </div>
        <h1 className="text-7xl text-center text-gray-100 pt-12">
          Private Dining
        </h1>
        <div className="flex gap-16 justify-center my-16">
          <button className="btn btn-primary lg:btn-lg">SET MENUS</button>
          <button className="btn btn-primary lg:btn-lg">ROOM MINIMUMS</button>
        </div>
        <p className="text-xl text-center text-gray-100 lg:w-[50%] w-[80%] pt-12 mx-auto">
          For more information about a private dinner or group event at African
          Soul Food, please click on “Book An Event” and fill out the inquiry
          form.
        </p>
        <div className="flex gap-16 justify-center my-16">
          <button className="btn btn-outline outline border-gray-100 text-gray-100 lg:btn-lg">
            BOOK AN EVENT
          </button>
        </div>
        <div className="my-12">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/255cb487-74e4-43c6-b825-09f642962fc5/middle-eastern-catering-cuisine.jpg?format=2500w"
            alt=""
            className="w-full px-2"
          />
        </div>
      </section>
    </>
  );
};

export default PrivateEventDining;
