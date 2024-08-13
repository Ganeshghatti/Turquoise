const Header = () => {
  return (
    <div className="relative">
      <img
<<<<<<< HEAD
        src={"../../public/header.png"}
        className="h-[40rem] w-full object-cover brightness-50 lg:h-[100vh]"
=======
        src={"/header.png"}
        className="h-[40rem] w-full brightness-50"
>>>>>>> 4e90a4916fa5071e71db4f539bfc50cf1e604727
      />
      <div className="md:item-start absolute bottom-0 top-0 mx-auto flex h-full flex-col justify-center space-y-4 px-5 md:left-20">
        <h1 className="family-garamond pt-10 text-center text-[4rem] font-bold text-white md:text-left md:text-[4.5rem]">
          Turquoise Concierge
        </h1>
        <div className="progress-bar h-[2px] w-full bg-white">
          <div className="progress-fill -mt-1 h-[4px] w-[50%] bg-white" />
        </div>
        <p className="family-mplus pt-10 text-center text-[1.4rem] font-normal text-white md:pt-0 md:text-left md:text-[2rem]">
          Indulge your stay with our tailor-made services
        </p>
      </div>
    </div>
  );
};

export default Header;
