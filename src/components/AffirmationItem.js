const AffirmationItem = (props) => {
    return (
        <li>
            <p>
                {props.title}
            </p>
            <button className="delete" onClick={props.click}>
                &#10005;
            </button>
        </li>
    )
}

export default AffirmationItem;