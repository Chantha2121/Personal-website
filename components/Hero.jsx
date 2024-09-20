import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// Component
import DevImg from "./ui/DevImg";
import Socials from "./ui/Socials";


const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[118vh] bg-pink-100 bg-hero bg-no-repeat bg-bottom dark:bg-hero1">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start mx-5">
          {/* Text */}
          <div className="flex flex-col justify-center text-center xl:text-left max-w-full xl:max-w-[600px] mx-auto xl:mx-0 mt-0">
            <div className="text-sm uppercase font-semibold mb-2 text-primary tracking-[4px] dark:text-pink-600">
              Web Developer
            </div>
            <h1 className="h1 mb-2">
              Hello, my name is Choeurn Chantha
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational journey, and what I engage in professionally.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-5">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact <Send size={18} />
                </Button>
              </Link>
              <Link href="https://drive.google.com/file/d/1NHFS2faigfD3Rv_6BswSEOgIkrykuw2d/view?usp=sharing">
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Socials />
          </div>
          
          {/* Image */}
          <div className="hidden xl:flex relative mt-8 xl:mt-0">
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] bg-no-repeat absolute xl:-top-1 xl:-right-2">
              <DevImg 
                containerStyles="h-full bg-no-repeat relative" 
                imgSrc="/no_back_pic.png" 
              />
            </div>
          </div>
        </div>
        {/* Arrow Down */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bottom-10 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
