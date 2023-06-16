const Member = ({path, name, role}) => {
    return (
        <div>
            <img src={path} alt="member" />
            <div>
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
    );
}
export default Member;