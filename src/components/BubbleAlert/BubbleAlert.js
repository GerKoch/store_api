import './BubbleAlert.css';

const BubbleAlert = ({ value }) => {

    const getNumber = (n) =>  {
        if (!n) {return ' '}
        return n > 9 ? '9+' : n
    }

    return(
        <span className="bubbleAlert">
            {getNumber(value)}
        </span>
    )
}

export default BubbleAlert;