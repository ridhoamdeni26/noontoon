import PropTypes from "prop-types";

export default function PrimaryButton({
    type = "submit",
    className = "",
    disabled,
    variant = "primary",
    children,
    processing,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={`rounded-2xl py-[13px] w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outlines",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};
