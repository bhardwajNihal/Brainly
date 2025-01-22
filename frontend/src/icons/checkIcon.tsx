interface checkProp{
    size: "sm" |"md" |"lg"
}

const checkSize = { 
    sm : "size-4",
    md : "size-6",
    lg : "size-8",
}

export function CheckIcon(prop:checkProp){

    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={checkSize[prop.size]}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
  
  
  
}