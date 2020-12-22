import './Footer.css';
export default function Footer(){
    return(
        <div style={{paddingTop:"4rem"}}>
            <footer className="footer">
            <div className="container container-center">
                <h3>Made with <span className="heart">♥</span> by <span className="name">@sohamsshah</span></h3>
            <ul className="list-non-bullet">
                <li className="list-item-inline">
                    <a href="https://github.com/sohamsshah/youtube-recommender" target="_blank" rel="noopener noreferrer" className="link">View Source</a><span style={{color:"white"}}> | </span>
                    <a href="https://github.com/sohamsshah/" target="_blank" rel="noopener noreferrer" className="link">Contribute </a>  
                </li>
            </ul>
        </div>
        </footer>
        </div>
    )
}