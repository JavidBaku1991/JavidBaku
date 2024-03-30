import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import colorstheme from '../data/theme.js';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageSelector from './language-selector.jsx';

import { useTranslation } from 'react-i18next';

const colors = colorstheme;

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { t } = useTranslation();

    const Upbar = () => {
        return (
            <Box display="flex" p={2} className='navbar'>
                <Box sx={{ display: 'flex' }} className='navbar-left'>
                    <Link to='/' className='hero-header logo'>
                        <Typography variant='h3' sx={{ color: colors.bronze1 }} >
                            {t("name")}
                        </Typography>
                    </Link>
                    <Box sx={{ display: 'flex', marginLeft: '40px' }} >
                        <Link className='navlink' to='/about' onClick={() => setOpenMenu(false)}>
                            <Typography>{t("about")}</Typography>
                        </Link>
                        <Link className='navlink' to='/lessons' onClick={() => setOpenMenu(false)}>
                            <Typography>{t("lessons")}</Typography>
                        </Link>
                        <Link to='/notes' className='navlink' onClick={() => setOpenMenu(false)}>
                            <Typography>{t("notes")}</Typography>
                        </Link>
                        <Link to='/faqs' className='navlink' onClick={() => setOpenMenu(false)}>
                            <Typography>{t("questions")}</Typography>
                        </Link>
                        <Link to='/contacts' className='navlink' onClick={() => setOpenMenu(false)}>
                            <Typography>{t("contacts")}</Typography>
                        </Link>
                    </Box>
                </Box>

                <Box className='navbar-right'>

                    <Link to='https://www.instagram.com/javid_baku_/' className='navlink' target='_blank'>

                        <InstagramIcon className='icon' />
                    </Link>

                    <Link to="https://wa.me/+994709209747" className='navlink' target='_blank'>
                        <WhatsAppIcon className='icon' />
                    </Link>

                    <Link to='https://www.facebook.com/cavid.baku.7/' className='navlink' target='_blank' >
                        <FacebookIcon className='icon' />
                    </Link>
                    <Link to='https://www.youtube.com/channel/UChR9zh9v-8FeeGyzk9uPDsA' className='navlink' target='_blank' >
                        <YouTubeIcon className='icon' />
                    </Link>


                </Box>
                <LanguageSelector />
            </Box>
        );
    }

    const SidebarMenu = () => {
        return (
            <div className={`sidenav ${openMenu ? 'active' : ''}`}>
                <Link className='sidelink' to='/' onClick={() => setOpenMenu(false)}>
                    <Typography variant='h5'>{t("sidemain")}</Typography>
                </Link>
                <Link className='sidelink' to='/about' onClick={() => setOpenMenu(false)}>
                    <Typography variant='h5'>{t("sideabout")}</Typography>
                </Link>
                <Link className='sidelink' to='/lessons' onClick={() => setOpenMenu(false)}>
                    <Typography variant='h5'>{t("sidelessons")}</Typography>
                </Link>
                <Link to='/notes' className='sidelink' onClick={() => setOpenMenu(false)}>
                    <Typography variant='h5'>{t("sidenotes")}</Typography>
                </Link>
                <Link to='/faqs' className='sidelink' onClick={() => setOpenMenu(false)}>
                    <Typography variant='h5'>{t("sidequestions")}</Typography>
                </Link>
                <Link to='/contacts' className='sidelink' onClick={() => setOpenMenu(false)}>
                    <Typography variant='h5'>{t("sidecontacts")}</Typography>
                </Link>
            </div>
        );
    };

    const SidebarButton = () => {
        return (
            <div className='menu-open-icon-div' >
                <Button onClick={toggleMenu} className='menu-open-icon'>
                    {openMenu ? <CloseIcon /> : <MenuIcon />}
                </Button>
                <LanguageSelector />
            </div>
        )
    }

    function toggleMenu() {
        setOpenMenu(currentState => !currentState);
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1060);
    };

    const handleScroll = () => {
        setOpenMenu(false); // Close menu on scroll
    };


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll); // Add scroll listener
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll); // Remove scroll listener
        };
    }, []);

    return (
        <div>
            {!isMobile && <Upbar />}
            {isMobile && <SidebarButton />}
            {openMenu && <SidebarMenu />}
        </div>
    );
}

export default Navbar;
