export default function Root(props) {
    console.log("Home", props.name);
    return <section>{props.name} is mounted!</section>;
}
