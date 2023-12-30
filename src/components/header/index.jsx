import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1240px] mb-5 mx-auto w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="header-row ">
                  <Img
                    className="h-[51px] cursor-pointer"
                    src="images/img_logo.svg"
                    alt="Logo"
                    onClick={() => navigate("/")}
                  />
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:hidden items-start justify-center md:ml-[0] ml-[107px] pt-0.5 w-[52%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-[9%] sm:w-full">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Red400"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Text>
                  </div>

                  <div className="flex flex-col items-center justify-start ml-8">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/menu")}
                    >
                      Menu
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-8">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/aboutus")}
                    >
                      About us
                    </Text>
                  </div>

                  {/*<div className="flex flex-col items-center justify-start ml-[31px]">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/orderonline")}
                    >
                      Order online
                    </Text>
                  </div>*/}

                  <div className="flex flex-col items-center justify-start ml-[27px]">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/reservation")}
                    >
                      Reservation
                    </Text>
                  </div>

                  <div className="flex flex-col items-center justify-start ml-[31px]">
                    <Text
                      className="common-pointer text-base text-gray-900_cc"
                      size="txtOpenSansRomanRegular16Gray900cc"
                      onClick={() => navigate("/contact")}
                    >
                      Contact us
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer flex h-[50px] sm:hidden items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
                  leftIcon={
                    <Img
                      className="h-6 sm:hidden m-[13px]"
                      src="images/img_cart.svg"
                      alt="cart"
                    />
                  }
                  shape="circle"
                  color="white_A700"
                  variant="fill"
                >
                  <div className="sm:hidden"></div>
                </Button>

                <Button
                  className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                  shape="round"
                  color="red_400"
                  size="sm"
                  variant="fill"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </Button>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
