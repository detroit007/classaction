export function Button({ className, title, onClick, ...props }){
    return (
        <button className={`group relative overflow-hidden text-lg shadow ${className}`} {...props} onClick={onClick}>
            <span className="relative text-white">{title}</span>
        </button>

    )
  }
  