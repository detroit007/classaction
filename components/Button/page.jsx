export function Button({ className, title, onClick, textClass, ...props }){
    return (
        <button className={`group overflow-hidden text-lg shadow ${className}`} {...props} onClick={onClick}>
            {/* <span className={` text-white !${textClass}`}>{title}</span> */}
            {title}
        </button>
    )
  }
  