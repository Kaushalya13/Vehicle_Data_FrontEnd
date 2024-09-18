
const Button = (props: { title: string , color?:string,className?: string, onClick?: () => void}) => {
  return (
    <div className="pr-10">
      <button className={`px-4 py-2 text-white ${props.color ? props.color : 'bg-[#cdcdd0]'}`}
      onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
}

export default Button
