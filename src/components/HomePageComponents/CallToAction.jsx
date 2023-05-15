import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      <h1 className="text-5xl text-gray-100 text-center">
        Celebrate your special occasion at African Soul Food
      </h1>
      <h2 className="text-4xl text-gray-100 text-center my-12">
        For Reservations:{" "}
        <a
          className="text-red-500 border-b-2 border-red-500"
          href="tel:+19383672094">
          +19383672094
        </a>{" "}
        or{" "}
        <Link className="text-red-500 border-b-2 border-red-500" to={"/"}>
          Order Online
        </Link>
      </h2>
      <h1
        style={{ fontFamily: "'Jelytta', sans-serif" }}
        className="text-6xl font-bold text-center text-gray-100">
        Location
      </h1>
      <p className="text-2xl text-center text-gray-100 my-8">
        870 inman village pkwy
        <br />
        Atlanta, GA 30307
      </p>
      <div className="grid lg:grid-cols-3 gap-3 items-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/c5a4a396-0b85-4f33-9e78-a08d54f53f98/mamoni.png?format=300w"
          alt=""
          className="w-full justify-center"
        />
        <div>
          <div className="my-5">
            <h1
              style={{ fontFamily: "'Jelytta', sans-serif" }}
              className="text-6xl font-bold text-center text-gray-100">
              Parking:
            </h1>
            <p className="text-xl text-center text-gray-100 my-8">
              Our community parking deck is located at
              <br />
              100 Montag cir, atlanta, ga 30307
            </p>
          </div>
          <div className="my-16">
            <h1
              style={{ fontFamily: "'Jelytta', sans-serif" }}
              className="text-6xl font-bold text-center text-gray-100">
              Brunch:
            </h1>
            <p className="text-xl text-center text-gray-100 my-8">
              Saturday & Sunday: 11:00 AM - 2:30 PM
              <br />
              <span className="text-xs">
                Our kitchen closes at 3:00 PM for transition to dinner
              </span>
            </p>
          </div>
          <div className="my-5">
            <h1
              style={{ fontFamily: "'Jelytta', sans-serif" }}
              className="text-6xl font-bold text-center text-gray-100">
              Dinner:
            </h1>
            <p className="text-xl text-center text-gray-100 my-8">
              Monday - Thursday 4:00 PM- 10:00 PM
              <br />
              Friday & Saturday 4:00 PM - 11:00 PM
              <br />
              Sunday 4:00 PM - 9:00 PM
            </p>
          </div>
        </div>

        <img
          src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/97e6ee7e-c17d-4a4f-a4bd-ef65240d9a78/tas4.png?format=500w"
          alt=""
          className="w-full justify-center"
        />
      </div>
    </>
  );
};

export default CallToAction;