import "./pointer.css"
import Link from "next/link";
import Transition from "../Transition/page";
import Transition2 from "../Trsansition2/page";


const Point = () => {
    return (
        <div>
            <div className="sub_section3">
                <div className="contact_card">
                    <Transition>
                        <p className="card_title">
                            Wanna join the interno?
                        </p>
                        <p className="card_inv">
                            You're just a step away.
                        </p>
                    </Transition>
                    <div className="button3">
                        <Transition2>
                            <Link href="/contact" className="Link">
                                <div className="click3">
                                    <p>
                                        Book Now
                                    </p>
                                </div>
                            </Link>
                        </Transition2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Point;