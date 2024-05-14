import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 100vh;
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-top: -3rem;
  }

  h3 {
    margin-top: 2rem;
  }

  p {
    margin-top: 1.5rem;
    color: var(--grey-500);
    line-height: 1.5;
  }

  a {
    display: block;
    margin-top: 1rem;
    text-transform: capitalize;
    color: var(--primary-500);
  }
`

export default Wrapper
