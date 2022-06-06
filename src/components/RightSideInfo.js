import classes from './RightSideInfo.module.css';

import FillingLine from '../UI/FillingLine';
import PersonalDescription from './PersonalDescription';

function RightSideInfo () {
   return <div className={classes.content}>
      <FillingLine line={classes.line} />
      <PersonalDescription/>
   </div>
}

export default RightSideInfo;