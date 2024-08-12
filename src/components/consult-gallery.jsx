const ConsultGallery = () => {
  return (
    <div className="mx-20 my-10 flex h-fit justify-center space-x-5">
      <div className="space-y-2">
        <img
          src="/public/consult-1.png"
          className="h-[18.875rem] w-[22.4rem] object-cover"
        />
        <img
          src="/public/card-2.png"
          className="h-[16.813rem] w-[22.4rem] object-cover"
        />
      </div>
      <div className="">
        <img
          src="/public/consult-3.png"
          className="h-[39.688rem] w-[23.625rem] object-cover"
        />
      </div>
      <div className="space-y-4">
        <img
          src="/public/consult-4.png"
          className="h-[18.875rem] w-[26.938rem] object-cover"
        />
        <img
          src="/public/consult-5.png"
          className="h-[32.5rem] w-[26.938rem] object-cover"
        />
      </div>
    </div>
  );
};

export default ConsultGallery;
