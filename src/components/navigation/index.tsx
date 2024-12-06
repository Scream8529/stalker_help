import { useContext, useState } from "react";
import { Menu } from "@mui/icons-material";
import { Drawer, Fab, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { RouterComponents } from "../../models/router-components";
import { RouterContext } from "../router";
import { navigationMenu } from "../../constants/navigation";
import logo from '../../imgs/logo.png'

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    zIndex: 99999,
};

export default function Navigation() {
    const router = useContext(RouterContext);
    const [showNavigation, setShowNavigation] = useState(false)

    function toggleShowNavigation() {
        setShowNavigation(prev => !prev)
    }

    function toggleRoute(e: RouterComponents) {
        return () => {
            setShowNavigation(false)
            router?.setCurrentComponents(e);
        };
    }

    function toggleCloseNavigation() {
        setShowNavigation(false)
    }
    return (
        <>
            <Fab sx={(theme) => ({
                ...fabStyle,
                [theme.breakpoints.up('md')]: {
                    display: 'none'
                }
            })} color="primary" aria-label="add" onClick={toggleShowNavigation}>
                <Menu />
            </Fab>
            <Drawer open={showNavigation} onClose={toggleCloseNavigation} anchor='top'>
                <List
                    sx={{ width: '100%', }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader
                            component="div" id="nested-list-subheader">
                            <img
                                style={{
                                    display: 'block', width: '200px', margin: '10px auto'
                                }}
                                width={200}
                                height={200}
                                src={logo}
                                alt={'Mercenaries logo'}
                                loading="lazy"
                            />

                        </ListSubheader>
                    }
                >
                    {
                        navigationMenu.map(navItem => (
                            <ListItemButton
                                onClick={toggleRoute(navItem.route)}
                            >
                                <ListItemText primary={navItem.text} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
        </>

    );
}
