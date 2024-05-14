import styled from 'styled-components'
const Wrapper = styled.article`
  background-color: var(--white);
  transition: var(--transition);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  display: grid;
  grid-template-rows: auto 1fr;

  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;

    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      color: var(--grey-500);
      margin-bottom: 1rem;
    }
  }
`

export default Wrapper
