import banner from "../asstes/Rectangle.png";
const Banner = () => {
  return (
    <div className="banner-container my-3">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="banner-overlay rounded-[18px]  sm:rounded-[24px] md:rounded-[34px] lg:rounded-[50px]"></div>
    </div>
  );
};

export default Banner;
