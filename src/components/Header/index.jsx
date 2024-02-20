import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[27px] sm:h-auto object-cover w-full"
          src="images/img_rectangle21748_27x1440.png"
          alt="rectangle21748"
        />
        <div className="bg-white-A700_11 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
          <Img
            className="md:flex-1 h-[65px] sm:h-auto mb-2 md:ml-[0] ml-[70px] object-cover w-[6%] md:w-full"
            src="images/img_whatsappimage20231213.png"
            alt="whatsappimageTwenty"
          />
          <Text
            className="bg-clip-text bg-gradient  capitalize md:ml-[0] ml-[39px] text-transparent text-xl tracking-[0.25px]"
            size="txtPoppinsRegular20"
          >
            FLANKER SECURITY
          </Text>
          <ul className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-start justify-center md:ml-[0] ml-[132px] w-[29%] md:w-full common-row-list">
            <li>
              <Text
                className="capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px]"
                size="txtPoppinsMedium16"
              >
                about us
              </Text>
            </li>
            <li>
              <Text
                className="capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px]"
                size="txtPoppinsMedium16"
              >
                Services
              </Text>
            </li>
            <li>
              <Text
                className="capitalize sm:mt-0 mt-0.5 text-base text-white-A700 tracking-[0.16px]"
                size="txtPoppinsMedium16"
              >
                Gallery
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base text-white-A700 tracking-[0.16px]"
                size="txtPoppinsMedium16"
              >
                Contact Us
              </Text>
            </li>
          </ul>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[247px] md:mt-0 my-[15px] p-[5px] rounded-[21px] w-[12%] md:w-full">
            <div className="flex flex-row gap-3 items-start justify-start w-[90%] md:w-full">
              <div className="bg-gradient  flex flex-col h-[31px] items-center justify-start p-[9px] rounded-[15px] w-[31px]">
                <Img
                  className="h-[11px] w-[11px]"
                  src="images/img_call.svg"
                  alt="call"
                />
              </div>
              <Text
                className="mt-[3px] text-black-900 text-sm tracking-[0.25px]"
                size="txtHeeboMedium14"
              >
                +9844235672
              </Text>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
