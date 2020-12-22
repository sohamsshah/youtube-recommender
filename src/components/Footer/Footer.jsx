import './Footer.css';
export default function Footer(){
    return(
        <div style={{paddingTop:"4rem"}}>
            <footer class="footer">
            <div class="container container-center">
                <h3>Made with <span class="heart">♥</span> by <span class="name">@sohamsshah</span></h3>
            <ul class="list-non-bullet">
                <li class="list-item-inline">
                    <a href="https://github.com/sohamsshah/" target="_blank" rel="noopener noreferrer" class="link">View Source | </a>
                    <a href="https://github.com/sohamsshah/" target="_blank" rel="noopener noreferrer" class="link">Contribute </a>  
                </li>
            </ul>
        </div>
        </footer>
        </div>
    )
}