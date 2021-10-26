import React from 'react';

export default function ListItem({ items, level = 0 }) {
  return (
    <div>
      {items.map((item) => {
        if (Array.isArray(item)) {
          return <ListItem items={item} level={level + 1} />;
        }
        return <p style={{ marginLeft: 16 * level }}>{item}</p>;
      })}
    </div>
  );
}
