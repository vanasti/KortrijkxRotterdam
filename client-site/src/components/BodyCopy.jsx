const BodyCopy = ({title, copy, secondcopy}) =>{
    return(
        <div className="bodyCopy">
            <h2 className="title title--black">{title}</h2>
            <div className="container__body">
            <p className="copy">{copy}</p>
            <p className="copy">{secondcopy}</p>
            </div>
        </div>
    );
}

export default BodyCopy;