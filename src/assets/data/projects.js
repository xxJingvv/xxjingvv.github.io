import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Business: Younet AI',
    desc:
      'Language & Tools: JavaScript, NodeJS, React',
    img: UTrackerImg,
    link:'https://younet.ai/'
  },
  {
    id: uuidv4(),
    name: 'Individual: Academic World',
    desc:
      'Language & Tools: JavaScript, Python, React,Flask',
    img: GreenCtgImg,
    link:'https://github.com/xxJingvv/AcademicWorld'
  },
  {
    id: uuidv4(),
    name: 'Group: Food Inspection in Chicago',
    desc:
      'Language & Tools: Python, OpenRefine, YesWorkFlow, Graphviz',
    img: CoinTrackerImg,
    link:'https://github.com/xxJingvv/FoodInspectionInChicago'
  },
  {
    id: uuidv4(),
    name: "Group: Bicycle Theft in Toronto",
    desc:
      'Language & Tools: Python, Scikit-Learn',
    img: CavinImg,
    link:'https://github.com/xxJingvv/BicycleTheftsInToronto'
  },
  {
    id: uuidv4(),
    name: 'Group: Easy Hire',
    desc:
      'Language & Tools: JavaScript, NodeJS, React, Heroku',
    img: ProjectImg,
    link:'https://github.com/xxJingvv/HireEasy'
  },
];

export default projects;
