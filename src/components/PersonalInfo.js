import classes from './PersonalInfo.module.css';

import Contact from '../InfoBlocks/Contact';
import Languages from '../InfoBlocks/Languages';
import ProfilePicture from '../UI/ProfilePicture';



function PersonalInfo () {

   const name = "Kalyakin Nikita";

   return <div className={classes.info}>
      <div className={classes.name}>{name}</div>
      <ProfilePicture size={classes.profileImage}/>
      <Contact block={classes.block} title={classes.title} link={classes.link} />
      <Languages block={classes.block}/>
      <div className={classes.test}>

      </div>
   </div>
}

export default PersonalInfo;