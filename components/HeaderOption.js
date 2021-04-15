function HeaderOption({ Icon , title , selected }) {
    return (
        <div className={`flex items-center space-x-1 border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500 pb-2 cursor-pointer ${selected && "text-blue-500 border-blue-500"}`}>
        <Icon className = "h-4 text-gray-500" />
        <p className = "hidden  text-gray-500 sm:inline">{title}</p>
        </div>
    )
}

export default HeaderOption;
