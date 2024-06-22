import AboutCards from "./components/AboutCards";
import why_choose_us from "../../assets/images/why-choose_us.png";
import about_img from "../../assets/images/about_img.png";

export const About = () => {
  const cardContent = [
    {
      title: "About Us",
      heading:
        "The Ultimate Hub Where Business Owners And Influencers Meet Together",
      description:
        "Welcome to CREATORWRK, where the worlds of business and influence converge. Our platform offers a seamless space for business owners to post job opportunities and for influencers to engage directly with these opportunities",
      img: about_img,
    },
    {
      title: "Why choose us?",
      heading: "CreatorWRK Because we're more than just a platform",
      description: `We're a catalyst for meaningful connections and collaborations. With a user-friendly interface and a commitment to fostering genuine interactions, we empower business owners and influencers alike to thrive in a dynamic marketplace`,
      img: why_choose_us,
    },
  ];
  return (
    <>
      <div className="flex justify-center p-10">
        <div className="max-w-screen-md">
          <h2 className="font-normal text-4xl">About Us</h2>
          <span className="text-gray-600 font-normal text-lg sm:block hidden">
            Welcome to [Your Website Name], the ultimate platform connecting
            influencers and brands! Our mission is to bridge the gap between
            creators and businesses, fostering meaningful collaborations that
            drive success for both parties.
          </span>
          <span className="text-gray-600 font-normal text-lg sm:hidden">
            Our team is here to assist you and will do our best to respond to
            your inquiries as quickly as possible
          </span>
        </div>
      </div>
      <AboutCards cardContent={cardContent} />
    </>
  );
};
