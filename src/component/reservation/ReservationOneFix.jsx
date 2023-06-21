import { useState } from "react";
function BookingForm() {
    const [bookingData, setBookingData] = useState({
        arrivalDate: "",
        departureDate: "",
        numOfGuests: "",
    })
    return (
        <main>
            <section>
                <div className="container">
                    <div className="text text-center">
                        <h2 className="uppercase">reservation</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <form>
                        <div>
                            <div>
                                <label className="uppercase">arrival</label>
                                <input
                                    className=""
                                    id="arrivalDate"
                                    type="date"
                                    name="arrivalDate"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="uppercase">departure</label>
                                <input
                                    className=""
                                    id="departureDate"
                                    type="date"
                                    name="departureDate"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="uppercase">rooms</label>
                            </div>
                            <button className=""></button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}