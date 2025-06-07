import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
    return createPortal(
        <section>
            {copied && (
                <div style={{ position: "absolute", bottom: "0", right: "3"}}>
                    Copied to clipboard
                </div>
            )}
        </section>,
        document.querySelector("#portal-popup")
    )
}

export default PopupContent