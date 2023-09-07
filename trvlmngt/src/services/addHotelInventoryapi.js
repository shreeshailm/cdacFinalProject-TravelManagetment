import axios from "axios";
import { createUrl, log } from "../utils/utils";

export async function addHotelInventoryapi(availableRoom, roomPrice, date) {
  const url = createUrl('/hotelInventory');
  const hotelId = sessionStorage.getItem('hotelId');

  if (!hotelId) {
    console.error('hotelId not found in sessionStorage');
    return null;
  }

  const body = {

    availableRoom: availableRoom,
    roomPrice: roomPrice,
    hotel: {
      hotelId: parseInt(hotelId),
    },
    date: date,
  };

  try {
    const response = await axios.post(url, body);
    log(response.data);
    return response.data;
  } catch (ex) {
    console.error(ex);
    return null;
  }
}
