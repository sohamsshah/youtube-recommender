import './Card.css'
export default function Card(props){
    return(

      <div className="outer-card">
        <div className="card">
      <img className="card-img-top" src={props.channel.img} alt="Card"></img>
        <div className="card-body">
          <h5 className="card-title"><h4><b>{props.channel.name}</b></h4> </h5>
          <div className="card-footer"> 
            {props.channel.tags.map((tag) => (
              <button type="button" className="btn btn-sm disabled tag">{tag}</button>
        ))}
        </div>
          <a href={props.channel.url} className="btn card-footer-link">Visit Channel</a>
        </div>
        </div>
  </div>   
    )
}
