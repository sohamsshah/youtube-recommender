import './Card.css'
export default function Card(props){
    return(
        <div class="card" style={{width: "18rem"}}>
      <img class="card-img-top" src="..." alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title"><h4><b>{props.channel.name}</b></h4> </h5>
          <p class="card-text"><ul className="tags"> Tags: 
            {props.channel.tags.map((tag) => (
        <li className="list-non-bullet tag list-item-inline">{tag+" "}</li>
        ))}
         </ul></p>
          <a href={props.channel.url} class="btn">Go somewhere</a>
        </div>
  </div>
    )
}