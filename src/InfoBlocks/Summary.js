import SectionHeader from "../UI/SectionHeader";


function Summary({block, about}) {
   return <div className={block}>
      <SectionHeader header="Summary" />
      <div className={about}>
         My main goals are acquiring new skills and professional development. I'm hard-working person, who likes to go deeper in his tasks and be better each day. I'm not scare of new and hard tasks because they are challenging me. Also, have a good background of customer relations and service. 
      </div>
   </div>
}

export default Summary;