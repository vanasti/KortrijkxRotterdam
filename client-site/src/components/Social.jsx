const Social = (prop) =>{
    return(
        <div className="social">
            <img src={prop.path} alt="social__icon" />
            <p>{prop.social}</p>
        </div>
    );
}

export default Social;