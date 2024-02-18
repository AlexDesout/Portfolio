import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = (props) => {
    const { content } = props;
    return (
        <Card className='col-md-3 card' sx={{ backgroundColor: '#291F43' }}>
            <CardContent>
                <Typography className='fs-5 dark-text d-flex justify-content-between' component="div">
                    {content.emoji}
                    <LaunchIcon />
                </Typography>
                <Typography className='fw-bold text-white' variant="h5" component="div">
                    {content.title}
                </Typography>
                <Typography className='dark-text mb-3' sx={{ fontSize: 14 }} variant="body2">
                    {content.description}
                </Typography>
                <div className='d-flew flex-wrap justify-content-center'>

                    {content.skills.map((skill, index) => (
                        <Chip className='my-1 text-white' key={index} label={skill.name} sx={{ backgroundColor: '#473876', marginRight:'5px' }} />
                    ))}
                </div>

            </CardContent>
        </Card>
    );
}

export default ProjectCard;