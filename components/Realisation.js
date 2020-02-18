import Link from 'next/link';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
	title : {
		fontStyle : 'italic',
		color : '#5162ad',
		fontWeight : 'bold'
	}
})
class Realisation extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			realisation : props.realisation
		}
	}
	render () {
		const real = this.state.realisation
    	const { classes } = this.props;
		return (
		<div style={{marginBottom : "50px"}}>
			<p style={{marginBottom : "2px"}}>
				<span className={classes.title}>{real.title} </span> <span>({real.status})</span>
			</p>
			{real.links.map(link => (
				<div style={{marginRight : '10px'}}>
				<Link href={link.link}>	
				<a>{link.name}</a></Link>
				</div>
         				 
        			))}
			<p>{real.description}</p>
		</div>
		)
	}
}
export default withStyles(styles)(Realisation)
