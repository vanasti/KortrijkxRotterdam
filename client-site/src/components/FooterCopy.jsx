const FooterCopy = (prop) => {
    return (
        <div>
            <h3>{prop.title}</h3>
            <div>
                <p>{prop.subtitle}</p>
                <ul>
                    <li>{prop.copy}</li>
                    <li>{prop.secondcopy}</li>
                </ul>
            </div>
        </div>
    );
}
export default FooterCopy;