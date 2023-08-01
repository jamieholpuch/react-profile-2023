import "../styles/home.css";
import home from "../assets/Home.png"

export default function Home() {
    return (
            <div>
                <header className="header">
                <a href="#contact">
                    <img className="hero" src={home} alt="homepage hero image" />
                    </a>
                </header>
                <footer className="footer">
                    <a href="https://github.com/jamieholpuch">checkout more on my github</a>
                </footer>
            </div>
          );
        }
    