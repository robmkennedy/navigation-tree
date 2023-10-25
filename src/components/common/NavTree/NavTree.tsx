import TreeNode from 'components/common/NavTree/TreeNode/TreeNode';
import { ReactNode, RefObject, useRef } from 'react';
import { TreeItem } from 'utils/types';
import './NavTree.scss'

type NavTreeProps<T> = {
    rootItems: TreeItem<T>[],
    selectedItem: T | undefined,
    render: (item: T) => ReactNode,
    onSelect: <T>(item: T) => void,
    emptyText?: string
};

/**
 * A common component used to display a list of items.
 * This will be a reusable component. We use generics to allow it to accept a list of items 
 * of any type. However, this still needs to understand how to render each item in the tree. 
 * Therefore we use a render property function that will return the react component to display.
 * We allow an optional onSelect function prop which will return the object type when it is clicked.
 * If no items are supplied, a default message is displayed to the user.
 * In order to build a tree structure, the root items must be an array of TreeItem. This provides
 * the parent / child structure.
 */
export default function NavTree<T>(props: NavTreeProps<T>) {
    const { rootItems, selectedItem, onSelect, render, emptyText } = props;

    const ref = useRef() as RefObject<HTMLDivElement>;

    let content = null;
    if (rootItems.length === 0) {
        content = (
            <div>{emptyText}</div>
        );
    }
    else {
        content = rootItems.map((treeItem, index) => {
            return <TreeNode treeItem={treeItem} selectedItem={selectedItem} onSelect={onSelect} render={render} key={index} />;
        })
    }

    return (
        <div ref={ref} className='rk-nav-tree'>
            {content}
        </div>
    );
}