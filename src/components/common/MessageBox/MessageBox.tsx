import './MessageBox.scss';

type MessageBoxProps = {
    message: string
};

/**
 * A common component used to display a message to the user.
 */
const MessageBox = ({ message }: MessageBoxProps) => {

    return (
        <div className='rk-message-box'>
            <h5>{message}</h5>
        </div>
    );
};

export default MessageBox;