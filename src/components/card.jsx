// eslint-disable-next-line react/prop-types
const Card = ({ title, desc, link, image }) => {
  return (
    <div className="relative my-2 lg:w-[31%]">
      <img src={image} className="h-[32rem] w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 flex h-full w-full items-end bg-black/40 p-5">
        <div className="flex h-auto flex-col justify-start space-y-3">
          <div>
            <h1 className="family-montserrat text-[1.5rem] font-semibold text-white">
              {title}
            </h1>
            <p className="family-montserrat text-[0.875rem] font-semibold text-white">
              {desc}
            </p>
          </div>
          <div className="h-fits flex items-end">
            <a
              className="famiy-montserrat flex items-center gap-2 text-[0.875rem] font-semibold uppercase text-white"
              href={link}
            >
              Learn More{" "}
              <svg
                width="19"
                height="8"
                viewBox="0 0 19 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2984 4.35355C18.4937 4.15829 18.4937 3.84171 18.2984 3.64645L15.1164 0.464466C14.9212 0.269204 14.6046 0.269204 14.4093 0.464466C14.2141 0.659728 14.2141 0.976311 14.4093 1.17157L17.2378 4L14.4093 6.82843C14.2141 7.02369 14.2141 7.34027 14.4093 7.53553C14.6046 7.7308 14.9212 7.7308 15.1164 7.53553L18.2984 4.35355ZM0.525024 4.5H17.9449V3.5H0.525024V4.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
