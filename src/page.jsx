import { Sites, Socials } from "./constants/socialsData"
import logo from "./assets/logo.jpg"

const Page = () => {
    return <>
            <main className="container">
                <h1>ISMOIL DEV <span>{"< />"}</span></h1>
                <p className="topTxt">O'zingizga qulay usulda bog'laning !</p>
                <div className="socials">
                    {Socials.map((item, i) => (
                        <a key={i} href={item.link} className="social">
                                <img src={item.logo} alt={item.name} />
                                <span>
                                    <strong>{item.name}</strong>
                                    <p>{item.username}</p>
                                </span>
                        </a>
                    ))}
                </div>
                <div className="siteTxt">
                    <p>Qo'shimcha aloqa saytlar</p>
                    <div className="siteTxtArr">
                        <span></span><p>⇩</p><span></span>
                    </div>
                </div>
                <div className="sites">
                    {Sites.map((item, i) => (
                         <a key={i} href={item.link} className="site">
                                <img src={item.logo} alt={item.name} />
                                <span>
                                    <strong>{item.name}</strong>
                                    <p>{item.username}</p>
                                </span>
                        </a>
                    ))}
                </div>
            </main>
            <footer>RUZMETOV ISMOIL. <span>Connect with us anytime</span></footer>
    </>
}

export default Page