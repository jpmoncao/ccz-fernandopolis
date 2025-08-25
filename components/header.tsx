import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/GridLegacy';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavigatorContext } from '@/context/navigator';

const lightColor = 'rgba(255, 255, 255, 0.7)';

interface HeaderProps {
    onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
    const context = React.useContext(NavigatorContext);

    const { onDrawerToggle } = props;

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
                <Toolbar>
                    <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                {context && context.pageTitle}
                            </Typography>
                        </Grid>
                        <Grid item><strong>Nome: </strong>Usuário | <strong>CPF:</strong> 123.456.789-01</Grid>
                        {/* <Grid item>
                            <Tooltip title="Ajuda">
                                <IconButton color="inherit">
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid> */}
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Tabs value={0} textColor="inherit">
                    {/* <Tab label="Users" />
                    <Tab label="Sign-in method" />
                    <Tab label="Templates" />
                    <Tab label="Usage" /> */}
                </Tabs>
            </AppBar>
        </React.Fragment>
    );
}