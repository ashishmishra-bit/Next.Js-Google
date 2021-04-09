function Avatar({ url }) {
    return(
    <img loading="lazy" src={url} alt="profile" className="h-10 rounded-full cursor-pointer transition animate-bounce duration-150 transform hover:scale-110"/>

    );

}

export default Avatar;
