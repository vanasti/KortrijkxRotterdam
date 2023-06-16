const Member = ({ path, name, role }) => {
    return (
        <div className="member">
            <img src={path} alt="member" />
            <div className="member__block">
                <p className="member__copy">{name}</p>
                <p className="member__copy">{role}</p>
            </div>
        </div>
    );
}
export default Member;