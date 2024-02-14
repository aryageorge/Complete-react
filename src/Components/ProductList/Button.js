
function Button(props){
return <button onClick={props.eventHandler} className="btn btn-primary mt-3" style={{marginLeft:10}} disabled={props.disable}>{props.children}</button>
}
export default Button;