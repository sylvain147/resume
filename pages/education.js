import Education from '../components/Education'

export default function education() {
  return (
    <div>
     {getEducation().map(education => (
          <Education key={education.id} education={education} />
        ))}
     </div>
  );
}

function getEducation() {
  return [
    {
      id : 1,
      school : 'Université de lille', 
      date : '2018', 
      location: 'France' , 
      description : 'Bachelor\'s Degree in Computer Science'}

  ]
}
