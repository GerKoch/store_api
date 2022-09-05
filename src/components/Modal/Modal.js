import './Modal.css';

const Modal = ({ children, state }) => {
    return (
        <>
            {state &&
                <div className="Overlay">
                    <div className="ContenedorModal">
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;