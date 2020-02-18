import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'next/router'


const styles = theme => ({
  navbar : {
		display : 'flex',
		justifyContent: 'center'
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

}})
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
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/skills' ? classes.NavLink.selected : ''}`}  >skills</a>
        </Link>
        <Link href="/realisations">
            <a className={`${classes.NavLink} ${this.props.router.pathname == '/realisations' ? classes.NavLink.selected : ''}`}  >Realisations</a>
        </Link>
      </div>
      </div>
      );
	}
}
export default withStyles(styles)(withRouter(Header))
