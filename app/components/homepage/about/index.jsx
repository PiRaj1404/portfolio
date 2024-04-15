// @flow strict
import { personalData } from "@/utils/data/personal-data";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Know Who I AM
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
