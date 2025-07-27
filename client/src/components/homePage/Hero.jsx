import {
      CalendarArrowDown,
      CalendarArrowUp,
      MapPinHouse,
      Users,
} from "lucide-react";
import React from "react";
import {cities} from "../../data/City";

const Hero = () => {
      return ( 
            <div className='bg-[url("/src/assets/img/HeroImage.jpg")] bg-cover bg-center'>
                  <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white font-outfit h-screen w-screen bg-black/50">
                        <p className="bg-[#49b9ff]/50 px-3.5 py-1 rounded-full mt-20 text-xl">
                              The Ultimate Hotel Experiance
                        </p>
                        <h1 className="text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4 font-playfair">
                              Discover Your Perfect Getway Destination
                        </h1>
                        <p className="text-sm md:text-base mt-2 max-w-130">
                              Unparalleled luxury and comfort await at the
                              world's most exclusive hotels and resorts. Start
                              your journey today.
                        </p>
                        <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-10 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
                              <div>
                                    <div className="flex items-center gap-2">
                                          <MapPinHouse height={16}/>
                                          <label htmlFor="destinationInput">
                                                Destination
                                          </label>
                                    </div>
                                    <input
                                          list="destinations"
                                          id="destinationInput"
                                          type="text"
                                          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                                          placeholder="Type here"
                                          required
                                    />
                                    <datalist id="destinations">
                                          {cities.map((city, index) => (
                                                <option
                                                      key={index}
                                                      value={city}
                                                />
                                          ))}
                                    </datalist>
                              </div>

                              <div>
                                    <div className="flex items-center gap-2">
                                          <CalendarArrowUp height={16}/>
                                          <label htmlFor="checkIn">
                                                Check in
                                          </label>
                                    </div>
                                    <input
                                          id="checkIn"
                                          type="date"
                                          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                                    />
                              </div>

                              <div>
                                    <div className="flex items-center gap-2">
                                          <CalendarArrowDown height={16}/>
                                          <label htmlFor="checkOut">
                                                Check out
                                          </label>
                                    </div>
                                    <input
                                          id="checkOut"
                                          type="date"
                                          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                                    />
                              </div>

                              <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
                                    <div className="flex items-center gap-2">
                                          <Users height={16}/>
                                          <label htmlFor="guests">Guests</label>
                                    </div>
                                    <input
                                          min={1}
                                          max={4}
                                          id="guests"
                                          type="number"
                                          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
                                          placeholder="0"
                                    />
                              </div>

                              <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
                                    <svg
                                          className="w-4 h-4 text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                    >
                                          <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                          />
                                    </svg>
                                    <span>Search</span>
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default Hero;
