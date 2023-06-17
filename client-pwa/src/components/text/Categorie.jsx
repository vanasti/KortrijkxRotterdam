const Categorie = ({ content, icon}) => {
    console.log(content);
    return (
        <p className={icon ? "categorie" : "result__page"}>{content}</p>
    )
}


export default Categorie;