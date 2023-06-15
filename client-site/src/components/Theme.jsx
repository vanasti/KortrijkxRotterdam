const Theme = (prop) => {
    return (
        <div className="theme">
            {/* svg of custom disc */}
            <img src="/desktop/vinyl.svg" alt="vinyl" />
            <div className="theme__flex">
            <p>Invasie thema</p>
            <p>{prop.theme}</p>
            </div>
        </div>
    );
}

export default Theme;