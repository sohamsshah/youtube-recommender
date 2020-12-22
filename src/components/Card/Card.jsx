import './Card.css'
export default function Card(props){
    return(

      <div class="outer-card" style={{padding:"2rem"}}>
        <div class="card" style={{width: "18rem", padding:"1rem"}}>
      <img class="card-img-top" src={props.channel.img} alt="Card"></img>
        <div class="card-body">
          <h5 class="card-title" style={{paddingTop:"0.5rem"}}><h4><b>{props.channel.name}</b></h4> </h5>
          <div class="card-footer" style={{backgroundColor:"white"}}> 
            {props.channel.tags.map((tag) => (
              <button style={{padding:"0.5rem", color:"white", backgroundColor:"#282828"}} type="button" class="btn btn-sm">{tag}</button>
        ))}
        </div>
          <a href={props.channel.url} class="btn" style={{color:"#282828", fontWeight:"bold", textDecoration:"underline"}}>Visit Channel</a>
        </div>
        </div>
  </div>   
    )
}
