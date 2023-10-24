import { ReactNode } from 'react';
import './NavTree.scss';

type NavTreeProps<T> = {
    items: T[],
    selectedItem: T | undefined,
    render: (item: T) => ReactNode,
    onSelect: (item: T) => void,
    getId: (item: T) => string,
    getParentId: (item: T) => string,
    emptyText?: string
};

/**
 * A common component used to display a list of items.
 * This will be a reusable component. We use generics to allow it to accept a list of items 
 * of any type. However, this still needs to understand how to render each item in the tree. 
 * Therefore we use a render property function that will return the react component to display.
 * We allow an optional onSelect function prop which will return the object type when it is clicked.
 * If no items are supplied, a default message is displayed to the user.
 * In order to build a tree structure, every item must have an id and parent id. To provide these
 * from generic types, we accept getId and getParentId functions.
 */
export default function NavTree<T>(props: NavTreeProps<T>) {
    const { items, selectedItem, onSelect, render, getId, getParentId, emptyText } = props;

    let content = null;
    if (items.length === 0) {
        content = (
            <div>{emptyText || ''}</div>
        );
    }
    else {
        content = items.map((item, index) => {
            return <div className='rk-nav-tree-item' key={index} onClick={() => onSelect(item)}>{render(item)}</div>
        });
    }

    return (
        <div className='rk-nav-tree'>
            {content}
        </div>
    );
}