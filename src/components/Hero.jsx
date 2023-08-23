import bg from "../image/home-bg.png"

const Hero = () => {
  return (
    <div className="custom-container flex md:flex-row flex-col py-8 items-center" id="main" data-aos="fade-up">
      <div className="md:w-[50%] w-full flex flex-col gap-3">
        <h1 className="text-[30px] font-bold">Bizning <span className="text-[#2EDD99]">sharbatlar</span> bilan o’zingizni tetik his eting!!!</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      </div>
      <div className="md:w-[50%] w-full md:flex hidden items-center justify-center">
        <img src={bg} className="w-[80%] h-fit"/>
      </div>
    </div>
  );
};

export default Hero;
