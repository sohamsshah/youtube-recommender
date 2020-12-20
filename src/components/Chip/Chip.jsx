import './Chip.css'
export default function Chip(props){
    return(
        <div className="outer-chip">
        <div className="chip">
            {props.category}
        </div>
        </div>
    )
}