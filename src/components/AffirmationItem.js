const AffirmationItem = (props) => {
    return (
        <li>
            <p>
                {props.title}
            </p>
            <button className="delete" onClick={props.click}>
                <span className="sr-only">delete affirmation</span>
                &#10005;
            </button>
        </li>
    )
}

export default AffirmationItem;