import "./pointer.css"
import Link from "next/link";


const Point = () => {
    return (
        <div>
            <div className="sub_section3">
                <div className="contact_card">
                    <p className="card_title">
                        Wanna join the interno?
                    </p>
                    <p className="card_inv">
                        You're just a step away.
                    </p>
                    <div className="button3">
                        <Link href="/contact" className="Link">
                            <div className="click3">
                                <p>
                                    Contact Us
                                </p>
                                <img src="/vectordark.png" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Point;