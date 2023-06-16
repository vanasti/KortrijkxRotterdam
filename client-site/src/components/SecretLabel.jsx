const SecretLabel = ({ title, copy }) => {
    return (
        <div className="secretlabel">
            <div>
                <h2 className="title__black">{title}</h2>
            </div>
            <p className="copy copy--br">{copy}</p>
            {/* custom source */}
        </div>
    );
}
export default SecretLabel;