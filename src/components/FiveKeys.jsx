import styled from 'styled-components';
import { PiRecycleThin } from 'react-icons/pi';
// import { PiHandshakeThin } from "react-icons/pi";

const FiveKeys = () => {
const tags = ['Eco-Friendly','Ethically Made','Toxin-Free','High-Quality Fabric','Effortless Comfort']
// const icons =['<PiRecycleThin size={20} />','<PiHandshakeThin size={20} />','<PiRecycleThin size={20} />','<PiRecycleThin size={20} />','<PiRecycleThin size={20} />']

  return (
    <Wrapper>
         {tags.map((tag, index) => (
          <Text key={index}>
            <PiRecycleThin size={20} /> {tag}
          </Text>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
display:flex;
justify-content:center;
align-items:center;
position:relative;
width:4.5rem;
height:4.5rem;
border:1px solid var(--grey-400);
border-radius:50%;
`
const Text = styled.p`
  position: absolute;
  top:10;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  font-weight: bold;
`;

// const IconWrapper = styled.span`
//   position: absolute;
//   bottom: 10%;
//   display: flex;
//   justify-content: center;
//   width: 100%;
// `;
export default FiveKeys;
