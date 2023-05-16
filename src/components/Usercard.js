import './Usercard.css';

const Usercard = (props) => {

    const { username, avatar, age, hobby } = props;

    return (
    <div className="profile">
        <img src={avatar} alt="Profile Picture" />
        <strong>{username}</strong>
        <br></br>
        <small>{age}</small>
        <p>{hobby}</p>
    </div>
    )
}

export default Usercard;

