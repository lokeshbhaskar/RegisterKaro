import React, { useRef } from "react";
import arrowleft from "../assets/arrowright.svg";
import arrowright from "../assets/Stroke-1.svg";
import quote from "../assets/quote.svg";
import star1 from "../assets/Star 1.svg";
import star2 from "../assets/Star 5.svg";

const SayAbout = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 440; // Each card is 360px wide
      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="h-[513px] w-full bg-sky-900 p-10">
      {/* Header and Navigation Buttons */}
      <div className="flex justify-between items-center">
        <h4 className="text-white font-bold text-3xl">
          What people say about us
        </h4>
        <div className="flex gap-2">
          <button
            className="relative w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center"
            onClick={() => handleScroll("left")}
          >
            <img src={arrowleft} alt="Left" />
          </button>
          <button
            className="relative w-[45px] h-[45px] bg-amber-500 rounded-full flex justify-center items-center"
            onClick={() => handleScroll("right")}
          >
            <img src={arrowright} alt="Right" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards Section */}
      <div className="mt-10 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll  scroll-smooth  [&::-webkit-scrollbar]:hidden"
          style={{
            scrollSnapType: "x mandatory",
            width: "calc(2 * 500px + 100px)", // Show 2.5 cards initially
          }}
        >
          {/* Card 1 */}
          <div className="bg-white h-[318px] w-[440px] rounded-lg p-6 flex-shrink-0">
            <div className="flex justify-between">
              <img src={quote} alt="Quote" />
              <div className="flex items-center gap-3">
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star2} alt="Half Star" />
              </div>
            </div>
            <p className="mt-8 text-slate-500">
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident "
            </p>
            <div className="flex flex-row mt-5 gap-2">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__"
                  alt="Profile"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Chris</h1>
                <p className="text-xl">President and CEO, PrintReach, USA</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white h-[318px] w-[440px] rounded-lg p-6 flex-shrink-0">
            <div className="flex justify-between">
              <img src={quote} alt="Quote" />
              <div className="flex items-center gap-3">
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star2} alt="Half Star" />
              </div>
            </div>
            <p className="mt-8 text-slate-500">
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident "
            </p>
            <div className="flex flex-row mt-5 gap-2">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__"
                  alt="Profile"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Chris</h1>
                <p className="text-xl">President and CEO, PrintReach, USA</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white h-[318px] w-[440px] rounded-lg p-6 flex-shrink-0">
            <div className="flex justify-between">
              <img src={quote} alt="Quote" />
              <div className="flex items-center gap-3">
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star1} alt="Star" />
                <img src={star2} alt="Half Star"/>
              </div>
            </div>
            <p className="mt-8 text-slate-500">
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident "
            </p>
            <div className="flex flex-row mt-5 gap-2">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JKnm9rns~ojUASi8h~uv~BFZ7qoqN4n7uj5sbzfe9OoIkjVwlKKYLgRPkWTtPjCA7OmXMAhoJibsf71OJzKybTr7eYeySA3BGjLBLGuFTQynELpl-OHq0vT4Hlw6AtSZ4e8uim4x5ve~86fp9cP6kH6Y5sh-YQqcPtcDEKBLtDDVjNOkZ-swK-5uVqfZXTc87MAsJjtsPz-XcUzX3HcOKbL4B3~c4r0GChQq8S4mnv9wINS0~g8oAJ7oHNdyz4MkqN5LzvtskVe3I9A09Ei08x3hllanyl88iHBpjvKVOzo-1aUaCUbEg4dTh-1qM0tFIBjuqEfBVx3F2pfOBwB54w__"
                  alt="Profile"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Chris</h1>
                <p className="text-xl">President and CEO, PrintReach, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayAbout;
