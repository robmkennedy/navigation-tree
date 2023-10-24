import NavList from 'components/common/NavList/NavList';
import ContentDetails from 'components/content/ContentDetails/ContentDetails';
import { useSelectedContentItemSelector } from 'hooks/selectorHooks';
import { useAppDispatch } from 'hooks/stateHooks';
import { contentItemSelected } from 'state/slices/appSlice';
import { ContentItem } from 'utils/types';
import './ListPanel.scss';

type ListPanelProps = {
    items: ContentItem[]
};

/**
 * A component used to show the list of content items, located on the right side
 * of the app. It uses the common NavList component and provides a rendering function
 * for each item. 
 */
const ListPanel = ({ items }: ListPanelProps) => {
    const dispatch = useAppDispatch();
    const selectedItem = useSelectedContentItemSelector();

    const render = (contentItem: ContentItem) => {
        return <ContentDetails item={contentItem} />;
    }

    const handleSelect = (contentItem: ContentItem) => {
        dispatch(contentItemSelected(contentItem));
    }

    return (
        <section className='rk-list-panel'>
            <NavList items={items} selectedItem={selectedItem} render={render} onSelect={handleSelect} />
        </section>
    );
}

export default ListPanel;

