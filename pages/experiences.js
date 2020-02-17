import Experience from '../components/Experience'

export default function experience() {
  return (
    <div>
     {getExperiences().map(experience => (
          < Experience key={experience.id} experience={experience} />
        ))}
     </div>
  );
}

function getExperiences() {
  return [
    {
      id : 1,
      title : 'Web Developer', 
      company : 'Mandarine Academy', 
      date : 'April 2018 - November 2019', 
      location: 'France' , 
      description : `
<p> 
As a web developer for Mandarine Academy, I created training platforms for multiple clients. This included a powerful back office with the main aim of the project being to maintain and implement new features for both the front and back offices.
</p>
<p>
<span style='text-decoration:underline '>Technical environment​</span> : Windows 10 - WSL - Docker then Linux Ubuntu / symfony 2.8 - PHP 7.2 - Javascript - twig - MySql (doctrine)
</p>
<ul>
<li>
Maintenance and creation (development and UX design) of training platforms (Mooc) for multiple clients.
</li>
<li>
Implementation of new features for both the front office and the back office.
</li>
<li>
Integration of elasticsearch: Adaptation on the symfony model and optimization of the search engine.
</li>
</ul>
<p>
I also worked with symfony4 on a project to create and adapt the system to function better with a REST API.
</p>
<p><span style='text-decoration:underline '>Technical environment​</span> : Linux Ubuntu / symfony 4 / php 7.3 - Javacript - twig - MySql (doctrine) / Postman
</p>
<ul>
<li>
Implementation of new features for the back-office.
</li>
<li>
Creation of API Rest features.
</li>
</ul>
<p>I addition of my technical expertise I helped choosing and training co worker :</p>
<ul>
<li>
Supervision of a trainee student: Providing training on symfony and methods for assigning project architecture.
</li>
<li>
Supported the recruitment process of student interns.
</li>
</ul>
`},
    {
      id : 2,
      title : 'Web Developer', 
      company : 'Rubee Company', 
      date : 'April 2017 - December 2017', 
      location: 'France' , 
      description : 'stuff'}

  ]
}
