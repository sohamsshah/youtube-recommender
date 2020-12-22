import './Card.css'
export default function Card(props){
    return(
        <div class="outer-card" style={{padding:"2rem"}}>
        <div class="card" style={{width: "18rem", padding:"2rem"}}>
      <img class="card-img-top" src={props.channel.img} alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title"><h4><b>{props.channel.name}</b></h4> </h5>
          <p class="card-text"><ul className="tags"> {`Tags:\n`} 
            {props.channel.tags.map((tag) => (
        <li className="list-non-bullet tag list-item-inline">{tag+" "}</li>
        ))}
         </ul></p>
          <a href={props.channel.url} class="btn">Visit Channel</a>
        </div>
        </div>
  </div>
    )
}