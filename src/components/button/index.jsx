import { createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Buttons = ({ as, children, size,className, variant , ...props }) => {
  return createElement(
    as,
    {
      type: "button",
      className: classNames(
        " rounded-full flex items-center justify-center font-bold  transition-all ",
        {
          "px-4 h-8 text-sm": size === "small",
          "px-4 h-9": size === "normal",
          "px-4 text-[1.063rem] h-[3.25rem] w-full": size === 'large',
          " bg-[color:var(--color-primary)] text-white hover:opacity-90": variant === "primary",
          " bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant === "white",
          " border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e] ": variant === "white-outline",
          [className]:true

        },
      ),
      ...props
    },
    children,
  );
};

Buttons.propTypes = {
  as: PropTypes.any,
  size: PropTypes.oneOf(["normal", "large", "small"]),
  variant: PropTypes.oneOf(["primary", "white","white-outline"]),
  props:PropTypes.object,
  className:PropTypes.string
};

Buttons.defaultProps = {
  size: "normal",
  variant: "primary",
  as: "button",
};

export default Buttons;
