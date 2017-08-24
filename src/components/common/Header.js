import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
// const Header = () => {
//     return(
//         <nav>
//         <IndexLink to="/" activeClassName="active">Home</IndexLink>
//         {" | "}
//         <Link to="/about" activeClassName="active">About</Link>
//         </nav>
//     );
// };
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleToggle(){ this.setState({open: !this.state.open});
    }
    handleClose(){this.setState({open: false});}

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <AppBar title="TITLE"  onLeftIconButtonTouchTap={this.handleToggle} />
                </MuiThemeProvider>
                
                <MuiThemeProvider>
                    <Drawer docked={false}  open={this.state.open}  onRequestChange={this.handleClose}>
                        <div className="MenuTitle">
                            <MuiThemeProvider>
                                    <Avatar src="" size={50}> A</Avatar>
                            </MuiThemeProvider>
                        </div>
                        <IndexLink to="/" className="Links">
                            <MenuItem onClick={this.handleClose}>
                                Home
                            </MenuItem>
                        </IndexLink>
                        <IndexLink to="/about" className="Links">
                            <MenuItem onClick={this.handleClose}>
                                About
                            </MenuItem>
                        </IndexLink>
                    </Drawer>
                </MuiThemeProvider>
          </div>
      );
  }  
}