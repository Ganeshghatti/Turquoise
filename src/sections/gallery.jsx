const Gallery = () => {
  return (
    <div className="my-10 flex px-20">
      <div className="flex flex-1 flex-col items-start justify-center space-y-4">
        <h1 className="text-semibold family-garamond text-[3rem] text-primary">
          Turquoise Concierge Tourism Management
        </h1>
        <p className="family-montserrat text-[1rem] font-normal text-black">
          Once a life time stay experiences, feeling home away from home by our
          personalized tailor-made services
        </p>
        <button className="family-montserrat mt-4 border border-secondary bg-secondary px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-secondary">
          Read More
        </button>
      </div>
      <div className="flex h-fit flex-1 space-x-5">
        <div className="mt-10 flex flex-col items-end space-y-4">
          <img
            src="/public/gal-1.png"
            className="h=[14.063rem] w-[15.688rem] object-cover"
          />
          <img
            src="/public/gal-2.png"
            className="h-[28.125rem] w-[18.813rem] object-cover"
          />
        </div>
        <div className="space-y-4">
          <img
            src="/public/gal-3.png"
            className="h-[25rem] w-[17.375rem] object-cover"
          />
          <img
            src="/public/gal-4.png"
            className="h-[11.875rem] w-[17.125rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
