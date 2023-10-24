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
            <h5>{item.name}</h5>
        </div>
    );
};

export default ContentDetails;