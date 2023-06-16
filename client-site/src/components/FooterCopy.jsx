const FooterCopy = ({title, subtitle, copy, secondcopy}) => {
    return (
        <div className="footerCopy">
            <h3>{title}</h3>
            <div>
                <p>{subtitle}</p>
                <div>
                    <p>{copy}</p>
                    <p>{secondcopy}</p>
                </div>
            </div>
        </div>
    );
}
export default FooterCopy;