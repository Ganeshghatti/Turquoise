const Header = () => {
  return (
    <div className="relative">
      <img
        src={"/header.png"}
        className="h-[40rem] w-full brightness-50"
      />
      <div className="absolute bottom-0 top-56 ml-8 w-[40rem] space-y-4">
        <h1 className="family-garamond my-auto pt-10 text-[4.5rem] font-bold text-white">
          Turquoise Concierge
        </h1>
        <p className="family-mplus text-[2rem] font-normal text-white">
          Indulge your stay with our tailor-made services
        </p>
      </div>
    </div>
  );
};

export default Header;
