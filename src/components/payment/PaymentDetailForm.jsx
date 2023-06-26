import React from "react";
import "./PaymentDetailForm.css";

function PaymentDetailForm() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 bg-white font-[montserrat]">
        <section className="col-span-1 flex h-full flex-col items-center gap-8">
          <div className="dates w-2/3 bg-[#F1F1F1] py-4">
            <h4 className="text-center text-lg font-semibold">DATES</h4>
            <hr className="my-4 border-b-0 border-slate-300" />
            <ul className="flex flex-col gap-3 px-5">
              <li className="flex justify-between text-xs">
                <span>Check-In</span>
                <span className="font-bold">THU 06/03/2015</span>
              </li>
              <li className="flex justify-between text-xs">
                <span>Check-Out</span>
                <span className="font-semibold">SAT 06/06/2015</span>
              </li>
              <li className="flex justify-between text-xs">
                <span>Total Nights</span>
                <span className="font-semibold">2</span>
              </li>
              <li className="flex justify-between text-xs">
                <span>Total Rooms</span>
                <span className="font-semibold">2 OF 2</span>
              </li>
              <li className="flex justify-between text-xs">
                <span>Total Guests</span>
                <span className="font-semibold">4 ADULTS 1 CHILDREN</span>
              </li>
            </ul>
          </div>
          <div className="selectRooms w-2/3 bg-[#F1F1F1] py-4">
            <h4 className="text-center text-lg font-semibold">SELECT ROOMS</h4>
            <hr className="my-4 border-b-0 border-slate-300" />
            <ul className="flex flex-col gap-3 px-5">
              <li className="flex flex-row items-center gap-5 text-xs">
                <h5 className="text-sm font-semibold">ROOM 1</h5>
                <span className="text-xs">2 Adult, 1 Child</span>
              </li>
              <h4 className="text-lg font-semibold text-[#E1BD85]">
                LUXURY ROOM
              </h4>
              <hr className=" border-b-0 border-slate-300" />
              <h5 className="text-sm font-semibold">SPACE PRICE</h5>
              <li className="flex justify-between text-xs">
                <span>3 June 2023</span>
                <span className="font-bold">$250.00</span>
              </li>
              <li className="flex justify-between text-xs">
                <span>6 June 2023</span>
                <span className="font-bold">$320.00</span>
              </li>
              <hr className=" border-b-0 border-slate-300" />
              <li className="flex justify-between text-xs">
                <span>Service</span>
                <span className="font-bold">FREE</span>
              </li>
              <li className="flex justify-between text-xs">
                <span>Tax</span>
                <span className="font-bold">$320.00</span>
              </li>
              <hr className=" border-b-0 border-slate-300" />
              <li className="flex justify-between">
                <h5 className="text-sm font-semibold">TOTAL ROOM 1</h5>
                <h5 className="text-sm font-semibold text-[#E1BD85]">$470.00</h5>
              </li>
            </ul>
          </div>
        </section>

        <section className="billingDetails col-span-2 h-full">
          <h3 className="text-4xl font-semibold">BILLING DETAILS</h3>
        </section>
      </div>
    </div>
  );
}

export default PaymentDetailForm;
