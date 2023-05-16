

const Button = (props) => {

const { message } = props;

    const handleSubmit = () => {
        alert(message)
      }

    return 
    <div>
        <h1></h1>
    <button 
        onClick={handleSubmit}>
            Click Me
        </button>
    </div>
}

export default Button;