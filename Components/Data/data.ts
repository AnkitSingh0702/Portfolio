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
       image:'./s.png',
      github_url: "https://github.com/AnkitSingh0702/Svaasthy",
      description:
      "Svaasthy enables us the emergency medical situations by providing the best and the fastest way to reach your nearest hospitals",
      key_techs: ["ReactNative", "firebase", "Expo" , "Typescript"],
    },
    { 
      name: "Twitter Clone",
      image:'./t.png',
      description:
        "Twitter clone is a clone of the Twitter web app build with Next.js,Firebase and NextAuth. where you can log in,comment",
      Demo: "https://twitter-clone-kappa-five.vercel.app/",
      github_url: "https://github.com/AnkitSingh0702/Twitter-Clone",
      key_techs: ["Next Js", "Firebase","Next Auth", "Tailwind Css"],
    },
    {
      name: "Ment-Ally",
      image:'./m.png',
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
      image:'./iot.png',
      Demo: "",
      github_url: "https://github.com/AnkitSingh0702/IOT_App",
     
      description:
        "IoT-basedHome automation Flutter application facilitating seamless interaction and control of connected devices",
      key_techs: ["Flutter", "Flask", "Dart", "Python","MicroPython","Raspberry Pi"]
    },
    
  ];