export function ButtonGradiant({ className, title, onClick, ...props }){
    return (
        <button className={`group relative overflow-hidden text-lg shadow text-white bg-gradient-to-r from-primary to-secondary  ${className}`} {...props} onClick={onClick}>
            {/* <span className="relative text-white">{title}</span> */}
            {title}
        </button>

    )
  }
  