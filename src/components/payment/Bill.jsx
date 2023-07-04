import React from "react";
import { Link } from "react-router-dom";

function Bill() {
  return (
    <div className="roomBill w-full flex flex-col items-center">
      <div className="w-1/3 bg-[#F1F1F1] py-4">
        <h3 className="text-center font-[montserrat] text-lg font-semibold">
          RESERVATION RECEIPT
        </h3>
        <hr className="my-4 border-b-0 border-slate-300" />

        <ul className="flex flex-col gap-3 px-5">
          <li className="flex flex-row items-center gap-5 text-sm">
            <h5 className="font-[montserrat] text-sm font-semibold">
              ROOM FOR
            </h5>
            <span>
              {"number of"} Adult, {"number of"} Child
            </span>
          </li>
          <hr className=" border-b-0 border-slate-300" />
          <>
            <h5 className="font-[montserrat] text-sm font-semibold">DATES</h5>
            <li className="flex justify-between text-sm">
              <span>Arrive date</span>
              <span className="font-semibold">6 June 2023</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Depart date</span>
              <span className="font-semibold">6 June 2023</span>
            </li>
          </>
          <>
            <hr className=" border-b-0 border-slate-300" />
            <h5 className="font-[montserrat] text-sm font-semibold">
              CUSTOMER'S DETAILS
            </h5>
            <li className="flex justify-between text-sm">
              <span>Customer's name</span>
              <span className="font-semibold">{"name here"}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Company name</span>
              <span className="font-semibold">{"company here"}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Address</span>
              <span className="font-semibold">{"address here"}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Email</span>
              <span className="font-semibold">{"email here"}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Phone</span>
              <span className="font-semibold">{"phone here"}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Order notes</span>
              <span className="font-semibold">{"notes here"}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Payment method</span>
              <span className="font-semibold">{"method here"}</span>
            </li>
          </>
        </ul>
      </div>
      <div className="totalCost my-0 flex w-1/3 justify-between bg-[#E1BD85] px-5 py-4">
        <h4 className="font-[montserrat] font-bold text-white">TOTAL PAID</h4>
        <h4 className="font-[montserrat] font-bold text-white">
          ${320 + 320 * 0.1}.00
        </h4>
      </div>
      <Link
        to="/"
        className="backHomeBtn my-0 w-1/3 border-2 border-black bg-black px-5 py-3.5 text-center font-[montserrat] font-bold text-white hover:bg-white hover:text-black"
        style={{ transition: "color 0.3s ease" }}
      >
        RETURN TO HOME
      </Link>
    </div>
  );
}

export default Bill;
