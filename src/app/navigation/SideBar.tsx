"use client";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import {useState} from "react";
import Link from "next/link";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import {DrawerWidth} from "@/app/navigation/NavigationConst";

interface Pages {
    text: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap>;
}

const pages:Pages[] = [
    {text: "Home", link: "", icon: HomeIcon},
    {text: "About", link: "about", icon: InfoIcon},
    {text: "Contact", link: "contact", icon: MailIcon},
]

const SideBar = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    }

    return (
        <Drawer
            sx={{
                width: DrawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DrawerWidth,
                    boxSizing: 'border-box',
                }
            }}
            anchor="left"
            variant="permanent"
            onClose={toggleDrawer}
        >
            <Toolbar />
            <Divider />

            <List>
                {pages.map((page, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} href={"/" + page.link}>
                            <ListItemIcon>
                                <page.icon />
                            </ListItemIcon>
                            <ListItemText primary={page.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    );
}

export default SideBar;