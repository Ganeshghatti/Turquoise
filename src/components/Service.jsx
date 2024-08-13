const Service = () => {
  return (
    <div className="container mx-auto my-10 flex flex-wrap items-center">
      <div className="w-full lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1502700559166-5792585222ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col items-start gap-10 lg:w-1/2">
        <h1 className="text-3xl font-bold lg:text-4xl">Travel Design</h1>
        <p>
          Welcome to our world of luxury tailor-made travel. Our dedicated
          global network of travel specialistsx unearth the most amazing
          destinations and curate bespoke travel experiences. From luxury hotels
          to the finest resorts, private islands, and alpine retreats, we plan
          and curate one-of-a-kind holidays, tailored to personal desires.
        </p>
        <p>
          Our dedicated travel specialists have journeyed across the globe to
          personally experience the world’s best destinations and travel
          experiences. From luxury beach resorts and alpine retreats to country
          houses, desert safaris and treetop escapes, they are experts at
          creating bespoke travel packages for romantic getaways, special
          reunions, and honeymoons our customers will treasure forever.
        </p>
        <button className="bg-[#1A5830] px-6 py-2 text-white">
          BOOK CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Service;
