import Skill from '../components/Skill'
class skills extends React.Component  {
	render () {
		return(
		<div style={{display:'flex', justifyContent:'space-around', flexWrap : 'wrap' }}>
     		{getSkills().map(skill => (
          		<Skill key={skill.id} skill={skill} />
       		 ))}
     </div>
     )
	}
}

function getSkills () {
	return [
		{
			id : 1,
			name : 'JavaScript',
			level : 4
		},
		{
			id : 2,
			name : 'PHP',
			level : 4
		},
		{
			id : 2,
			name : 'PHP',
			level : 3
		},
		{
			id : 2,
			name : 'PHP',
			level : 3
		},
		{
			id : 2,
			name : 'PHP',
			level : 3
		},
		{
			id : 2,
			name : 'PHP',
			level : 3
		},
		{
			id : 2,
			name : 'PHP',
			level : 3
		},
		{
			id : 2,
			name : 'PHP',
			level : 3
		}
	]
}

export default skills