import { ContentItem } from 'utils/types';
import './ContentNode.scss';

type ContentNodeProps = {
    item: ContentItem
};

/**
 * A small component used to display the details of a content item in the
 * tree view.
 */
const ContentNode = ({ item }: ContentNodeProps) => {

    return (
        <div className='rk-content-node'>
            <h5>{item.name}</h5>
        </div>
    );
};

export default ContentNode;