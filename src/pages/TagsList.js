import * as React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return ( <
        List sx = {
            { width: '100%', maxWidth: 360, bgcolor: 'background.paper' } }
        component = "nav"
        aria - labelledby = "nested-list-subheader"
        subheader = { <
            ListSubheader component = "div"
            id = "nested-list-subheader" >
            Main <
            /ListSubheader>
        } >
        <
        ListItemButton >
        <
        ListItemText primary = "Dashboard" / >
        <
        /ListItemButton> <
        ListItemButton >
        <
        ListItemText primary = "Users" / >
        <
        /ListItemButton> <
        ListItemButton onClick = { handleClick } >
        <
        ListItemText primary = "Media" / > { open ? < ExpandLess / > : < ExpandMore / > } <
        /ListItemButton> <
        Collapse in = { open }
        timeout = "auto"
        unmountOnExit >
        <
        List component = "div"
        disablePadding >
        <
        ListItemButton sx = {
            { pl: 4 } } >
        <
        ListItemText primary = "Library" / >
        <
        ListItemText primary = "Add User" / >
        <
        ListItemText primary = "Library" / >
        <
        /ListItemButton> <
        /List> <
        /Collapse> <
        /List>
    );
}