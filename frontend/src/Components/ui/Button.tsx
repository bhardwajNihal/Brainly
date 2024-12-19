import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary",
    size: "sm" | "md" | "lg" | "xl",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onclick?: () => void
}


export function Button(props: ButtonProps) {

    const { variant, size, text, startIcon, endIcon, onclick } = props;

    const VariantClasses = {
        primary: "bg-cyan-500 text-white",
        secondary: "bg-cyan-50 text-cyan-600",
    }

    const sizeClasses = {
        sm: "text-sm px-4 py-1",
        md: "text-md px-6 py-1",
        lg: "text-lg px-8 py-1",
        xl: "text-xl px-10 py-2",
    }

    const defaultStyles = "flex justify-between gap-2 items-center rounded "

    return <button 
        onClick={onclick}
        className={`${defaultStyles} ${VariantClasses[variant]} ${sizeClasses[size]}`}>
            {(startIcon) ? <div>{startIcon}</div> : null}
            {text}
            {(endIcon) ? <div>{endIcon}</div> : null}
        </button>
}