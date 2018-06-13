import React, { Component } from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Dashboard extends Component {
    state = {};
    render() {
    	return (
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Welcome to Dashboard.
                    </Typography>
                </CardContent>
            </Card>
    	)
    }
}

export default withWidth()(Dashboard);    