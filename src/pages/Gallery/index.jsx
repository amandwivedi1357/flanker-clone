import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const GalleryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[27px] items-center justify-start mx-auto w-full">
        <div className="h-[848px] md:px-5 relative w-full">
          <div className="h-[848px] m-auto w-full">
            <Img
              className="h-[848px] m-auto object-cover w-full"
              src="images/img_rectangle21985_2.png"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[15px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="capitalize md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px]"
                size="txtPoppinsBold60"
              >
                Gallery
              </Text>
              <Text
                className="text-[15px] text-center text-white-A700 tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Trust the experts with your safety
              </Text>
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="md:h-[522px] h-[557px] sm:h-[911px] md:px-5 relative w-full">
          <div className="absolute bg-gray-50 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[74px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[74px] justify-start md:ml-[0] ml-[26px] w-[73%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                <Img
                  className="h-[324px] md:h-auto object-cover rounded-[5px]"
                  src="images/img_rectangle22125.png"
                  alt="rectangle22125"
                />
                <Img
                  className="h-[324px] md:h-auto object-cover rounded-[5px]"
                  src="images/img_rectangle22126.png"
                  alt="rectangle22126"
                />
              </div>
              <Img
                className="h-2.5 md:ml-[0] ml-[605px]"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            </div>
          </div>
          <Img
            className="absolute h-[324px] object-cover right-[0] rounded-[5px] top-[13%] w-[27%]"
            src="images/img_rectangle22127.png"
            alt="rectangle22127"
          />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default GalleryPage;
