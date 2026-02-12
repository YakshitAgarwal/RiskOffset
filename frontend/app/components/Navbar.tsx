const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-zinc-900 text-white py-3 px-8 items-center rounded-2xl">
        <div className="flex gap-12 justify-center items-center">
          <div>
            <h1 className="text-[28px]">RiskOffset</h1>
          </div>
          <div className="flex gap-4 text-[17px]">
            <div>About</div>
            <div>About</div>
            <div>About</div>
            <div>About</div>
            <div>About</div>
          </div>
        </div>

        <div>Connect Wallet</div>
      </div>
    </div>
  );
};

export default Navbar;
