export default function Footer() {
  return (
    <footer className="py-[2rem] flex flex-col items-center gap-[1.5rem] ">
      <h5 className="font-bold font-interreg text-[3rem] text-mypurp-1 text-[3rem] ">
        Send me a message!
      </h5>
      <p className="">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <a href="mailto:burgokmen@gmail.com" target="/blank">
        burgokmen@gmail.com
      </a>
      <div className="flex gap-3">
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-codepen"></i>
        <i className="fa-solid fa-at"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </footer>
  );
}
