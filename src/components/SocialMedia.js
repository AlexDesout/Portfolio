import React from "react";
import Chip from '@mui/material/Chip';
import { getImage } from "../utils/externalsFunctions";
import { Link } from "react-router-dom";

const SocialMedia = (props) => {
    const { media } = props;


    return (
        <div className="col-md-12 d-flex flex-direction-row justify-content-between">
            {media.map((m, index) => (
                <Link target={m.target} to={m.link}>
                    <Chip
                        icon={getImage(m.icone)}
                        className='my-1 text-white'
                        key={index}
                        label={m.name}
                        sx={{ backgroundColor: '#473876', marginRight: '5px' }}
                        clickable
                    />
                </Link>
            ))}
        </div>
    );
}

export default SocialMedia;