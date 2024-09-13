export interface experience {
    name:string
    certificate:string
    description:string
    tags:string[]
    date : string
    
  }
  export const work: experience[] = [
      
    {
        name:'Electrothon 4.0 by NIT Hamirpur',
        certificate:'https://devfolio.co/projects/svaasthy-4e9c',
        description:'“Svaasthy”, Which enables us to ease up the emergency medical situations by providing the best and the fastest way to reach your nearest hospitals or medical centers.',
        tags:['Hackathon' , 'Developer' , "Winner"],
        date: "Feb 2022"
       
    },
    {
        name:'HackOdisha by NIT Rourkela',
        certificate:'https://devfolio.co/projects/mentally-e08e',
        description:`“Ment-Ally”, Which help's people to gain mental peace and stability one solution for all your mental problems.`,
        tags:['Hackathon' , 'Developer' , "Winner"],
        date: "Sept 2021"
    },
      
    ];