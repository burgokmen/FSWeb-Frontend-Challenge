export default function Options() {
  return (
    //TODO responsive margin need to add , states are gonna added
    <div className="flex justify-end py-2 px-128   ">
      <p className="font-interbold font-bold text-transparent text-[0.9375rem]   ">
        <span className="text-mygreen-2">TÜRKÇE</span>
        <span className="text-[#d9d9d9] p-2 mr-2">’YE GEÇ</span>
      </p>
      <div className="ml-5">
        <label className="relative inline-flex items-center mr-5 cursor-pointer ml-2">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
          <span className="font-interbold font-bold text-mypurp-1 text-[0.9375rem] ml-2">
            DARK MODE
          </span>
        </label>
      </div>
    </div>
  );
}
