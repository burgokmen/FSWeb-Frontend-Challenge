function Header() {
  return (
    <header className="flex p-5">
      <div>
        <p className="font-interbold font-bold text-mygreen-1 text-[3.5rem] ">
          I am a Frontend
          <br /> Developer...
        </p>
        <p className="font-interreg font-normal text-white text-[1.5rem] ">
          ...who likes to craft solid and scalable frontend
          <br /> products with great user experiences.
        </p>
        <div>
          <button className="bg-white hover:bg-blue-700 text-indigo-800 font-intermed font-medium text-[18px] py-2 px-4 border border-blue-700 rounded">
            Github
          </button>

          <button className=" bg-white hover:bg-blue-700 text-indigo-800 font-intermed font-medium text-[18px] py-2 px-4 border border-blue-700 rounded">
            Linkedin
          </button>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
