import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardText} from 'material-ui/Card';
class AboutPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <Card className="content">
                         <CardHeader
                            title="About"
                            subtitle="Subtitle"
                            avatar=""
                            />
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default AboutPage;