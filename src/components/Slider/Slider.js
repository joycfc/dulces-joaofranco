import React from "react";
import { SliderData } from "./SliderData";

const Slider = () => {
    return (
        <>
            {SliderData.map((slide, index) => {
                return;
                <img src={require(slide.image)} alt="postres" />;
            })}
        </>
    );
};

export default Slider;
