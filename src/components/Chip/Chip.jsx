import './Chip.css'
export default function Chips(props){
    return(
        <div className="outer-chip">
        <div className="chip">
            {props.name}
        </div>
        </div>
    )
}