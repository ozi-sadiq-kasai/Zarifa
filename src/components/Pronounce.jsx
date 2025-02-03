import styled from "styled-components";

const Pronounce = () => {
  return (
    <Wrapper>
      <p>Let the Earth Move you.</p>
      <h2>Zarifa</h2>
      <p>(pronounced zah-ree-fah )</p>
      <Info>
        Zarifa is more than a clothing brand—it&apos;s a movement. Rooted in purpose,
        we are committed to empowering Indigenous communities by weaving impact
        into every thread. A portion of our proceeds supports initiatives that
        foster health, wealth, and sustainability.
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
padding:0 5rem;
background-color:white;
`
const Info = styled.p`
max-width:65%;

`
export default Pronounce;
