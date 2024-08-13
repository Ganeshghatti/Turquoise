// eslint-disable-next-line react/prop-types
const Heading = ({ title, className }) => {
  return (
    <div>
      <h1
        className={`family-montserrat text-center text-[2.5rem] font-medium text-primary md:text-[3rem] ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
