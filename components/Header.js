import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'next/router'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';




const styles = theme => ({
  navbar : {
		display : 'flex',
		justifyContent: 'center',
		marginBottom : "30px"
	},
	NavLink : {
		margin : '15px 20px',
		textDecoration : 'none',
		borderBottom : '1px solid ',
		padding : "0 15px 4px",
		color : '#5f5f5f',
		transition : '400ms',
		selected : {
			color : '#5162ad'
		},
		'&:hover' : {
			color : '#5162ad',
			padding : '0 38px 4px'
		},
	},
	icons : {
		position : 'absolute',
		right : "15px",
		top : '20px'
	},
	icon : {
		fontSize : '25px',
		marginRight : '15px',
		color :'#5f5f5f',
		'&:hover' : {
			color :'#5162ad'
		},

	}
})
class Header extends React.Component {
	render () {
		const classes  = this.props.classes;

		return (
		<div>
      <div className={classes.navbar}>
      <Link href="/">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/' ? classes.NavLink.selected : ''}`}  >Home</a>
        </Link>
        <Link href="/experiences">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/experiences' ? classes.NavLink.selected : ''}`}  >Experience</a>
        </Link>
        <Link href="/education">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/education' ? classes.NavLink.selected : ''}`}  >Education</a>
        </Link>
        <Link href="/skills">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/skills' ? classes.NavLink.selected : ''}`}  >Skills</a>
        </Link>

        <Link href="/contact">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/contact' ? classes.NavLink.selected : ''}`}  >Contact</a>
        </Link>
        <div className={classes.icons}>
              <a href="https://github.com/sylvain147" target="_blank">
        	<FaGithub className={classes.icon}/>
        	</a>	
        	<a href="https://www.linkedin.com/in/sylvain-attoumani-795549109/" target="_blank">
        	<FaLinkedin className={classes.icon} />
        	</a>
        </div>
      </div>
      </div>
      );
	}
}
export default withStyles(styles)(withRouter(Header))
