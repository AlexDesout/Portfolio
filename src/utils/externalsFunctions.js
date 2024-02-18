import * as React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const getImage = (imgName) => {
    switch (imgName) {
        case 'icone-git':
            return <GitHubIcon color='white'/>;
        case 'icone-linkedin':
            return <LinkedInIcon color='white'/>;
        case 'icone-mail':
            return <AlternateEmailIcon color='white'/>;
        default:
            return <GitHubIcon />;
    }
};