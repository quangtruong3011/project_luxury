
import { useState } from "react";

function BookingForm() {
    const [bookingData, setBookingData] = useState({
        name: "",
        email: "",
        arrivalDate: "",
        departureDate: "",
        numOfGuests: 1,
        comments: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookingData);
    };

    return (
        <form className="w-full max-w-lg mx-auto py-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="arrivalDate"
                    >
                        Arrival Date
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="arrivalDate"
                        type="date"
                        name="arrivalDate"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="departureDate"
                    >
                        Departure Date
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="departureDate"
                        type="date"
                        name="departureDate"
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="numOfGuests">
                        Number of Guests
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="numOfGuests"
                        type="number"
                        name="numOfGuests"
                        min="1"
                        max="10"
                        onChange={handleInputChange}
                        required/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="comments">
                        Comments
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="comments"
                        name="comments"
                        placeholder="Anything else you'd like to tell us?"
                        onChange={handleInputChange}>
                        </textarea>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Book Now
                </button>
            </div>
        </form>
    );
}

export default BookingForm;