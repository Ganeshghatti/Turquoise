const ConsultGallery = () => {
  return (
    <div className="my-10 flex h-fit justify-center space-x-5 px-5 md:mx-20">
      <div className="space-y-2">
        <img
          src="/consult-1.png"
          className="w-[22.4rem] object-cover md:h-[18.875rem]"
        />
        <img
          src="/card-2.png"
          className="h-[16.813rem] w-[22.4rem] object-cover"
        />
      </div>
      <div className="hidden md:block">
        <img
          src="/consult-3.png"
          className="h-[39.688rem] w-[23.625rem] object-cover"
        />
      </div>
      <div className="hidden space-y-4 md:block">
        <img
          src="/consult-4.png"
          className="h-[18.875rem] w-[26.938rem] object-cover"
        />
        <img
          src="/consult-5.png"
          className="h-[32.5rem] w-[26.938rem] object-cover"
        />
      </div>
    </div>
  );
};

export default ConsultGallery;
