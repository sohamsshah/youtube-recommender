import './Card.css'
export default function Card(props){
    return(
    <div class="card">
        <img className="image" src="http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg" alt="dummy"></img>
        <div class="card-container">
            
            <h4><b>{props.channel.name}</b></h4> 
        <ul className="tags">
            {props.channel.tags.map((tag) => (
        <li className="list-non-bullet tag list-item-inline">{tag+" "}</li>
        ))}
         </ul>
           
        </div>
    </div>)
}