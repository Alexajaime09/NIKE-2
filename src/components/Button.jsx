

const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center px-7 py-4
    font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
        {label}

        <img src={iconURL} 
        alt="arrow right"
        className="ml-2 rounded-full w-5 h-5" 
        />
    </button>
    
  )
}

export default Button
