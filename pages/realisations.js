import Realisation from '../components/Realisation'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  part: {
    width : '46%'
  },
});

export default function Realisations() {
	const classes = useStyles()
	return (
		<div style={{display : 'flex', justifyContent : 'space-between'}}>
			<div className={classes.part}>
				<h2>Personnal</h2>
				<div>
					{getPersonnals().map(realisation => (
         				 <Realisation key={realisation.id} realisation={realisation} />
        			))}
        		</div>
			</div>
			<div className={classes.part}>
				<h2>Professionnal</h2>
				<div>
					{getProfessional().map(realisation => (
         				 <Realisation key={realisation.id} realisation={realisation} />
        			))}
        		</div>
			</div>
		</div>
		)
}
function getPersonnals() {
	return [
		{
			id : 1,
			title : 'Rougetube',
			links : [
				{
					name : 'Github frontend',
					link : 'https://github.com/sylvain147/project-front'
				},
				{
					name : 'Github backend',
					link : 'https://github.com/sylvain147/project-api]'
				}
			],
			technologies : ['ReactJs','NodeJs'],
			status : 'unfinished',
			description : `
			Started the creation of a blog. It's goal is to let anyone post articles about anything.

It's coded in Node.js for the backend and React for the frontend and they communicate by API.
Done : 
Creation of an account.
Connection to an account. The connection remains using Json Web tokens.
Creation of an article using markdown.
Possibility to read and article

This functionnaly work for the frontend and the backend. All of the CRUD function for the users and the articles works using API calls

To be done : 
Creation of the categories
Creation of the home page
Commentaries.`
		},
		{
			id : 2,
			title : 'Messenger datas',
			links : [
				{
					name : 'Github',
					link : 'https://github.com/sylvain147/project-messages'
				}
			],
			technologies : ['NodeJs'],
			status : 'finished/offline',
			description : `Using Node.js I created an algorythm that analyze facebook message between two people (you can get them from facebook).
Using the Json data. I then used an external tool to create graphs using the treated data`
		},
		{
			id : 3,
			title : 'Online Resume',
			links : [
				{
					name : 'Github',
					link : 'https://github.com/sylvain147/resume'
				}

			],
			technologies : ['ReactJS'],
			status : 'finished',
			linkName : 'Github',
			description : 'This is the website where you are right now. Everything here is done using React. I will later add all of the information in a database and communicate with it using API and Node.js '
		}
	]
}

function getProfessional() {
	return [
	{
		id : 1,
		title : 'Search engine',
		company : 'Mandarine Academy',
		links : [
			{
				name : 'website',
				link : 'https://mooc.office365-training.com/'
			}
		],
		status : 'finished',
		technologies : ['PHP','Symfony','JavaScript','twig','elasticsearch'],
		description : 'I created a search engine for Mandarine Academy. I used for that Elasticsearch for the search, javascript to treat the data and send the search and twig for the UX in the front.The search engine finds your result but it can also understand mistake and help you improve your reaserch'
	},
	{
		id : 2,
		title : 'Calendar',
		company : 'Mandarine Academy',
		links : [
			{
				name : 'website',
				link : 'https://mooc.office365-training.com/'
			}
		],
		status : 'finished',
		technologies : ['PHP','Symfony','JavaScript','twig'],
		description : 'I created a planning, using a daily view, a weekly and a monthly view. All of it is done using twig and javascript for the front and API calls for the data'
	},

	{
		id : 3,
		title : 'Search engine',
		company : 'Rubee company',
		links : [
			{
				name : 'website',
				link : 'https://mooc.office365-training.com/'
			}
		],		
		status : 'finished',
		technologies : ['PHP','elasticsearch','prestashop','HTML','CSS','VueJS'],
		description : 'I created a planning, using a daily view, a weekly and a monthly view. All of it is done using twig and javascript for the front and API calls for the data'
	}
	]
}

