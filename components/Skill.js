import { IoIosStar } from 'react-icons/io';
const Popover = require('popman')
class Skill extends React.Component  {
	constructor(props) {
    	super(props);
    	this.state = { 
     	 	skill: props.skill,
     	 	open : false
    	}
    }
	render () {
		let foo = Array.from(Array(5).keys())

		return (
			<div>
				<div style={{margin : '15px'}} onMouseEnter={this.setState({open : true})}>
					<p>{this.state.skill.name}</p>
					{foo.map(level => (
         				<IoIosStar style={{color : level < this.state.skill.level ? '#eac501' : '#5f5f5f', marginRight : '5px'}}/>
        			))}
				
				</div>
				<Popover open={this.state.open} around={<div></div>}>
  					Hello, i am the popover content
				</Popover>
				</div>
			)
	}
}

export default Skill