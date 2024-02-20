import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";

const HomepagePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-poppins h-[875px] md:px-5 relative w-full">
            <div className="h-[875px] m-auto w-full">
              <Img
                className="h-[875px] m-auto object-cover w-full"
                src="images/img_rectangle21985_875x1440.png"
                alt="rectangle21985"
              />
              <div className="absolute bottom-[22%] flex flex-col items-start justify-start left-[7%] w-[53%]">
                <Text
                  className="capitalize leading-[89.00px] md:text-5xl text-6xl text-white-A700 tracking-[0.25px] w-full"
                  size="txtPoppinsBold60"
                >
                  Your Comprehensive Security Provider
                </Text>
                <Text
                  className="leading-[29.00px] mt-4 text-[15px] text-white-A700 tracking-[0.50px] w-[71%] sm:w-full"
                  size="txtLatoRegular15"
                >
                  We’re not just a security company, we’re the solution to all
                  your safety needs
                </Text>
                <div className="flex flex-row font-poppins gap-[21px] items-center justify-start mt-11 w-[41%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button
                      className="capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[143px] text-base text-center tracking-[0.16px]"
                      variant="outline"
                    >
                      contact us
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <Button className="!text-black-900 border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[143px] text-base text-center tracking-[0.16px]">
                      contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
              <Img
                className="flex-1 h-[27px] sm:h-auto object-cover w-full"
                src="images/img_rectangle21748_4.png"
                alt="rectangle21748"
              />
              <div className="bg-white-A700_11 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-2 w-[89%] md:w-full">
                  <Img
                    className="h-[65px] sm:h-auto object-cover w-[7%] md:w-full"
                    src="images/img_whatsappimage20231213.png"
                    alt="whatsappimageTwenty"
                  />
                  <Text
                    className="bg-clip-text bg-gradient  capitalize md:ml-[0] ml-[39px] text-transparent text-xl tracking-[0.25px]"
                    size="txtPoppinsRegular20"
                  >
                    FLANKER SECURITY
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[132px] w-[32%] md:w-full">
                    <ul className="flex flex-row gap-8 sm:hidden items-start justify-between w-full common-row-list">
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px]"
                        >
                          <Text size="txtPoppinsMedium16">about us</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px]"
                        >
                          <Text size="txtPoppinsMedium16">Services</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize mt-0.5 text-base text-white-A700 tracking-[0.16px]"
                        >
                          <Text size="txtPoppinsMedium16">Gallery</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize text-base text-white-A700 tracking-[0.16px]"
                        >
                          <Text size="txtPoppinsMedium16">Contact Us</Text>
                        </a>
                      </li>
                    </ul>
                    <Line className="bg-orange-400 h-[3px] mt-[3px] rounded-[1px] w-[19%]" />
                  </div>
                  <div className="bg-white-A700 flex flex-col font-heebo items-start justify-end mb-2 md:ml-[0] ml-[247px] md:mt-0 mt-[15px] p-[5px] rounded-[21px] w-[14%] md:w-full">
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
              </div>
            </header>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1164px] mt-[95px] mx-auto md:px-5 w-full">
            <Img
              className="h-[640px] md:h-auto object-cover"
              src="images/img_rectangle22076_640x502.png"
              alt="rectangle22076"
            />
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[130px]">
              <Text
                className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                size="txtRedHatDisplayRomanMedium14"
              >
                About us
              </Text>
              <Text
                className="capitalize leading-[49.00px] mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full"
                size="txtHeeboRegular36"
              >
                <span className="text-gray-900 font-redhatdisplay text-left font-normal">
                  We Provide services for{" "}
                </span>
                <span className="text-gray-900 font-redhatdisplay text-left font-bold">
                  multiple{" "}
                </span>
                <span className="text-gray-900 font-redhatdisplay text-left font-bold">
                  customers in various industries worldwide
                </span>
              </Text>
              <Text
                className="mt-[25px] text-[15px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoLight15"
              >
                Trust us with the security of what’s important to you
              </Text>
              <div className="flex flex-row font-poppins gap-[13px] items-center justify-start mt-[23px] w-[56%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[48%]">
                  <Button className="!text-black-900 border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[142px] text-base text-center tracking-[0.16px]">
                    Know More
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-[48%]">
                  <Button
                    className="capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[142px] text-base text-center tracking-[0.16px]"
                    variant="outline"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mt-[106px] p-[94px] md:px-10 sm:px-5 w-full">
            <List
              className="flex flex-col gap-[55px] items-center max-w-[1240px] mx-auto w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[31px] w-[35%] md:w-full">
                  <div className="flex flex-row font-redhatdisplay gap-[18px] items-end justify-start w-[83%] md:w-full">
                    <Text
                      className="my-1 text-gray-600 text-sm tracking-[2.00px] uppercase"
                      size="txtRedHatDisplayRomanMedium14"
                    >
                      premium security services
                    </Text>
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_arrowleft_black_900.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                  <Text
                    className="capitalize leading-[49.00px] mt-[15px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full"
                    size="txtHeeboRegular36"
                  >
                    <span className="text-gray-900 font-redhatdisplay text-left font-normal">
                      Our Services{" "}
                    </span>
                    <span className="text-gray-900 font-redhatdisplay text-left font-bold">
                      Make your business secure
                    </span>
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-black-900_cc tracking-[0.50px]"
                    size="txtLatoRegular15Black900cc"
                  >
                    Trust us with the security of what’s important to you
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[225px] p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                  <Img
                    className="h-[60px] mt-[35px]"
                    src="images/img_guard.svg"
                    alt="guard"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Guards
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    High-quality coal that comes from.
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[53px] p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                  <Img
                    className="h-[60px] mt-[35px]"
                    src="images/img_guard.svg"
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Audits
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    High-quality coal that comes from.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 my-0 w-full">
                <div className="bg-orange-400 flex md:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                  <Img
                    className="h-[60px] mt-[35px]"
                    src="images/img_guard_black_900.svg"
                    alt="guard"
                  />
                  <Text
                    className="mt-[46px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Drones
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[5px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    High-quality coal that comes from.
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                  <Img
                    className="h-[60px] mt-[35px]"
                    src="images/img_guard.svg"
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Training
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    High-quality coal that comes from.
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                  <Img
                    className="h-[60px] mt-[35px]"
                    src="images/img_guard.svg"
                    alt="guard_Two"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Infra.
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    High-quality coal that comes from.
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                  <Img
                    className="h-[60px] mt-[35px]"
                    src="images/img_guard.svg"
                    alt="guard_Three"
                  />
                  <Text
                    className="mt-[45px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Risk Assessment
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-1.5 text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    High-quality coal that comes from.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Text
            className="mt-[94px] text-gray-600 text-sm tracking-[2.00px] uppercase"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          <Text
            className="capitalize leading-[49.00px] mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-[57%] sm:w-full"
            size="txtHeeboRegular36"
          >
            <span className="text-gray-900 font-redhatdisplay text-left font-normal">
              We Provide services for{" "}
            </span>
            <span className="text-gray-900 font-redhatdisplay text-left font-bold">
              multiple{" "}
            </span>
            <span className="text-gray-900 font-redhatdisplay text-left font-bold">
              customers in various industries worldwide
            </span>
          </Text>
          <div className="font-lato md:h-[503px] h-[553px] max-w-[1242px] mt-[62px] mx-auto md:px-5 relative w-full">
            <Img
              className="absolute h-[441px] left-[0] object-cover top-[0] w-[62%]"
              src="images/img_rectangle22083.png"
              alt="rectangle22083"
            />
            <Text
              className="absolute leading-[29.00px] right-[3%] text-[15px] text-gray-700 top-[15%] tracking-[0.50px] w-[31%] sm:w-full"
              size="txtLatoRegular15Gray700"
            >
              The Property Management Vertical encompasses the full spectrum of
              House Keeping Services, Landscaping, Maintenance Support Team and
              Support Staff with highly professional teams led by Facility
              Mangers.  
            </Text>
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-inter h-[248px] items-center justify-start p-[54px] md:px-10 sm:px-5 right-[0] w-[53%]"
              style={{ backgroundImage: "url('images/img_group50520.svg')" }}
            >
              <div className="flex flex-col gap-[34px] items-start justify-start w-[94%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <CheckBox
                    className="font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                    inputClassName="mr-[5px]"
                    name="perfectionanyti_One"
                    id="perfectionanyti_One"
                    label="Perfection Anytime"
                  ></CheckBox>
                  <CheckBox
                    className="font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                    inputClassName="mr-[5px]"
                    name="trainedprofessi_One"
                    id="trainedprofessi_One"
                    label="Trained Professionals"
                  ></CheckBox>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[97px] items-center justify-start w-[92%] md:w-full">
                  <CheckBox
                    className="font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                    inputClassName="mr-[5px]"
                    name="advancetechnolo_One"
                    id="advancetechnolo_One"
                    label="Advance Technology"
                  ></CheckBox>
                  <CheckBox
                    className="font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                    inputClassName="mr-[5px]"
                    name="emergencyhelp"
                    id="emergencyhelp"
                    label="Emergency help"
                  ></CheckBox>
                </div>
                <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                  <CheckBox
                    className="font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                    inputClassName="mr-[5px]"
                    name="perfectionanyti_Three"
                    id="perfectionanyti_Three"
                    label="Perfection Anytime"
                  ></CheckBox>
                  <CheckBox
                    className="font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                    inputClassName="mr-[5px]"
                    name="remoteguarding"
                    id="remoteguarding"
                    label="Remote Guarding"
                  ></CheckBox>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[150px] text-gray-600 text-sm tracking-[2.00px] uppercase"
            size="txtRedHatDisplayRomanMedium14"
          >
            TESTIMONIAL
          </Text>
          <Text
            className="capitalize leading-[49.00px] mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 tracking-[1.00px] w-[39%] sm:w-full"
            size="txtHeeboRegular36"
          >
            <span className="text-gray-900 font-redhatdisplay font-normal">
              We Provide services for a huge
            </span>
            <span className="text-gray-900 font-redhatdisplay font-bold">
              {" "}
              number of{" "}
            </span>
            <span className="text-gray-900 font-redhatdisplay font-bold">
              customers{" "}
            </span>
          </Text>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 3 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="flex gap-[74px] max-w-[1165px] mt-[111px] mx-auto md:px-5 w-full"
            items={[...Array(18)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-center justify-start mx-2.5">
                  <div className="bg-gray-100 border border-gray-600_23 border-solid flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 rounded-sm w-full">
                    <div className="flex flex-col items-start justify-start mt-1 w-[96%] md:w-full">
                      <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] w-[46%] md:w-full">
                        <Img
                          className="h-[22px] w-[22px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-[22px] ml-1 w-[22px]"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-[22px] ml-1 w-[22px]"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-[22px] ml-1 w-[22px]"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                      </div>
                      <Text
                        className="mt-[21px] text-4xl sm:text-[32px] md:text-[34px] text-amber-400 tracking-[0.50px]"
                        size="txtLeckerliOneRegular36"
                      >
                        “
                      </Text>
                      <Text
                        className="h-[228px] leading-[29.00px] text-[15px] text-gray-700 tracking-[0.50px] w-[228px]"
                        size="txtLatoRegular15Gray700"
                      >
                        Top-qTop-quality Products Sourced From The Most Ideal
                        LocationsTop-quality Products Sourced From The Most
                        ITop-quality Products Sourced From The Most Ideal
                        Locationsdeal LocationsTop-quality Products Sourced From
                        The Most I
                      </Text>
                      <Text
                        className="mt-7 text-black-900 text-xl tracking-[0.50px]"
                        size="txtLatoMedium20Black900"
                      >
                        Abhishek Verma
                      </Text>
                      <Text
                        className="mt-3 text-gray-600 text-lg tracking-[0.50px]"
                        size="txtLatoMedium18"
                      >
                        PR Manager
                      </Text>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-orange-400 w-2.5" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex h-2.5 justify-center mt-[71px] w-[105px]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-orange-400 w-2.5"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
          />
          <div className="font-poppins h-[748px] md:h-[850px] mt-[102px] md:px-5 relative w-full">
            <Img
              className="h-[748px] m-auto object-cover w-full"
              src="images/img_rectangle22077.png"
              alt="rectangle22077"
            />
            <div className="absolute bg-white-A700 flex flex-col gap-[52px] h-max inset-y-[0] items-start justify-center my-auto p-[60px] md:px-10 sm:px-5 right-[9%] rounded w-[43%]">
              <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <a
                    href="javascript:"
                    className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                  >
                    <Text size="txtRedHatDisplayRomanMedium14">contact us</Text>
                  </a>
                  <Text
                    className="mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
                    size="txtPoppinsRegular36"
                  >
                    Have Questions?
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
                    size="txtPoppinsSemiBold36"
                  >
                    Get in Touch!
                  </Text>
                  <div className="font-lato sm:gap-5 gap-[26px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[37px] w-full">
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Full name
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Company Name
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Email Id
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Phone Number
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] w-[32%] md:w-full">
                <Button className="border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                  get in touch
                </Button>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-10 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
