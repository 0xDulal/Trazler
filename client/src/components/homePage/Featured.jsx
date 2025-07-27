import React from "react";
import HotelCard from "../ui/card/HotelCard";
import { roomsDummyData } from "../../data/roomsDummyData";
import Title from "../ui/Title";
import { useNavigate } from "react-router-dom";

const Featured = () => {
      const navigate = useNavigate();
      return (
            <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-100 py-10 md:py-20">
                  <Title
                        title="Featured Destinations"
                        subtitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
                        align="center"
                        font="font-playfair"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 w-full items-center justify-items-center">
                        {roomsDummyData.slice(0, 4).map((room, index) => (
                              <HotelCard
                                    room={room}
                                    index={index}
                                    key={room._id}
                              />
                        ))}
                  </div>
                  <button
                  onClick={() => navigate("/rooms")}
                   className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer mb-10 mt-20">
                                    View All Destinations
                              </button>
            </div>
      );
};

export default Featured;
