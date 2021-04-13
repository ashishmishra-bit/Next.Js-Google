function Avatar({ url , className }) {
    return(
    <img loading="lazy" src={url} alt="profile" className={`h-10 rounded-full cursor-pointer transition animate-bounce duration-150 transform hover:scale-110 ${className}`}/>

    );

}

export default Avatar;
