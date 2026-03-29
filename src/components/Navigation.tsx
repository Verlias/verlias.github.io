import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 260;
const navItems = [['Expertise', 'expertise'], ['Experience', 'history'], ['Projects', 'projects']];

function Navigation() {

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        id="navigation" 
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#e8eaf0' }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              cursor: 'pointer',
            }}
            onClick={scrollToTop}
          >
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              color: '#e8eaf0',
              letterSpacing: '-0.02em',
            }}>
              Logan<span style={{ 
                background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}> Voravong</span>
            </span>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '4px' }}>
            {navItems.map((item) => (
              <Button 
                key={item[0]} 
                onClick={() => scrollToSection(item[1])} 
                sx={{ 
                  color: '#8b8fa8',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  letterSpacing: '0.01em',
                  '&:hover': {
                    color: '#818cf8',
                    backgroundColor: 'rgba(129, 140, 248, 0.08)',
                  }
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: '#111119',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;