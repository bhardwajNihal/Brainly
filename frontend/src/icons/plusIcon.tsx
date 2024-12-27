
interface plusProp{
    size: "sm" | "md" | "lg"
}

const sizeClass = {
    sm : "size-4",
    md : "size-5",
    lg : "size-6",
}

export const PlusIcon = (prop : plusProp) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={sizeClass[prop.size]}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
  
}