import React from "react";
import { MoveRight } from "lucide-react";

const OfferCard = ({offer}) => {
      return (
                  <div
                        className="relative bg-no-repeat bg-cover bg-center w-full rounded-3xl shadow-lg flex flex-col  p-4 text-white h-70 justify-end"
                        style={{
                              backgroundImage: `url(${offer.image})`,
                        }}
                  >
                        <p className="px-3 py-1 absolute top-4 left-4 text-sm bg-white text-gray-800 font-medium rounded-full">
                              {offer.priceOff}% OFF
                        </p>
                        <h3 className="text-xl font-semibold font-playfair">
                              {offer.title}
                        </h3>
                        <p className="text-sm mt-1">
                              {offer.description}
                        </p>
                        <p className="text-xs mt-2 text-gray-300">
                              Expires on: {offer.expiryDate}
                        </p>
                        <div className=" flex justify-start items-center gap-2 cursor-pointer hover:text-gray-200 hover:gap-5 transition-all text-sm mt-10 mb-2">
                              <span>View All Offers</span>
                              <MoveRight />
                        </div>
                  </div>
      );
};

export default OfferCard;
