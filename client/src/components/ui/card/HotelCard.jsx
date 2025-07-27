import { MapPinHouse } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import star from "../../../assets/starIconFilled.svg";

const HotelCard = ({ room }) => {
      return (
            <Link
                  to={"/room/" + room._id}
                  onClick={() => window.scrollTo(0, 0)}
                  key={room._id}
                  className="relative  w-full rounded-sm overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.33)]"
            >
                  <img
                        src={room.images[0]}
                        alt=""
                        
                  />
                  {room.isBestSeller && (
                        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
                              Best Seller
                        </p>
                  )}
                  <div className="p-4 pt-5">
                        <div className="flex items-center justify-between">
                              <p className="text-playfair text-xl font-medium text-gray-800">
                                    {room.hotel.name}
                              </p>
                              <div className="flex items-center gap-1">
                                    <img src={star} alt="Star" className="w-5 h-5" />
                                    <span>{room.rating}</span>
                              </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                              <MapPinHouse />
                              <span>{room.hotel.address}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                              <p>
                                    <span className="text-xl text-gray-800">
                                          {room.pricePerNight}
                                    </span>
                                    /night
                              </p>
                              <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
                                    Book Now
                              </button>
                        </div>
                  </div>
            </Link>
      );
};

export default HotelCard;
