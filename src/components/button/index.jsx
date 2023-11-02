import { createElement } from "react";
import classNames from "classnames";
import  PropTypes  from "prop-types";

const Buttons = ({children,size}) => {
  return  createElement("button",{
    className:classNames("bg-[#1d9bf0] text-white rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors ",{
        "px-4 h-9" :size ==="normal",
        "px-4 h-[52px] w-full text-[17px]" :size ==="large",

    })
  },children)
  
};
 
Buttons.propTypes = {
    size:PropTypes.oneOf(["normal","large"])
}

Buttons.defaultProps ={
    size:"normal"
}

export default Buttons;
 