const BodyCopy = (prop) =>{
    return(
        <div>
            <h2>{prop.title}</h2>
            <div className="container__body">
            <p>{prop.copy}</p>
            <p>{prop.secondcopy}</p>
            </div>
        </div>
    );
}

export default BodyCopy;