import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">

                    </Typography>
                    <Typography variant="headline" component="h2">

                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">

                    </Typography>
                    <Typography component="p">
                   <br />

                    </Typography>
                </CardContent>
                <CardActions>
                    {/*<Button size="small">Learn More</Button>*/}
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);