import { ReactNode, RefObject, useEffect, useRef } from 'react';
import { isVisible } from 'utils/helpers';
import './NavList.scss';

type NavListProps<T> = {
    items: T[],
    selectedItem: T | undefined,
    render: (item: T) => ReactNode,
    onSelect: (item: T) => void,
    emptyText?: string
};

/**
 * A common component used to display a list of items.
 * This will be a reusable component. We use generics to allow it to accept a list of items 
 * of any type. However, this still needs to understand how to render each item in the list. 
 * Therefore we use a render property function that will return the react component to display.
 * We allow an optional onSelect function prop which will return the object type when it is clicked.
 * If no items are supplied, a default message is displayed to the user.
 */
export default function NavList<T>(props: NavListProps<T>) {
    const { items, selectedItem, render, onSelect, emptyText = '' } = props;

    // Maintain refs for the scrolling container and the selected item
    const containerRef = useRef() as RefObject<HTMLDivElement>;
    const selectedItemRef = useRef() as RefObject<HTMLDivElement>;

    // Scroll to the selected element if it is not already visible in the scrolling container
    useEffect(() => {
        if (selectedItemRef.current && !isVisible(containerRef, selectedItemRef)) {
            selectedItemRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [containerRef, selectedItem]);

    let content = null;
    if (items.length === 0) {
        // Display default message if there are no items
        content = <div>{emptyText}</div>;
    }
    else {
        // Only apply the ref if the item in the loop matches the selected item. Also add the active class.
        content = items.map((item, index) => {
            const extraProps = (item === selectedItem) ? { ref: selectedItemRef, className: 'rk-nav-list-item active' } : { className: 'rk-nav-list-item' };
            return <div key={index} {...extraProps} onClick={() => onSelect(item)}>{render(item)}</div>;
        });
    }

    return (
        <div className='rk-nav-list' ref={containerRef}>
            {content}
        </div>
    );
}