export default function Footer() {
  return (
    <footer className="py-[2rem] flex flex-col items-center gap-[1.5rem] dark:bg-mydark-3 ">
      <h5 className="font-bold font-interreg text-[3rem] dark:text-[#8F88FF] text-mypurp-1 text-[3rem] ">
        Send me a message!
      </h5>
      <p className="dark:text-[#FFFFFF]">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <a
        className="dark:text-[#8F88FF] underline"
        href="mailto:burgokmen@gmail.com "
        target="/blank"
      >
        burgokmen@gmail.com
      </a>
      <div className="flex gap-3 dark:text-[#8F88FF]">
        <a href="https://twitter.com/bgkmn" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://codepen.io/your-work" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-codepen"></i>
        </a>
        <a href="mailto:burgokmen@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-at"></i>
        </a>
        <a
          href="https://www.instagram.com/bgkmn_/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
