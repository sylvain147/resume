import { IoIosStar } from 'react-icons/io';
import { withStyles } from '@material-ui/styles';

const style = theme => ({
	info : {
		fontSize : '12px',
		margin : '0 0 8px 0',
		maxWidth : '200px'
	},
	title : {
		margin : '5px 10px 3px 0px',
	},
	skill : {
		margin : '30px 5px'
	}
		
})
class Skill extends React.Component  {
	constructor(props) {
    	super(props);
    	this.state = { 
     	 	skill: props.skill,
     	 	open : false
    	}
    }
	render () {
		const foo = Array.from(Array(5).keys())
		const classes = this.props.classes
		console.log(classes)

		return (
			<div>
				<div className={classes.skill}>
					<p  className={classes.title}>{this.state.skill.name}</p>
					<p className={classes.info}>{this.state.skill.info}</p>
					{foo.map(level => (
         				<IoIosStar style={{color : level < this.state.skill.level ? '#eac501' : '#5f5f5f', marginRight : '5px'}}/>
        			))}
				
				</div>
				</div>
			)
	}
}

export default withStyles(style)(Skill)