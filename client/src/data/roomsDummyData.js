import roomImg1 from "../assets/img/hotel/roomImg1.png";
import roomImg2 from "../assets/img/hotel/roomImg2.png";
import roomImg3 from "../assets/img/hotel/roomImg3.png";
import roomImg4 from "../assets/img/hotel/roomImg4.png";
import { hotelDummyData } from "./hotelDummyData";

export const roomsDummyData = [
      {
            _id: "67f7647c197ac559e4089b96",
            hotel: hotelDummyData,
            roomType: "Double Bed",
            pricePerNight: 399,
            amenities: ["Room Service", "Mountain View", "Pool Access"],
            images: [roomImg1, roomImg2, roomImg3, roomImg4],
            isAvailable: true,
            isBestSeller: true,
            rating: 4.8,
            createdAt: "2025-04-10T06:26:04.013Z",
            updatedAt: "2025-04-10T06:26:04.013Z",
            __v: 0,
      },
      {
            _id: "67f76452197ac559e4089b8e",
            hotel: hotelDummyData,
            roomType: "Double Bed",
            pricePerNight: 299,
            amenities: ["Room Service", "Mountain View", "Pool Access"],
            images: [roomImg2, roomImg3, roomImg4, roomImg1],
            isAvailable: true,
            isBestSeller: false,
            rating: 4.5,
            createdAt: "2025-04-10T06:25:22.593Z",
            updatedAt: "2025-04-10T06:25:22.593Z",
            __v: 0,
      },
      {
            _id: "67f76406197ac559e4089b82",
            hotel: hotelDummyData,
            roomType: "Double Bed",
            pricePerNight: 249,
            amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
            images: [roomImg3, roomImg4, roomImg1, roomImg2],
            isAvailable: true,
            isBestSeller: false,
            rating: 4.5,
            createdAt: "2025-04-10T06:24:06.285Z",
            updatedAt: "2025-04-10T06:24:06.285Z",
            __v: 0,
      },
      {
            _id: "67f763d8197ac559e4089b7a",
            hotel: hotelDummyData,
            roomType: "Single Bed",
            pricePerNight: 199,
            amenities: ["Free WiFi", "Room Service", "Pool Access"],
            images: [roomImg4, roomImg1, roomImg2, roomImg3],
            isAvailable: true,
            isBestSeller: true,
            rating: 4.9,
            createdAt: "2025-04-10T06:23:20.252Z",
            updatedAt: "2025-04-10T06:23:20.252Z",
            __v: 0,
      },
];
