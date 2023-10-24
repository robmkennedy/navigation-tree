import NavTree from 'components/common/NavTree/NavTree';
import ContentDetails from 'components/content/ContentDetails/ContentDetails';
import { useSelectedContentItemSelector } from 'hooks/selectorHooks';
import { useAppDispatch } from 'hooks/stateHooks';
import { contentItemSelected } from 'state/slices/appSlice';
import { ContentItem } from 'utils/types';
import './TreePanel.scss';

type TreePanelProps = {
    items: ContentItem[]
};

/**
 * A component used to show a tree view of the content items. It is located
 * on the left side of the MainPanel. This uses the common NavTree component.
 * This will listen to changes in the redux store if anyone selects an item from 
 * the list on the right.
 * The NavTree is similar to the NavList. However, a Navtree needs to know the
 * tree structure of the list of items. Fot this it needs an id and parent-id for every
 * item in the list. To provide this, we inject id and parentId callback functions that
 * provide the extraction of these parameters. This allows use to use any objects in the
 * NavTree component.
 */
const TreePanel = ({ items }: TreePanelProps) => {
    const dispatch = useAppDispatch();
    const selectedItem = useSelectedContentItemSelector();

    const render = (contentItem: ContentItem) => {
        return <ContentDetails item={contentItem} />;
    }

    const getId = (contentItem: ContentItem) => {
        return contentItem.id;
    };

    const getParentId = (contentItem: ContentItem) => {
        return contentItem.parent_id;
    };

    const handleSelect = (contentItem: ContentItem) => {
        dispatch(contentItemSelected(contentItem));
    };

    return (
        <section className='rk-tree-panel'>
            <NavTree
                items={items}
                selectedItem={selectedItem}
                getId={getId}
                getParentId={getParentId}
                render={render}
                onSelect={handleSelect}
            />
        </section>
    );
}

export default TreePanel;