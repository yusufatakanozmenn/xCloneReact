import {createElement} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Button({size, children}) {
    return createElement('button', {
            className: classNames("bg-[#1d9bf0] rounded-full flex item-center text-bold", {
                "px-4 py-2   text-xl": size === "normal",
                "px-6 py-3   text-2xl": size === "large",
            })
        }
        , children)

}
Button.prototype = {
    size: PropTypes.oneOf(['normal', 'large']),
}
Button.defaultProps = {
    size: 'normal',
}
