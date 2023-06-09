const Sticker = ({settings}) => {
    return (
       <div className="sticker-item">
            <h1>{settings.title}</h1>
            <ul>
                <li>{settings.id}</li>
                <li>{settings.shape}</li>
                <li>{settings.color}</li>
                <li>{settings.fill}</li>
            </ul>
       </div>
    )
}

export default Sticker;