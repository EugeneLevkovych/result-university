
export default function WayToTeach({title, description}) {
            // function WayToTeach(props) {
    return (
        <li>
        <p>
            {/* <strong>{props.title}</strong>{props.description} */}
            <strong>{title}</strong>{description}
        </p>
    </li>
    )
}