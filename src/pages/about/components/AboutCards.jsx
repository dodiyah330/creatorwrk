/* eslint-disable react/prop-types */

const AboutCards = ({ cardContent }) => {
  return (
    <>
      {cardContent?.map((item, index) => (
        <div className="grid grid-cols-12 gap-4" key={index}>
          <div className="content flex flex-col justify-center items-start col-span-12 md:col-span-6 max-w-sm gap-3 order-2 md:order-none">
            <span className="bg-gradient-to-br text-transparent bg-clip-text from-teal-400 to-pink-500 font-semibold">
              {item.title}
            </span>
            <h4 className="font-bold text-3xl text-start">{item.heading}</h4>
            <span className="text-start text-gray-600">{item.description}</span>
          </div>
          <div className="image image col-span-12 md:col-span-6 order-1 md:order-none">
            <img src={item.img} alt="About Us" />
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCards;
