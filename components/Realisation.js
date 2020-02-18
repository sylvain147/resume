import Link from 'next/link';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
	title : {
		fontStyle : 'italic',
		color : '#5162ad',
		fontWeight : 'bold'
	},
	tile : {
		boxShadow : '0px 0px 8px -2px',
		marginBottom : "50px",
		padding : '14px 20px 25px 21px',
		cursor : 'pointer',
	}
})
class Realisation extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			realisation : props.realisation,
			open : false
		}
	}
	handleClick () {
		this.setState({open : !this.state.open})
	}
	render () {
		const real = this.state.realisation
    	const { classes } = this.props;
		return (
		<div className={classes.tile} onClick={this.handleClick.bind(this)}>
			<p style={{marginBottom : "2px"}}>
				<span className={classes.title}>{real.title} </span> 
				<p style={{margin:'0'}}>
					{real.technologies.map(tech => (
						<span style={{fontSize : '13px'}}> {tech+' -'}</span> 
         				 
        			))}
        			</p>
						
			</p>
			
			<div style={{ maxHeight : this.state.open ? '1000px' : '0px', overflow : 'hidden', transition : '600ms' }}>
			<div  style={{marginTop : '10px'}}>
			{real.links.map(link => (
				<div key={link.id}style={{marginRight : '10px'}}>
				<Link href={link.link}>	
				<a>{link.name}</a></Link>
				</div>
         				 
        			))}
        			</div>
        			<div>
        			<div style={{marginTop : '10px'}}>

			{real.description}
			</div>
			</div>

			</div>
		</div>
		)
	}
}
export default withStyles(styles)(Realisation)
