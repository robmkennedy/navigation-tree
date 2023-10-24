import { useTranslation } from 'react-i18next';
import './ErrorBox.scss';

type ErrorBoxProps = {
    message?: string
};

/**
 * A component used throughout the app to display an error to the user.
 * If an error message is not supplied, default error text is used.
 */
const ErrorBox = ({ message }: ErrorBoxProps) => {
    const { t } = useTranslation();
    
    const displayMessage = message || t('common.error');

    return (
        <div className='rk-error-box'>
            <h5>{displayMessage}</h5>
        </div>
    );
}

export default ErrorBox;