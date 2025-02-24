 export interface data {
  name: string;
  description: string;
  Demo: string;
  github_url: string;
  key_techs: string[];
  image: string;
  
}
export const projects: data[] = [
    
    {
      name: "Svaasthy",
        Demo: "",
       image:'/s.png',
      github_url: "https://github.com/AnkitSingh0702/Svaasthy",
      description:
      "Svaasthy provides the quickest and most efficient way to reach nearby hospitals, ensuring you get immediate assistance in emergency medical situations",
      key_techs: ["ReactNative", "firebase", "Expo" , "Typescript"],
    },
    { 
      name: "Misinfometer",
      image:'/mis.png',
      description:
        "Misimfometer uses advanced machine learning to verify news authenticity, helping users combat misinformation effectively and efficiently.",
      Demo: "https://misinfometer-senior-design-project-frontend.vercel.app/",
      github_url: "https://github.com/AnkitSingh0702/Misinfometer-SeniorDesignProject-Frontend",
      key_techs: ["Next Js", "Flask","Tailwind Css", "Python" , "scikit-learn"],
    },
    {
      name: "Ment-Ally",
      image:'/m.png',
      Demo: "https://ment-ally-3fc6a.web.app/",
      github_url: "https://github.com/AnkitSingh0702/Ment-Ally",
     
      description:
        "Ment-Ally is a web app build with React.js. Ment Ally is one solution for all your mental problems.",
      key_techs: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Firebase",
        "Framer Motion",
        "Javascript",
        "CSS",
      ],
    },
  
    {
      name: "IoT App",
      image:'/iot.png',
      Demo: "",
      github_url: "https://github.com/AnkitSingh0702/IOT_App",
     
      description:
        "IoT-based Flutter application facilitating interaction and control of connected devices",
      key_techs: ["Flutter", "Flask", "Dart", "Python","MicroPython","Raspberry Pi"]
    },
    
  ];