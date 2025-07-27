import React from 'react';
import Title from '../ui/Title';
import TestimonialCard from '../ui/card/TestimonialCard';
import { testimonials } from '../../data/testimonials';


const Testimonial = () => {
      return (
            <section className="p-30 bg-gray-50 ">
                  <Title
                        title="What Our Guests Say"
                        subtitle="Discover why discerning travelers consistently choose Trazler for their exclusive and luxurious accommodations around the world."
                        align="center"
                        font="font-playfair"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full items-center justify-items-center">
                        {
                              testimonials.map((testimonial) => (
                                    <TestimonialCard
                                          key={testimonial.id}
                                          name={testimonial.name}
                                          address={testimonial.address}
                                          image={testimonial.image}
                                          rating={testimonial.rating}
                                          review={testimonial.review}
                                    />
                              ))
                        }
                  </div>
            </section>
      );
};

export default Testimonial;
