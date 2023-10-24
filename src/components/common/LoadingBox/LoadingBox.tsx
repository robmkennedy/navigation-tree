import { useTranslation } from 'react-i18next';
import './LoadingBox.scss';

type LoadingBoxProps = {
    message?: string
};

/**
 * A component used to display a loading message to the user.
 * If no specific message prop is supplied, a default loading message is used.
 */
const LoadingBox = ({ message }: LoadingBoxProps) => {
    const { t } = useTranslation();
    
    const displayMessage = message || t('common.loading');

    return (
        <div className='rk-loading-box'>
            <div className='rk-spinner' />
            <h5>{displayMessage}</h5>
        </div>
    );
};

export default LoadingBox;