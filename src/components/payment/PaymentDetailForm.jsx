import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./PaymentDetailForm.css";
import "./BillDetailTitles";
import BillDetailTitles from "./BillDetailTitles";

function PaymentDetailForm() {
  //handle country selection
  const countries = ["Viet Nam", "USA", "Canada", "UK", "Japan", "China"];
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setFormData({
      ...formData,
      country: event.target.value,
    });
  };

  //handle all input change
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    apartment: "",
    townCity: "",
    country: "",
    email: "",
    phone: "",
    orderNotes: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //handle submit
  const handleSubmit = (event) => {
    //prevent reload
    event.preventDefault();
    //save form data to JSON file
    saveFormDataToJson(formData);
    //clear form inputs after submit
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      street: "",
      apartment: "",
      townCity: "",
      country: "",
      email: "",
      phone: "",
      orderNotes: "",
    });
  };

  //save form data to JSON
  const saveFormDataToJson = () => {
    const buyers = JSON.parse(localStorage.getItem("buyers")) || [];
    buyers.push(formData);
    localStorage.setItem("buyers", JSON.stringify(buyers));
  };

  return (
    <div className="flex flex-col items-center bg-white pb-16 pt-8">
      <div className="grid w-2/3 grid-cols-3 font-[hind]">
        <section className="roomBill col-span-1 flex h-full flex-col items-center">
          <div className="dates mb-7 w-2/3 bg-[#F1F1F1] py-4">
            <h3 className="text-center font-[montserrat] text-lg font-semibold">
              DATES
            </h3>
            <hr className="my-4 border-b-0 border-slate-300" />
            <ul className="flex flex-col gap-3 px-5">
              <li className="flex justify-between text-xs">
                <span>Check-In</span>
                <span className="font-semibold">THU 06/03/2015</span>
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
            <h3 className="text-center font-[montserrat] text-lg font-semibold">
              SELECTED ROOMS
            </h3>
            <hr className="my-4 border-b-0 border-slate-300" />
            <ul className="flex flex-col gap-3 px-5">
              <li className="flex flex-row items-center gap-5 text-sm">
                <h5 className="font-[montserrat] text-sm font-semibold">
                  ROOM 1
                </h5>
                <span>2 Adult, 1 Child</span>
              </li>
              <h4 className="font-[montserrat] font-semibold text-[#E1BD85]">
                LUXURY ROOM
              </h4>
              <hr className=" border-b-0 border-slate-300" />
              <h5 className="font-[montserrat] text-sm font-semibold">
                SPACE PRICE
              </h5>
              <li className="flex justify-between text-sm">
                <span>3 June 2023</span>
                <span className="font-semibold">$250.00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>6 June 2023</span>
                <span className="font-semibold">$320.00</span>
              </li>
              <hr className=" border-b-0 border-slate-300" />
              <li className="flex justify-between text-sm">
                <span>Service</span>
                <span className="font-semibold">FREE</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Tax</span>
                <span className="font-semibold">$320.00</span>
              </li>
              <hr className=" border-b-0 border-slate-300" />
              <li className="flex justify-between">
                <h5 className="font-[montserrat] text-sm font-semibold">
                  TOTAL ROOM 1
                </h5>
                <h5 className="font-[montserrat] text-sm font-semibold text-[#E1BD85]">
                  $570.00
                </h5>
              </li>
            </ul>
          </div>
          <div className="totalCost my-0 flex w-2/3 justify-between bg-[#E1BD85] px-5 py-4">
            <h4 className="font-[montserrat] font-bold text-white">TOTAL</h4>
            <h4 className="font-[montserrat] font-bold text-white">$570.00</h4>
          </div>
        </section>

        <section
          className="billingDetails col-span-2 h-full w-2/3"
          onSubmit={handleSubmit}
        >
          <span className="text-sm text-gray-400">
            Returning customer?{" "}
            {
              <Link to="/login" className="text-black">
                Click here to login
              </Link>
            }
          </span>
          <h1 className="my-6 font-[montserrat] text-4xl font-semibold">
            BILLING DETAILS
          </h1>
          <div>
            <BillDetailTitles title="COUNTRY" mustFill={true}>
              <select
                className="w-full focus:outline-none"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </BillDetailTitles>
            <div className="grid grid-cols-2 gap-7">
              <BillDetailTitles title="FIRST NAME" mustFill={true}>
                <input
                  type="text"
                  className="w-full"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </BillDetailTitles>
              <BillDetailTitles title="LAST NAME" mustFill={true}>
                <input
                  type="text"
                  className="w-full"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </BillDetailTitles>
            </div>
            <BillDetailTitles title="COMPANY NAME">
              <input
                type="text"
                className="w-full"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </BillDetailTitles>
            <BillDetailTitles title="ADDRESS" mustFill={true}>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
            </BillDetailTitles>
            <BillDetailTitles>
              <input
                type="text"
                placeholder="Apartment, suite, unit etc. (Optional)"
                className="w-full"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
              />
            </BillDetailTitles>
            <div className="grid grid-cols-2 gap-7">
              <BillDetailTitles title="TOWN / CITY" mustFill={true}>
                <input
                  type="text"
                  className="w-full"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleChange}
                />
              </BillDetailTitles>
              <BillDetailTitles title="COUNTRY" mustFill={true}>
                <input
                  type="text"
                  className="w-full"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </BillDetailTitles>
            </div>
            <div className="grid grid-cols-2 gap-7">
              <BillDetailTitles title="EMAIL ADDRESS" mustFill={true}>
                <input
                  type="email"
                  className="w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </BillDetailTitles>
              <BillDetailTitles title="PHONE" mustFill={true}>
                <input
                  type="text"
                  className="w-full"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </BillDetailTitles>
            </div>
            <BillDetailTitles title="ORDER NOTES">
              <div className="grid grid-cols-1 grid-rows-6">
                <input
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className="w-full"
                  type="text"
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleChange}
                />
              </div>
            </BillDetailTitles>
          </div>
          <button
            className="placeOrderBtn my-4 w-44 border-2 border-[#e1bd85] bg-[#e1bd85] py-2.5 font-[montserrat] text-sm font-semibold text-white hover:bg-white hover:text-[#e1bd85]"
            onClick={handleSubmit}
            disabled={
              !formData.firstName ||
              !formData.lastName ||
              !formData.street ||
              !formData.country ||
              !formData.email ||
              !formData.phone
            }
          >
            PLACE ORDER
          </button>
        </section>
      </div>
    </div>
  );
}

export default PaymentDetailForm;
