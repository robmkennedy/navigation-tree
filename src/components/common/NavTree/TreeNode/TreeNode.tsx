import { Fragment, ReactNode, useState } from 'react';
import Tree from 'components/common/NavTree/Tree/Tree';
import TreeButton from 'components/common/NavTree/TreeButton/TreeButton';
import { TreeItem } from 'utils/types';
import './TreeNode.scss';

type TreeNodeProps<T = unknown> = {
    treeItem: TreeItem<T>,
    selectedItem: T | undefined,
    render: (item: T) => ReactNode,
    onSelect: <T>(item: T) => void
};

/**
 * A common component used to display a single node of the nav tree.
 * This uses generics to allow it to accept an item of any type from the Tree component.
 * Therefore we use a render property function that will return the react component to display.
 * If this is a leaf node, then we do not show the expand/collapse button.
 * If there are children, we will build a sub-tree within this child.
 */
export default function TreeNode<T>(props: TreeNodeProps<T>) {
    const { treeItem, selectedItem, onSelect, render } = props;

    const [showChildren, setShowChildren] = useState<boolean>(false);

    const handleToggle = (event: React.MouseEvent, item: T) => {
        event.stopPropagation();
        setShowChildren(!showChildren);
    };

    const handleClick = () => {
        onSelect(treeItem.item);
    };

    const activeString = treeItem.item === selectedItem ? 'active' : '';

    let content = null;
    if (typeof treeItem.childItems === 'undefined' || treeItem.childItems.length === 0) {
        content = (
            <div className={`rk-tree-node ${activeString}`} onClick={handleClick}>
                {render(treeItem.item)}
            </div >
        );
    }
    else {
        content = (
            <Fragment>
                <div className={`rk-tree-node ${activeString}`} onClick={handleClick}>
                    <TreeButton isOpen={showChildren} onClick={(e) => { handleToggle(e, treeItem.item) }} />
                    {render(treeItem.item)}
                </div>
                {showChildren && <Tree childItems={treeItem.childItems} selectedItem={selectedItem} onSelect={onSelect} render={render} />}
            </Fragment>
        );
    }

    return (<Fragment>{content}</Fragment>);
}