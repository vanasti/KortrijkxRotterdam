const SecretLabel = (prop) => {
    return (
        <div>
            <div>
                <h3>{prop.title}</h3>
            </div>
            <p>{prop.copy}</p>
            {/* custom source */}
            <img src={prop.path} alt="smiley" />
        </div>
    );
}
export default SecretLabel;