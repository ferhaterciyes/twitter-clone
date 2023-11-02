import { Link } from "react-router-dom"
import { numberFormat } from "../../../utils/formats"

const Topic = ({item}) => {
  return (
    <Link
    className="py-3 px-4 transition-colors hover:bg-white/[0.03] relative"
    to="">
       <div className="text-[13px] text-[#71767b] leading-4">{item.title}</div>
        <div className="text-[15px] font-bold leading-5 mt-0.5">
           {item.topic.type === "tag" && "#"} {item.topic.value}
        </div>
        {item?.postCount &&(
            <div className="text-[13px] mt-1 leading-4 text-[#71767b]">
                {numberFormat(item.postCount)} posts
            </div>
        )}
        <button 
        type="button"
        onClick={() => e => {
            e.preventDefault()
        }}
        className="w-[34.75px] h-[34.75px] rounded-full text-[#71767b] absolute top-1.5 right-2 flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors">
        <svg
        width={18.75}
         viewBox="0 0 24 24" >
               
        <path 
        fill="currentColor"
        d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
        </button>
    </Link>
  )
}

export default Topic