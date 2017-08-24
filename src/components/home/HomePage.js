import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import axios from 'axios';



class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state={items:[]};

    }
    componentDidMount(){
        axios.get(`https://api.opendota.com/api/heroStats`).then(res => this.setState({ items: res.data })).catch(err => {});
 
    }

    render(){

        return(
            <div>
                {this.state.items.map((hero,i)=>{
                    return (
                        <MuiThemeProvider key={i}>
                        <Card className="content"  >
                            <CardHeader
                                title={hero.localized_name}
                                subtitle={hero.primary_attr}
                                avatar={"https://api.opendota.com"+hero.img}
                                />
                        </Card>
                    </MuiThemeProvider>
                        
                    );
                })}
            </div>
        );
    }
}

export default HomePage;