
const Card = ({title, icon, techStack}) => {
  return (
    <div className='shadow max-w-xl max-h-xl min-h-[280px] rounded-lg dark:bg-base-300'>
        <div className='py-3 px-6'>
            <div className='flex items-center gap-4 py-3'>
                    {icon}
                <h1 className='font-kanit text-xl'>{title}</h1>
            </div>

            <div className='grid grid-cols-3 place-items-center gap-2 py-4'>
                {techStack.map((item, index) =>
                    <img src={item.imgUrl} alt="Icon Url" className='w-13 h-13 grayscale-100  hover:grayscale-0 transition-all ease-in duration-200' key={index} />
                )}
            </div>
        </div>
    </div>
  )
}

export default Card
