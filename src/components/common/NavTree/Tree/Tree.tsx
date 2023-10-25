import TreeNode from 'components/common/NavTree/TreeNode/TreeNode';
import { ReactNode } from 'react';
import { TreeItem } from 'utils/types';

type TreeProps<T = unknown> = {
    childItems: TreeItem<T>[],
    selectedItem: T | undefined,
    render: (item: T) => ReactNode,
    onSelect: <T>(item: T) => void
};

/**
 * A common component used to display a single node of the nav tree.
 * This uses generics to allow it to accept an item of any type from the NavTree.
 * The render function specifies how to render this particular node. 
 * Therefore we use a render property function that will return the react component to display.
 * If this is a leaf node, then we do not show the expand/collapse button.
 */
export default function Tree<T>(props: TreeProps<T>) {
    const { childItems, selectedItem, onSelect, render } = props;


    let content = childItems.map((childItem, index) => {
        return <TreeNode treeItem={childItem} selectedItem={selectedItem} onSelect={onSelect} render={render} key={index} />;
    })

    return (
        <div className='rk-tree'>
            {content}
        </div>
    );
}

