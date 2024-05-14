import styled from 'styled-components'

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;

    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink-info p {
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 1rem;
    line-height: 2;
  }
  .drink-data {
    background-color: var(--primary-300);
    padding: 0.25rem 0.5rem;
    color: var(--primary-700);
    border-radius: var(--borderRadius);
    margin-right: 0.5rem;
    letter-spacing: var(--letterSpacing);
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`

export default Wrapper
