import React from "react";
import roomData from "./roomData.json";

const RoomList = () => {
  // Lặp qua dữ liệu phòng và tạo mã HTML cho mỗi phòng
  const roomElements = roomData.map((room) => (
    <div className="col-span-1" key={room.id}>
      <div className="img">
        <a href="#">
          <img src={room.imgUrl} alt={room.name} />
        </a>
      </div>
      <div className="text">
        <h2>{room.name}</h2>
        <p>
          <span>${room.price}</span>
          /ngày
        </p>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-3 grid-rows-2">
      {roomElements}
    </div>
  )
};

export default RoomList;
