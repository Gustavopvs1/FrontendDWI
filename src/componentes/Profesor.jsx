export default function Profesor(props){
    return(
        <>
            <h1>{props.title}</h1>
            {props.children}
       </>
    );
}