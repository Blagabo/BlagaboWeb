const Button = ({children, className, onClick}) => {
  return (
    <button
      className={`rounded-md p-2 hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
