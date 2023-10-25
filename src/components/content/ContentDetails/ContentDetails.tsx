import { ContentItem } from 'utils/types';
import './ContentDetails.scss';

type ContentDetailsProps = {
    item: ContentItem
};

/**
 * A small component used to display the details of a content item in the
 * list view on the right panel of the application.
 */
const ContentDetails = ({ item }: ContentDetailsProps) => {

    return (
        <div className='rk-content-details'>
            <h4>{item.name}</h4>
            <p>{item.content}</p>
        </div>
    );
};

export default ContentDetails;