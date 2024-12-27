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
        primary: "bg-purple-600 text-white hover:bg-blue-800",
        secondary: "bg-purple-200 text-purple-600 hover:bg-blue-50",
    }

    const sizeClasses = {
        sm: "text-sm px-2 py-2",
        md: "text-md px-3 py-2",    
        lg: "text-lg px-4 py-2",
        xl: "text-xl px-8 py-3",
    }

    const defaultStyles = `flex justify-between gap-3 items-center rounded font-medium `

    return <button 
        onClick={onclick}
        className={`${defaultStyles} ${VariantClasses[variant]} ${sizeClasses[size]}`}>
            {(startIcon) ? <div>{startIcon}</div> : null}
            {text}
            {(endIcon) ? <div>{endIcon}</div> : null}
        </button>
}