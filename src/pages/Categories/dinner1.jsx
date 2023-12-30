import React from "react";
import Header from "components/header";
import { Button } from "components";
import Footer from "components/Footer";
import { RatingBar } from "components";
import { useNavigate } from "react-router-dom";

const Dinner = () => {
    const navigate = useNavigate;
    return (
        <>
            <Header />
            <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
                <h1 className="Heading">
                    our dinner{" "}
                    <span
                        className="text-red-400 font-opensans text-left font-bold"
                        id="heading-span"
                    >
                        dishes
                    </span>{" "}
                </h1>
                <div className="Container">
                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="RatingBar"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>

                    <div className="dinner-Container">
                        <div className="item-container">
                            <img src={require("FoodImages/IMG-20231227-WA0004.jpg")} alt="" />
                            <p className="name">Rice</p>
                            <span className="leading-[200.00%] text-center text-gray-800 text-sm w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                consequat mi eget auctor aliquam, diam.
                            </span>
                            <RatingBar
                                className="flex justify-center w-[140px]"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={24}
                            ></RatingBar>
                            <p className="price">$25</p>
                            <Button
                                className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                                shape="round"
                                color="red_400"
                                size="sm"
                                variant="fill"
                                onClick={() => navigate("/login")}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Dinner;
