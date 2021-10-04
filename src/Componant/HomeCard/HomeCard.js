import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const HomeCard = (props) => {
    const { name, img, description } = props.course;
    return (
        <div className="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <hr />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{color: "saddlebrown"}}>
                            {name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default HomeCard;