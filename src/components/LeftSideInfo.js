import FillingLine from '../UI/FillingLine';
import classes from './LeftSideInfo.module.css';
import PersonalInfo from './PersonalInfo';

function LeftSideInfo () {
   return <div className={classes.layout}>
      <FillingLine line={classes.line} />
      <PersonalInfo/>

   </div>
}

export default LeftSideInfo;