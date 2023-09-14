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
        className="dark:text-[#8F88FF]"
        href="mailto:burgokmen@gmail.com "
        target="/blank"
      >
        burgokmen@gmail.com
      </a>
      <div className="flex gap-3 dark:text-[#8F88FF]">
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-codepen"></i>
        <i className="fa-solid fa-at"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </footer>
  );
}
