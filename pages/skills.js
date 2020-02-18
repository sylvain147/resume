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
			name : 'JavaScript (ES6)',
			level : 4,
			info : '3 years professional experience'
		},
		{
			id : 2,
			name : 'PHP',
			level : 4,
			info : '3 years professional experience'
		},
		{
			id : 3,
			name : 'Symfony',
			level : 4,
			info : '3 years professional experience'
		},

		{
			id : 7,
			name : 'Elasticsearch',
			level : 3,
			info : '3 years professional experience'
		},
		{
			id : 9,
			name : 'jQuery',
			level : 5,
			info : '3 years professional experience'

		},
		{
			id : 4,
			name : 'HTML',
			level : 5,
			info : '3 years professional experience'

		},
		{
			id : 5,
			name : 'CSS',
			level : 5,
			info : '3 years professional experience'
		},
		{
			id : 6,
			name : 'Mysql',
			level : 4,
			info : '3 years professional experience'

		},
		{
			id : 8,
			name : 'twig',
			level : 3,
			info : '2 years professional experience'

		},

		{
			id : 11,
			name : 'VueJs',
			level : 3,
			info : '1 year professional experience'

		},

		{
			id : 9,
			name : 'React',
			level : 3,
			info : 'Personal projects'
		},
		{
			id : 10,
			name : 'Laravel',
			level : 2,
			info : '6 months personal project'

		},
		{
			id : 12,
			name : 'NodeJs',
			level : 2,
			info : 'Unfinised personal project'
		},
		{
			id : 13,
			name : 'Git',
			level : 4,
			info : '3 years professional experience, personal use'

		},
		{
			id : 14,
			name : 'Scrum',
			level : 3,
			info : '2 year professional experience'

		},
		{
			id : 15,
			name : 'Windows',
			level : 4,
			info : '1 year professional experience, personal use'

		},
		{
			id : 15,
			name : 'Linux',
			level : 4,
			info : '2 years professional experience, personal use'

		},
		{
			id : 17,
			name : 'MacOs',
			level : 3,
			info : '1 year professional experience'

		},

	]
}

export default skills