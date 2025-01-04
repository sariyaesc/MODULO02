import toast from "react-hot-toast"

export default function Button({noty,children}){
    const handleClick=() => toast.success(noty)
    return(
        <button className="px-5 py-2.5 relative rounded group overflow-hidden
         font-medium bg-sky-950 text-white inline-block" onClick={handleClick}>
            
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all
            duration-200 ease-out transform translate-y-0 bg-sky-800 group-hover:h-full opacity-90">

            </span>
            
            <span className="relative group-hover:text-white">{children}</span>
        </button>
    )
}