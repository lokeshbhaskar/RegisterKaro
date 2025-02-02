import React from "react";
import apple from "../assets/appstore.svg";
import playstore from "../assets/playstore.svg";

const ManageServices = () => {
  return (
    <div className=" h-[490px] overflow-y-hidden bg-sky-900 flex flex-wrap p-6">
      <div className=" w-1/2 flex flex-col">
        <h2 className="text-3xl text-white font-semibold mt-6 ">
          Manage Your Services by your Mobile Phone
        </h2>
        <p className="text-slate-400 mt-8">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </p>
        <h2 className="text-white font-semibold text-xl mt-10 ">Get the App</h2>
        <div className="mt-6 flex gap-4">
          <button className="flex flex-row items-center  gap-3 bg-white rounded-lg px-8 py-4 border-2 border-lime-500 ">
            <img src={apple} alt="" className=" w-[40px] " />
            <div>
              <p className="text-black">Get it on</p>
              <h1 className="text-black font-bold">App Store</h1>
            </div>
          </button>
          <button className="flex flex-row items-center  gap-2 bg-white px-8 py-4 rounded-md border-2 border-lime-500 ">
            <img src={playstore} alt="" className=" w-[40px] " />
            <div>
              <p className="text-black">Get it on</p>
              <h1 className="text-black font-bold">App Store</h1>
            </div>
          </button>
        </div>
      </div>
      <div className="w-1/2 relative flex gap-2">
         <div className="mt-30">
            <img src="https://s3-alpha-sig.figma.com/img/3deb/37d9/cdada73b148b936e2ce5b752b5270163?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eJniHzKKCb1XA2yvDC97G-9Hk49Hg8oh7na2-Bk2RYyUNc-JPo4ai1bI8GIao6cB5Lzyw1cFE4QJp-AsFWB9b68tANxvaNY5KIEaHlwGDoQ27HQL1vHJtiYCRR13i9muSdmm98McvbfU1Xqr5dSbjre29AnAwRydKY9e-slrSY6pevnE5GN2s5tSk255GPj7Ytf0315qmE1lXoYox3mukS0m5PNZ6uZ4RQ4fjGdvulZ7P2m5x7ikP5ODmy8t~3yCf7U-9Tnve8M12ydfROX1hV0vV-CTlpQnyNoSw2SG1WPnpIS3T79udFYqbPA50CCH42TTHtwnmsgL4BwFI5rOJw__" alt="" className="w-[308px] h-[620px] " />
            <img src="https://s3-alpha-sig.figma.com/img/6d74/55cf/6b6b736d4729520fe68bf022a1a32e7b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jcW19gExxN50JA60HxKSLEkO6ceSstUYF3jgvVfSVcgixB-XLOcMlnYQg4fRhLhQuuPkhglyPn5FgqYszQ90Lq5tNlu-fmpzqKJyp3FAxULCr72IezKUXofxu1FIOOx5MeN99emJwI3bY-YCcfk7nRadN3Lo1~QQgZUUNWokRo5c~VpdhaE9guLmpccmwuTpo~JKl1FXnVJlxoVBYWiySbQxtAInMOo3dXI9TbourLwWnMf56nSrEF84KnqUi55JfBzesvuqmW5gGm10mdkzAzRqjTCE61I099IjNi32f4AwCZ8jp4uZhLj1j7opuzNNcRYoYx8aSP792Uw7qNsLoA__" alt="" className="absolute top-[59%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[245px] h-[565px] rounded-4xl"/>
         </div>
         <div className="mt-0">
            <img src="https://s3-alpha-sig.figma.com/img/3deb/37d9/cdada73b148b936e2ce5b752b5270163?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eJniHzKKCb1XA2yvDC97G-9Hk49Hg8oh7na2-Bk2RYyUNc-JPo4ai1bI8GIao6cB5Lzyw1cFE4QJp-AsFWB9b68tANxvaNY5KIEaHlwGDoQ27HQL1vHJtiYCRR13i9muSdmm98McvbfU1Xqr5dSbjre29AnAwRydKY9e-slrSY6pevnE5GN2s5tSk255GPj7Ytf0315qmE1lXoYox3mukS0m5PNZ6uZ4RQ4fjGdvulZ7P2m5x7ikP5ODmy8t~3yCf7U-9Tnve8M12ydfROX1hV0vV-CTlpQnyNoSw2SG1WPnpIS3T79udFYqbPA50CCH42TTHtwnmsgL4BwFI5rOJw__" alt="" className="w-[308px] h-[620px] " />
            <img src="https://s3-alpha-sig.figma.com/img/6d74/55cf/6b6b736d4729520fe68bf022a1a32e7b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jcW19gExxN50JA60HxKSLEkO6ceSstUYF3jgvVfSVcgixB-XLOcMlnYQg4fRhLhQuuPkhglyPn5FgqYszQ90Lq5tNlu-fmpzqKJyp3FAxULCr72IezKUXofxu1FIOOx5MeN99emJwI3bY-YCcfk7nRadN3Lo1~QQgZUUNWokRo5c~VpdhaE9guLmpccmwuTpo~JKl1FXnVJlxoVBYWiySbQxtAInMOo3dXI9TbourLwWnMf56nSrEF84KnqUi55JfBzesvuqmW5gGm10mdkzAzRqjTCE61I099IjNi32f4AwCZ8jp4uZhLj1j7opuzNNcRYoYx8aSP792Uw7qNsLoA__" alt="" className="absolute top-[43%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-[245px] h-[570px] rounded-4xl " />
         </div>
      </div>
    </div>
  );
};

export default ManageServices;
