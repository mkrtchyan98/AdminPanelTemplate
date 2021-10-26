import React, { useState } from 'react';

import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Button
} from '@material-ui/core';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import menuItems from './menuItems.json';

const MenuBar = () => {
  const [itemState, setItemState] = useState(false);
  const [list, setList] = React.useState(menuItems.data);
  const [open, setOpen] = useState(false);
  function handleToggleComplete(name) {
    const newList = list.map((item) => {
      if (item.name === name) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete
        };

        return updatedItem;
      }

      return item;
    });

    setList(newList);
  }

  // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
  function handleClick(item) {
    setItemState((prevState) => ({ [item]: !prevState[item] }));
  }

  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  function handler(children) {
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Button to={subOption.url}>
                {open === subOption.name ? (
                  <input type="text" value="input" readOnly />
                ) : (
                  <ListItemText
                    inset
                    primary={subOption.name}
                    onDoubleClick={() => {
                      setOpen(subOption.name);
                    }}
                  />
                )}
              </Button>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {itemState[subOption.name] ? (
              <ExpandMoreIcon />
            ) : (
              <ExpandLessIcon />
            )}
          </ListItem>
          <Collapse in={itemState[subOption.name]} timeout="auto" unmountOnExit>
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }

  return (
    <div>
      <div>
        <List>
          <ListItem key="menuHeading" divider disableGutters>
            <ListItemText inset primary="Main Tags" />
          </ListItem>
          {handler(list)}
        </List>
      </div>
    </div>
  );
};

export default MenuBar;
