import React from "react";
import Title from "../ui/Title";
import { MoveRight } from "lucide-react";
import OfferCard from "../ui/card/OfferCard";
import { exclusiveOffers } from "../../data/exclusiveOffers";

const Offers = () => {
      return (
            <div className="flex flex-col w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-10 md:py-20 mb-15">
                  <div className="flex justify-between items-center ">
                        <Title
                              title="Exclusive Offers"
                              subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
                              align="left"
                              font="font-playfair"
                        />
                        <div className=" flex justify-center items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-800 transition-all">
                              <span>View All Offers</span>
                              <MoveRight />
                        </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full items-center justify-items-center ">
                              {
                                    exclusiveOffers.map((offer)=>(
                                          <OfferCard offer={offer} key={offer._id} />
                                    ))
                              }
                        </div>

            </div>
      );
};

export default Offers;
