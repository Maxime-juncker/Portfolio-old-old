import Image from "next/image";


const SkillCard = ({ src, content }) => {
  return (
    <>
      <div className='Skill-card'>
        <img src={src} alt='tkt' />
        <h3>{content}</h3>
      </div>
    </>
  );
};

export default SkillCard;
