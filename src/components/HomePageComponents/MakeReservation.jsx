import React from "react";

const MakeReservation = () => {
  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/303d6de6-a07c-4f7a-9de3-744057968861/Atlanta-middle-eastern-cuisine.jpg?format=750w"
          alt=""
          className="rounded-md"
        />
        <h2
          style={{ fontFamily: "'Jelytta', sans-serif" }}
          className="text-6xl font-bold text-center text-gray-100">
          A crossroad of flavors and cultures.
        </h2>
      </div>

      <div className="grid grid-cols-2 items-center my-28">
        <div>
          <p className="text-xl lg:mr-9 text-gray-100">
            Centuries of talented cooks and exceptional palettes have played a
            role in forming what we recognize today as Middle Eastern cuisine.
            <br />
            <br />
            When you enter our African Soul Food we want you to feel like you
            have met new friends - a new family - who will guide you through our
            region's most memorable offerings, we hope to transport you to
            country sides of Iran, where we all sit around the table and wait to
            be blown away by our mothers and grandmothers cooking while enjoying
            the company of our favorite people.
          </p>
          <button className="btn text-gray-100 btn-lg mt-8">MAKE A RESERVATION</button>
        </div>
        <div className="flex">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/53005c28-587d-4557-991f-cd73e417a241/Middle+Eastern+Seabass+vegetables.png?format=500w"
            alt=""
            className="rounded-md lg:ml max-w-sm max-h-96"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/6813ac3c-42e8-4480-adcc-20887753dba4/middle-eastern-kookoo-sabzi+-atlanta+copy.png?format=500w"
            alt=""
            className="rounded-md lg:ml max-w-sm max-h-96"
          />
        </div>
      </div>
    </>
  );
};

export default MakeReservation;
