import React from "react";
import "./PaymentDetailForm.css";

function PaymentDetailForm() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 font-[montserrat]">
        <section className="col-span-2 flex flex-col items-center">
          <div className="dates flex flex-col items-center">
            <h4 className="text-xl font-semibold">Dates</h4>
            <hr className="my-2 border-gray-400"/>
            <ul className="flex flex-col justify-between">
              <li className="text-xs flex justify-between">
                <span>Check-In</span>
                <span className="font-semibold text-right">THU 06/03/2015</span>
              </li>
              <li className="text-xs flex justify-between">
                <span>Check-Out</span>
                <span className="font-semibold text-right">SAT 06/06/2015</span>
              </li>
              <li className="text-xs flex justify-between">
                <span>Total Nights</span>
                <span className="font-semibold">2</span>
              </li>
              <li className="text-xs flex justify-between">
                <span>Total Rooms</span>
                <span className="font-semibold">2 OF 2</span>
              </li>
              <li className="text-xs flex justify-between">
                <span>Total Guests</span>
                <span className="font-semibold">4 ADULTS 1 CHILDREN</span>
              </li>
            </ul>
          </div>
          <div className="selectRooms text-2xl font-semibold">
            <h4>Select rooms</h4>
          </div>
        </section>

        <section className="billingDetails text-4xl col-span-4 font-semibold">
          <h3>Billing details</h3>
        </section>
      </div>
    </div>
  );
}

export default PaymentDetailForm;
