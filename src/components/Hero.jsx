const Hero = () => {
  return (
    <div className="custom-container flex md:flex-row flex-col items-center h-[300px]">
      <div className="md:w-[50%] w-full flex flex-col gap-3">
        <h1 className="text-[30px] font-bold">Bizning <span className="text-[#2EDD99]">sharbatlar</span> bilan o’zingizni tetik his eting!!!</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      </div>
      <div className="w-[50%] relative md:flex hidden items-center justify-center">

      </div>
    </div>
  );
};

export default Hero;
