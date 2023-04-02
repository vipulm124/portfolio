import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './Header.css';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const socialMedia = [
  {key:"git", hrefValue:"https://github.com/vipulm124", classValue:"fa fa-brands fa-github social-icon"},
  {key:"li", hrefValue:"https://www.linkedin.com/in/vipul-malhotra-5545b829/", classValue:"fa fa-brands fa-linkedin social-icon"},
  {key:"email", hrefValue:"mailto:vipulm124@gmail.com", classValue:"fa fa-solid fa-envelope social-icon"}
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
          >
            <span className='first-name'>VIPUL</span> MALHOTRA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} style={{marginLeft:20}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {socialMedia.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <a  href={page.hrefValue} target="_blank"> 
                    <i className={page.classValue}></i>
            </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
          >
            <span className='first-name'>VIPUL</span> MALHOTRA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{flexDirection:'row-reverse'}}>
            <a  href="mailto:vipulm124@gmail.com">
           <i className="fa fa-solid fa-envelope social-icon"></i>
            </a>
 <a  href="https://www.linkedin.com/in/vipul-malhotra-5545b829/" target="_blank">
           <i className="fa fa-brands fa-linkedin social-icon"></i>
            </a>
 <a  href="https://github.com/vipulm124" target="_blank">
           <i className="fa fa-brands fa-github social-icon"></i>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;