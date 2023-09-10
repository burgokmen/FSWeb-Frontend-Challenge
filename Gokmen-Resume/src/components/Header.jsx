import heroPhoto from "../assets/hero.photo.png";
import githubSvg from "../assets/github.svg";
import linkedinSvg from "../assets/LinkedIn.svg";

function Header() {
  return (
    <header className="flex p-5 justify-center">
      <div>
        <p className="font-interbold font-bold text-mygreen-1 text-[3.5rem] ">
          I am a Frontend
          <br /> Developer...
        </p>
        <p className="font-interreg font-normal text-white text-[1.5rem] ">
          ...who likes to craft solid and scalable frontend
          <br /> products with great user experiences.
        </p>
        <div className="flex">
          <a
            href="https://github.com/burgokmen"
            target="_blank"
            className="bg-white flex hover:bg-indigo-300 text-indigo-800 font-intermed font-medium text-[18px] py-2 px-4 border border-blue-700 rounded"
            rel="noreferrer"
          >
            <embed className="mr-2 w-[1.3rem] h-[1.3rem]" src={githubSvg} />
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/bgokmen/"
            target="_blank"
            className="ml-[1rem] flex bg-white hover:bg-indigo-300 text-indigo-800 font-intermed font-medium text-[18px] py-2 px-4 border border-blue-700 rounded"
            rel="noreferrer"
          >
            <embed className="mr-2 w-[1.3rem] h-[1.3rem]" src={linkedinSvg} />
            Linkedin
          </a>
        </div>
      </div>
      <img src={heroPhoto} className="w-[14.6rem] h-[13.8rem] ml-[2rem] " />
    </header>
  );
}

export default Header;
