import React from "react";
import arrowup from "../assets/arrow-up-right.svg";
import arrowwhite from '../assets/arrowwhite.svg'

const Blogs = () => {
  return (
    <div>
      <header className="flex flex-col items-center">
        <h4 className="text-xl font-semibold text-center text-amber-500 mt-4 ">
          Exolore Ours Blogs
        </h4>
        <h3 className="text-2xl text-center font-semibold mt-2">
          Accelerate Digital Transformation
        </h3>
      </header>
      <div id="row1" className="px-10 py-6 flex flex-wrap  md:gap-8">
        <div className="w-[340px] h-[444px] ">
          <img
            src="https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CxVnMWco2RBOAyWbw7VXLry2Y4Bi-DMpkmWrE7ItciBUWcGnJYtWIDeb5OXjS7NKFvFJbmldn9cGvvjY14VVefzumN2Yg0RUVgzoNAmujsX4PnUW2eAapYmQOP~9X94nGGv8h8M6-XpinFDQVdm569GK9C4JVSfIgaOorqNlGE0JVHbfdyapapObQpV2yOtcmmQVugl1UAEXzXYZAc9WNPe7eohJBStMAsnsbqu7tDjLEAwbuhOrAFMQg7RKjczP55nFisD7cMi60u3C1HSstwTs~ZvjyrvjNi~aQP0QxsLQbxD8F19gumnJ3ctYJZxOMoS2qcpA2MpkNaBOAZuofg__"
            alt=""
            className="w-[340px] h-[240px] object-cover"
          />
          <p className="text-slate-500 font-bold ">
            Prabhash Mishra <span className="mx-1 top-1 text-2xl">•</span> 1 Jan
            2023 <span className="mx-1  text-2xl font-semibold">•</span> Today
          </p>
          <div className="flex justify-between items-center ">
            <h4 className="font-semibold text-3xl">Small Business & Startup</h4>
            <img src={arrowup} alt="" />
          </div>
          <p className="text-slate-500  ">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
          <div className="flex gap-4 w-[400px] mt-2  ">
            <span className="bg-purple-100 w-[100px] text-center rounded-lg text-violet-700 font-semibold ">
              Tax & Audit
            </span>
            <span className="bg-purple-100 w-[150px] text-center rounded-lg text-blue-900 font-semibold ">
              Management
            </span>
          </div>
        </div>
        <div className="w-[340px] h-[444px] mt-10 md:mt-0 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NvOoe-E~r0AgYfXXQsFQqyMIvmvfxADSAPK-txN~hWkeIfWkg4b0dMbHs8MSJ90MU4ANWajY16Pf84fBb0NnmaA-j1qzTQ2UARwDB7qaYFt0nVdrOsv9FNt6776S-LzWQJfeaiO-IGwiRIfsaeq~2p-UX72mELgF62mdBXhVh4rCf4c2nq6kjS2opzMQKp6xV-30yRBnEDV~Sa4cRljk-pBdAincX5VMybs8ZYFXW~YTaXoaUzhCWMA05MEcEkKdVsxBKrSqjTI4020vyzXM2fVV363-8fY4mYJ36ocktwsZJnsecbmTVq8fj9B6dwUmKzkMtqe1VldK32KfIeUMNA__"
            alt=""
            className="h-[240px] w-[340px] object-cover "
          />
          <p className="text-slate-500 font-semibold ">
            Rakhi verma <span className="mx-1 top-1 text-2xl">•</span> 1 Jan
            2023
          </p>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-3xl"> Scale-Up Company Offer </h4>
            <img src={arrowup} alt="" />
          </div>
          <p className="text-slate-500">
            Mental models are simple expressions of complex processes or
            relationships.
          </p>
          <div className="flex w-[400px] gap-2 mt-2">
            <span className="w-[70px] text-sky-700 text-center bg-sky-50 rounded-lg font-semibold ">
              Tax
            </span>
            <span className="text-center w-[120px] bg-sky-100 rounded-lg text-indigo-700 font-semibold ">
              Research
            </span>
            <span className="w-[150px] text-center bg-orange-50 text-orange-700 rounded-lg ">
              Complience
            </span>
          </div>
        </div>
        <div className=" w-[340px] h-[444px] mt-4 md:mt-0 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CxVnMWco2RBOAyWbw7VXLry2Y4Bi-DMpkmWrE7ItciBUWcGnJYtWIDeb5OXjS7NKFvFJbmldn9cGvvjY14VVefzumN2Yg0RUVgzoNAmujsX4PnUW2eAapYmQOP~9X94nGGv8h8M6-XpinFDQVdm569GK9C4JVSfIgaOorqNlGE0JVHbfdyapapObQpV2yOtcmmQVugl1UAEXzXYZAc9WNPe7eohJBStMAsnsbqu7tDjLEAwbuhOrAFMQg7RKjczP55nFisD7cMi60u3C1HSstwTs~ZvjyrvjNi~aQP0QxsLQbxD8F19gumnJ3ctYJZxOMoS2qcpA2MpkNaBOAZuofg__"
            alt=""
            className="w-[340px] h-[240px] object-cover  "
          />
          <p className="text-slate-500 font-semibold ">
            Rakhi Verma <span className="mx-1 top-1 text-2xl">•</span> 1 Jan
            2024
          </p>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-3xl">Small Business & Startup</h4>
            <img src={arrowup} alt="" />
          </div>
          <p className="text-slate-500">
            Introduction to Wireframing and its Principles. Learn from the best
            in the industry.
          </p>
          <div className="w-[350px] flex gap-2 mt-2">
            <span className="bg-purple-50 text-center w-[100px] text-violet-700 rounded-lg font-semibold ">
              Audit
            </span>
            <span className="bg-blue-50 rounded-lg text-center w-[150px] text-indigo-700 font-semibold ">
              Money Back
            </span>
          </div>
        </div>

        <div className="w-[340px] h-[444px] ">
          <img
            src="https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WDotgmqntCoL2ePnsVgDjCrlz5dyC-ti2yn4pN93K2Jfrje89vB1Ws0QCy~zJpyBFIYKUYS0vA-AU3PkeT4WnGt-tLgbSGMt1fztYS5naCpTKJ8hMRwTIFqZ-~Bx7EAwd0XK6wJDTBLSUb~GlysCUVZKFOYtskDQA-VgdEp1B6tKGnjF3VWxCoTwOI1tBjJBEgscgADTfeiKp8oyGmqNfSvYiN2~3CMPnc01kMV4TPSNaJ6aBEUWCXYnOVuXX74hNJxlJ0TaL2Sd6W~JlKTRfi5is~P98WkgvmenfWWIzhzG4Xa0hjn0D6Nfcvf9VTn75b0AX5TaRd1um5qwXSRB8Q__"
            alt=""
            className="w-[340px] h-[240px] object-cover"
          />
          <p className="text-slate-500 font-bold ">
            Karan kumar <span className="mx-1 top-1 text-2xl">•</span> 1 Jan
            2023 <span className="mx-1  text-2xl font-semibold">•</span> Today
          </p>
          <div className="flex justify-between items-center ">
            <h4 className="font-semibold text-3xl">Scale-Up Company Offer</h4>
            <img src={arrowup} alt="" />
          </div>
          <p className="text-slate-500  ">
            Collaboration can make our teams stronger, and our individual
            designs better.
          </p>
          <div className="flex gap-4 w-[400px] mt-2  ">
            <span className="bg-purple-100 w-[100px] text-center rounded-lg text-violet-700 font-semibold ">
              Money
            </span>
            <span className="bg-purple-100 w-[150px] text-center rounded-lg text-blue-900 font-semibold ">
              Management
            </span>
          </div>
        </div>
        <div className="w-[340px] h-[444px] mt-10 md:mt-0 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E7uMaojG93wMnLtdoaiTVFHAOlyQPvVEoDhyb89sn8p-tURtLkX~sP0EyaJcXyhos-DQBViEjX3fYx51U~jXoUaq7edNveL3FnI1iGal0CspWclNRQXoL0zckL2obiyZT7kaaUbbdqHiCCJTrhmZwqD-9Vu~2V4xiA~fkUy3PbUfISXnercrKIvl~Wgx2sut7XHUkduViuXSW9YE2E2A7Qzw3FioPH7lur38d7XY7mt7dRoppvpLU~E0Orh-1nAd0qSP5q4KcheN9cJ5EveYmMTsbVPxhhglBhmLue8QBckK1EMOVJCjlenZXI2wWrMaaY-ccQ1u-Vru8QtLTqJrIQ__"
            alt=""
            className="h-[240px] w-[340px] object-cover "
          />
          <p className="text-slate-500 font-semibold ">
            Richa Singh <span className="mx-1 top-1 text-2xl">•</span> 1 Jan
            2023
          </p>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-3xl"> Scale-Up Company Offer </h4>
            <img src={arrowup} alt="" />
          </div>
          <p className="text-slate-500">
            JavaScript frameworks make development easy with extensive features
            and functionalities.
          </p>
          <div className="flex w-[400px] gap-2 mt-2">
            <span className="w-[120px] text-sky-700 text-center bg-sky-50 rounded-lg font-semibold ">
              Tax Return
            </span>
            <span className="text-center w-[80px] bg-sky-100 rounded-lg text-indigo-700 font-semibold ">
              News
            </span>
            <span className="w-[90px] text-center bg-orange-50 text-orange-700 rounded-lg ">
              Audit
            </span>
          </div>
        </div>
        <div className=" w-[340px] h-[444px] mt-4 md:mt-0 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CxVnMWco2RBOAyWbw7VXLry2Y4Bi-DMpkmWrE7ItciBUWcGnJYtWIDeb5OXjS7NKFvFJbmldn9cGvvjY14VVefzumN2Yg0RUVgzoNAmujsX4PnUW2eAapYmQOP~9X94nGGv8h8M6-XpinFDQVdm569GK9C4JVSfIgaOorqNlGE0JVHbfdyapapObQpV2yOtcmmQVugl1UAEXzXYZAc9WNPe7eohJBStMAsnsbqu7tDjLEAwbuhOrAFMQg7RKjczP55nFisD7cMi60u3C1HSstwTs~ZvjyrvjNi~aQP0QxsLQbxD8F19gumnJ3ctYJZxOMoS2qcpA2MpkNaBOAZuofg__"
            alt=""
            className="w-[340px] h-[240px] object-cover  "
          />
          <p className="text-slate-500 font-semibold ">
            Miss Nora <span className="mx-1 top-1 text-2xl">•</span> 1 Jan 2024
          </p>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-3xl">Scale-Up Company Offer </h4>
            <img src={arrowup} alt="" />
          </div>
          <p className="text-slate-500">
            Starting a community doesn’t need to be complicated, but how do you
            get started?
          </p>
          <div className="w-[350px] flex gap-2 mt-2">
            <span className="bg-purple-50 text-center w-[200px] text-violet-700 rounded-lg font-semibold ">
              Private Limited Company
            </span>
            <span className="bg-blue-50 rounded-lg text-center w-[200px] text-indigo-700 font-semibold">
              Custome Service
            </span>
          </div>
        </div>
        <div className="w-full  text-center flex justify-center ">
        <button className="px-4 py-3 bg-sky-900 text-xl font-semibold rounded-lg text-white flex items-center gap-2 cursor-pointer  ">See more blogs
          <img src={arrowwhite} alt="" className="mt-1" />
           </button>
        </div>
       
      </div>
    </div>
  );
};

export default Blogs;
