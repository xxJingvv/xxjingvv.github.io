import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'User Administration Web',
    desc:
      'A backstage user management system for an education company. I assisted in designing the theme, manage interviews section at frontend',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Chair Shopping Website',
    desc:
      'A shopping website for an e-commerce company, including product details and checking out pages.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Online Job Posting App',
    desc:
      'An app to match employers and employees, they could also leave massages and chat online.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Theater Website",
    desc:
      'An individual ASP.Net website developed by C#, I also applied AWS services to store data and publish',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Property Zone App',
    desc:
      'A set of UI design pages of school app project, which accomplished individually by myself.',
    img: ProjectImg,
  },
];

export default projects;
