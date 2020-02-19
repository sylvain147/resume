import Link from 'next/link';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'next/router'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const styles = theme => ({
  navbar : {
		display : 'flex',
		justifyContent: 'center',
		marginBottom : "30px",
		position : 'fixed',
		top : '0',
		left : '0',
		right : '0',
		backgroundColor : '#fff',
		zIndex : '99',
		boxShadow : '0 10px 19px -14px #5162ad'
	},
	NavLink : {
		margin : '15px 20px',
		textDecoration : 'none',
		borderBottom : '1px solid ',
		padding : "0 15px 4px",
		color : '#5f5f5f',
		transition : '400ms',
		'&:hover' : {
			color : '#5162ad',
			padding : '0 38px 4px',
			fontWeight : 'bold',
			borderBottom : '2px solid'
		},
	},
	selected : {
		color : '#5162ad',
			padding : '0 38px 4px',
			fontWeight : 'bold',
			borderBottom : '2px solid'
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
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/' ? classes.selected : ''}`}  >Home</a>
        </Link>
        <Link href="/experiences">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/experiences' ? classes.selected : ''}`}  >Experience</a>
        </Link>
        <Link href="/education">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/education' ? classes.selected : ''}`}  >Education</a>
        </Link>
        <Link href="/skills">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/skills' ? classes.selected : ''}`}  >Skills</a>
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
