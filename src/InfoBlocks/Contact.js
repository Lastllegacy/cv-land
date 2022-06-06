import SectionHeader from "../UI/SectionHeader";

function Contact({title, block, link}) {
  return (
    <div className={block}>
      <SectionHeader header={"Contact"} />
      <ul>
        <li>
          <div className={title}>Location:</div>
          <div>Novosibirsk</div>
        </li>
        <li>
          <div className={title}>Phone:</div>
          <div>+79141012440</div>
        </li>
        <li>
          <div className={title}>Email:</div>
          <div>forrkko@gmail.com</div>
        </li>
        <li>
          <div className={title}>Github:</div>
          <a className={link} href="https://github.com/Lastllegacy">https://github.com/Lastllegacy</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
