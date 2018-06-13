import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class drawerModal extends Component {
	state = {
        right: false,
    };

    toggle_drawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    render (){
    	return (
            <Drawer>
                <Card>
                    <CardContent>
                        <Typography>
                            Here in the drawer!
                        </Typography>
                    </CardContent>
                </Card>
            </Drawer>
    	)
    }
}

export default drawerModal;