import './Chip.css'
export default function Chip(props){
    return(
        <div className="outer-chip">
        {(props.category === props.selected)?(<div className="chip selected-chip">
            {props.category}
        </div>):
        (<div className="chip">
        {props.category}
    </div>)}
        </div>
    )
}