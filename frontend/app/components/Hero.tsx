import Section from "./Section";

const Hero = () => {
  return (
    <div className="h-125 px-44">
      <div className="flex items-center py-6">
        <div className="flex-2 flex flex-col gap-8">
          <div className="text-[44px] font-bold leading-12">
            Decentralized prediction market with no loss on blockchain
          </div>
          <div className="text-[18px] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ab nisi aspernatur ab nisi aspernatur ab nisi aspernatur
          </div>
          <div>
            <button className="bg-yellow-300 text-black px-5 py-3 rounded-lg text-[20px] font-semibold">
              Predict News
            </button>
          </div>
        </div>
        <div className="flex-3 flex justify-center">Pic</div>
      </div>
      <div className="py-6">
        <Section />
      </div>
    </div>
  );
};

export default Hero;
