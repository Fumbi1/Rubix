import Link from "next/link";
import "./footer.css";

const Footer = () => {
  return <div className="footer_wrap">
    <div className="footer">
        <div className="footer_left">
            <div className="footer_image">
                <Link href="/"><img src="/rubixx.png" /></Link>
            </div>
            <div className="footer_socials">
                {/* <p>whatsapp,insta,linkedin,X</p> */}
                <a href="https://www.instagram.com/callrubix/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <img src="/insta.png" alt="" />
                </a>
                <a href="https://twitter.com/callrubix" target="_blank" rel="noopener noreferrer">
                    <img src="/tw.png" alt="" />
                </a>
            </div>
        </div>

        <div className="phone_mail">
            <p>Contact Us</p>
            <div className="phone">
                <img src="call.svg" alt="" />
                <p>07045420896</p>
            </div>
            <div className="mail">
                <p>comms.rubix@gmail.com</p>
            </div>
        </div>
    </div>
  </div>;
};
export default Footer;
