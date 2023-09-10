import Options from "./Options";
import Header from "./Header";

export default function Hero() {
  return (
    // TODO max-w-[90rem] max-h-[41.9375rem] flex-shrink-1
    <div className="top-level pb-[7rem] rounded-t">
      <Options />
      <Header />
    </div>
  );
}
