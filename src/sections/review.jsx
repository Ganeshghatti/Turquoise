import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { Heading } from '../components';
// import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <div className="w-full py-24">
      <div className="mx-auto w-full md:w-4/5">
        <Heading title={"Testimonials"} className={"px-2 text-center"} />
        <ReviewCarousel />
      </div>
    </div>
  );
};

// function Card({link}) {
//   return (

//       <div className="h-[12rem] w-[49%] md:w-[24%]  flex flex-row items-center justify-center">
//           <img src={link} className=" w-full object-cover" />
//       </div>
//   );
// }




const reviews = [
  {
    name: "one",
    rating: 5,
    text: "Absolutely amazing product! Exceeded all my expectations.",
    avatar: "https://th.bing.com/th/id/OIP.d4jodMbHi3Yd9r-9EC5e-QHaFP?rs=1&pid=ImgDetMain"
  },
  {
    name: "two",
    rating: 4,
    text: "Great quality and excellent customer service. Highly recommend!",
    avatar: "https://th.bing.com/th/id/OIP.d4jodMbHi3Yd9r-9EC5e-QHaFP?rs=1&pid=ImgDetMain"
  },
  {
    name: "three",
    rating: 5,
    text: "Life-changing product that solves exactly what I needed.",
    avatar: "https://th.bing.com/th/id/OIP.d4jodMbHi3Yd9r-9EC5e-QHaFP?rs=1&pid=ImgDetMain"
  },
  {
    name: "four",
    rating: 5,
    text: "Absolutely amazing product! Exceeded all my expectations.",
    avatar: "https://th.bing.com/th/id/OIP.d4jodMbHi3Yd9r-9EC5e-QHaFP?rs=1&pid=ImgDetMain"
  },
  {
    name: "five",
    rating: 5,
    text: "Absolutely amazing product! Exceeded all my expectations.",
    avatar: "https://th.bing.com/th/id/OIP.d4jodMbHi3Yd9r-9EC5e-QHaFP?rs=1&pid=ImgDetMain"
  }

];

const ReviewCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
      align: 'start'
    },
    [Autoplay({ delay: 3000 })]
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>&#9733;</span>
    ));
  };

  return (
    <div className="embla overflow-hidden py-14" ref={emblaRef}>
      <div className="embla__container flex  ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="embla__slide flex-grow-0 flex-shrink-0 w-[calc(100%/3)] min-w-[300px] md:max-w-[calc(100%/2-12px)] lg:max-w-[calc(100%/3-12px)] ml-4 px-2 md:px-0"
          >
            <div
              className="w-full p-8 border border-gray-100 rounded-3xl bg-[#f5ffff]    ">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">{review.name}</h6>
                  <p className="text-sm text-gray-500 ">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8 line-clamp-[7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Reviews;
