import styled from 'styled-components'

const Wrapper = styled.nav`
  background-color: var(--white);
  .nav-center {
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: var(--max-width);
    padding: 1.5rem 2rem;
    margin: 0 auto;
  }
  .logo {
    color: var(--primary-500);
    font-weight: 700;
    font-size: clamp(1.5rem, 3vw, 3rem);
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    padding: 0.5rem 0.5rem 0.5rem 0;
    color: var(--grey-900);
    letter-spacing: 2px;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`

export default Wrapper
