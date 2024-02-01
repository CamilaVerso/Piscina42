import styled from 'styled-components'

export const BigHeroSection = styled.main`
  display: flex;
  align-items: center;
  gap: 3rem;
  height: 90vh;

  & > div {
    flex: 1;
  }

  & button {
    margin-top: 2rem;
  }
`

export const CustomButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primary};
  transition: all 0.3s;
  padding: 0.5rem 1rem;

  cursor: pointer;

  text-align: center;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1.2rem;

  &:hover {
    background-color: ${(props) => props.theme.accent};
  }
`

export const StoreSection = styled.section`
  h2 {
    margin-bottom: 3rem;
    text-align: center;
    color: ${(props) => props.theme.accent};
  }
`

export const StoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`