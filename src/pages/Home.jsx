import './Home.css'
import Image from '../assets/th-1260053239.jpeg'

function Home() {
    return (
        <div className="topHeadlines">
        <div className="left">
            <div className="title">
                <h2>Breaking News</h2>
            </div>
            <div className="img" id="breakingImg">
                <img src={Image} alt="Breaking News" />
            </div>
            <div className="text" id="breakingNews">
                <div className="title">
                    <h2>Breaking News</h2>
                </div>
                <div className="description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quam cum, suscipit consequatur explicabo numquam rerum facere vel ducimus, enim fuga maiores reprehenderit eveniet excepturi optio adipisci? Rerum, repellendus enim.</p> <br />
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="title">
                <h2>Top Headlines</h2>
            </div>
            <div className="topNews">
                <ul>
                    <li><a href="https://www.wsj.com/articles/ukraine-fends-off-drone-attack-as-moscow-warns-west-over-jet-fighters-f6db1bb0?mod=latest_headlines">Ukraine Vs Russia</a></li>
                    <li><a href="https://www.wsj.com/articles/nas-hip-hop-interview-f7da9977?mod=latest_headlines">Lil Nas turns 50</a></li>
                    <li><a href="https://www.wsj.com/articles/nas-hip-hop-interview-f7da9977?mod=latest_headlines">Elon Musk doctrine</a></li>
                    <li><a href="https://www.wsj.com/articles/nas-hip-hop-interview-f7da9977?mod=latest_headlines">Is a degree worth it?</a></li>
                    <li><a href="https://www.wsj.com/articles/chatbots-will-help-our-species-endure-chat-gpt-ai-algorithm-human-design-search-engine-c31239e?mod=latest_headlines">Chatbots</a></li>
                    <li><a href="https://www.wsj.com/articles/james-gorman-morgan-stanley-ceo-595e2d4e?mod=latest_headlines">Who is James Gorman?</a></li>
                    <li><a href="https://www.wsj.com/articles/james-gorman-morgan-stanley-ceo-595e2d4e?mod=latest_headlines">New Bar exam</a></li>
                </ul>
            </div>

        </div>
    </div>
    );
}

export default Home