import {star} from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="pro5"
      className="w-[280px] h-[280px] cursor-pointer" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt=""
        width={24}
        height={24} />
      </div>
      <div>
        {name}
      </div>

    </div>
  )
}

export default PopularProductCard
