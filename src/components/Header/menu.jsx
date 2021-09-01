/**
 * Routes file contains path and components mapping
 */
import { faHome, faVideo} from '@fortawesome/free-solid-svg-icons'

const menu = [
  {
    path: "/",
    label: "Home",
    icon: faHome
  },
  {
    path: "/player",
    label: "Video",
    icon: faVideo
  },
];

export default menu;
