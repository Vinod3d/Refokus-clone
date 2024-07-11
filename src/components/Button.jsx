import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = 'Get Started'}) => {
  return (
    <div className='object-contain px-3 py-2 bg-zinc-100 text-black rounded-full inline-flex items-center gap-3 '>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button