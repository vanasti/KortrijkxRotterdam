const Member = (prop) => {
    return (
        <div>
            <img src={prop.path} alt="member" />
            <div>
                <p>{prop.name}</p>
                <p>{prop.role}</p>
            </div>
        </div>
    );
}
export default Member;