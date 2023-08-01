import { Link } from "react-router-dom";

const ButtonMailTo = ({ mailTo, label }) => {

    return (
        <Link className="link" to='/support'
        onClick={(e) => {
            window.location.href = mailTo;
            e.preventDefault();
        }}
        >
            {label}
        </Link> 
    )
    }

export default ButtonMailTo