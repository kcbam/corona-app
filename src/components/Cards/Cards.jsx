import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';


const Cards = (props) => {

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom> Infected</Typography>
                        <Typography variant="h5"> REAL DATA</Typography>
                        <Typography color="text-secondary"> REAL DATE</Typography>
                        <Typography variant="body2"> Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom> Recovered</Typography>
                        <Typography variant="h5"> REAL DATA</Typography>
                        <Typography color="text-secondary"> REAL DATE</Typography>
                        <Typography variant="body2"> Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom> Deaths</Typography>
                        <Typography variant="h5"> REAL DATA</Typography>
                        <Typography color="text-secondary"> REAL DATE</Typography>
                        <Typography variant="body2"> Number of deaths cause by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );
}
export default Cards;