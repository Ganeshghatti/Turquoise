// eslint-disable-next-line react/prop-types
const Heading = ({ title, className }) => {
  return (
    <div>
      <h1
        className={`text-primary family-montserrat text-[3rem] font-medium ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
