import SectionHeader from '../UI/SectionHeader';

function Languages ({block}) {
   return <div className={block}>
      <SectionHeader header="Languages"/>
      <ul>
         <li>Russian - native language</li>
         <li>English - B2</li>
         <li>Spanish - A2</li>
      </ul>
   </div>
}

export default Languages;