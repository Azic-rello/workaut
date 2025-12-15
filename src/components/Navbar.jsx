import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-around text-white items-center h-[80px]">
      <div className="flex flex-col items-center">
        <img src={logo} alt="jpg" />
        <h1 className="text-sm">Transform Your Body</h1>
      </div>
      <ul className="flex gap-12 items-center text-xl font-extrabold">
        <li className="hover:text-[#e50000] cursor-pointer">Home</li>
        <li className="hover:text-[#e50000] cursor-pointer">About</li>
        <li className="hover:text-[#e50000] cursor-pointer">Contact</li>
        <li className="hover:text-[#e50000] cursor-pointer">Service</li>
      </ul>
      <div className="flex items-center gap-5">
        <button className="p-[8px_20px] border-[#d80000] border rounded-2xl text-[#d80000]">
          Log in
        </button>
        <button className="p-[8px_20px] bg-[#d80000] rounded-2xl">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
