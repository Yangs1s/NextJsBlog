const Button = ({ children }) => {
    return (
        <button className='w-[140px] h-12 text-lg text-green-700 bg-blue-100 p-3 rounded-lg dark:bg-red-300 dark:text-purple-900' onClick={() => alert(`thanks to ${children}`)}>{children}</button>
    )
}

export default Button;