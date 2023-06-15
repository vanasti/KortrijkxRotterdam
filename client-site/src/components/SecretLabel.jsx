const SecretLabel = ({title, copy, path}) => {
    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <p>{copy}</p>
            {/* custom source */}
            <img src={path} alt="smiley" />
        </div>
    );
}
export default SecretLabel;