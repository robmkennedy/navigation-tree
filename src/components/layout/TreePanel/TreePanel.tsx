import NavTree from 'components/common/NavTree/NavTree';
import { useAppDispatch } from 'hooks/stateHooks';
import { useSelectedContentItemSelector } from 'hooks/selectorHooks';
import { contentItemSelected } from 'state/slices/appSlice';
import ContentNode from 'components/content/ContentNode/ContentNode';
import { ContentItem, TreeItem } from 'utils/types';
import './TreePanel.scss';

type TreePanelProps = {
    items: TreeItem<ContentItem>[]
};

/**
 * A component used to show a tree view of the content items. It is located
 * on the left side of the MainPanel. This uses the common NavTree component.
 * This will listen to changes in the redux store if anyone selects an item from 
 * the list on the right.
 * The NavTree is similar to the NavList. However, a Navtree needs to know the
 * tree structure of the list of items. For this it needs it needs to supply an array
 * of TreeItem types. The TreeItem type contains recursive TreeItems children, and
 * also uses generics to facilitate and object in the NavTree component.
 */
const TreePanel = ({ items }: TreePanelProps) => {
    const dispatch = useAppDispatch();
    const selectedItem = useSelectedContentItemSelector();

    function render (item: ContentItem) {
        return <ContentNode item={item} />;
    }

    function handleSelect<ContentItem>(item: ContentItem) {
        dispatch(contentItemSelected(item));
    };

    return (
        <section className='rk-tree-panel'>
            <NavTree
                rootItems={items}
                selectedItem={selectedItem}
                render={render}
                onSelect={handleSelect}
            />
        </section>
    );
}

export default TreePanel;