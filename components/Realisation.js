import Link from 'next/link';
import { withStyles } from '@material-ui/styles';
import { FaChevronRight } from 'react-icons/fa';


const styles = theme => ({
	title : {
		fontStyle : 'italic',
		color : '#5162ad',
		fontWeight : 'bold'
	},
	tile : {
		boxShadow : '0px 0px 8px -2px',
		marginBottom : "50px",
		padding : '15px 20px 15px 21px',
		cursor : 'pointer',
	},
	icon : {
    	transition : '400ms',
    	fontSize : '20px',
    	color : '#5162ad'
  },
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
		const lastState = this.state.open
		this.setState({open : !lastState})
	}
	render () {
		const real = this.state.realisation
    	const { classes } = this.props;
		return (
		<div className={classes.tile} onClick={this.handleClick.bind(this)}>
			<div style={{marginBottom : "2px"}}>
				<div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
					<div>
						<span className={classes.title}>
							{real.title} 
						</span> 
						<p style={{margin:'0'}}>
							{real.technologies.map(tech => (
								<span key={real.id} style={{fontSize : '13px'}}> {tech+' -'}</span> 
        					))}
        				</p>
        			</div>
        			<div>
        				<FaChevronRight className={classes.icon} style={{transform : this.state.open ? 'rotate(90deg)' : 'rotate(0deg)'}} />
        			</div>
        		</div>		
			</div>
			<div style={{ maxHeight : this.state.open ? '500px' : '0px', overflow : 'hidden', transition : '600ms' }}>
				<div  style={{marginTop : '10px'}}>
					{real.links.map(link => (
						<div key={link.id} style={{marginRight : '10px'}}>
							<Link href={link.link} >	
								<a target='_blank'>
									{link.name}
								</a>
							</Link>
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
