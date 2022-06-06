import classes from './SectionHeader.module.css';

function SectionHeader ({header}) {
   return <div className={classes.headerName}>{header}</div>
}

export default SectionHeader;