'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import SignpostIcon from '@mui/icons-material/Signpost';
import ViewListIcon from '@mui/icons-material/ViewList';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';

const categories = [
  {
    id: 'Animais',
    children: [
      { id: 'Cadastrar', icon: <PetsIcon />, href: '/cadastrar' },
      { id: 'Listar', icon: <ViewListIcon />, href: '/listar' },
      { id: 'Prazos', icon: <RunningWithErrorsIcon />, href: '/prazos' },
    ],
  },
  {
    id: 'Relatórios',
    children: [
      { id: 'Saída de animais', icon: <SignpostIcon />, href: '/relatorio-saida-animais' },
    ],
  },
  {
    id: 'Sessão',
    children: [
      { id: 'Logout', icon: <LogoutIcon />, href: '/logout' },
    ],
  },
];

const itemStyle = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategoryStyle = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const pathname = usePathname();

  return (
    <Drawer variant="permanent" component="nav" {...other}>
      <List disablePadding>
        {/* Título */}
        <ListItem sx={{ ...itemStyle, ...itemCategoryStyle, fontSize: 22, color: '#fff' }}>
          CCZ Fernandópolis
        </ListItem>

        {/* Dashboard */}
        <ListItem disablePadding>
          <Link href='/' passHref legacyBehavior>
            <ListItemButton component="a" selected={pathname === '/'} sx={{ ...itemStyle, ...itemCategoryStyle }}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>

        {/* Categorias */}
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>

            {children.map(({ id: childId, icon, href }) => {
              const isActive = pathname === href;

              return (
                <ListItem disablePadding key={childId}>
                  <Link href={href} passHref legacyBehavior>
                    <ListItemButton component="a" selected={isActive} sx={itemStyle}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText>{childId}</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
