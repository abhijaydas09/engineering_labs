import React from 'react';
import './ItemComponent.css';

function ItemComponent({ items }) {
    return (
        <ul className="item-list">
            {items.map(item => (
                <li key={item.id} className="item">
                    <div className="item-title">{item.title}</div>
                    <div className="item-body">{item.body}</div>
                </li>
            ))}
        </ul>
    );
}

export default ItemComponent;