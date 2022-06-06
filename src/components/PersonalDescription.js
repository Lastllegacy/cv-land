import Projects from '../InfoBlocks/Projects';
import Skills from '../InfoBlocks/Skills';
import Summary from '../InfoBlocks/Summary';
import classes from './PersonalDescription.module.css';

function PersonalDescription () {
   return <div className={classes.info}>
      <div className={classes.job}>Frontend Developer</div>
      <Summary block={classes.block} about={classes.about} />
      <Skills block={classes.block} list={classes.list} />
      <Projects block={classes.block} list={classes.list} tags={classes.tags} />
   </div>
}

export default PersonalDescription;