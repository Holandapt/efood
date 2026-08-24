import styled from 'styled-components'
import { Colors } from '../../styles'
import { ButtonContainer, ButtonLink } from '../../components/Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Check = styled.div`
  max-width: 344px;
  margin-bottom: 24px;

  /* &.is-open {
    display: flex;
  } */
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  font-size: 14px;
  margin-top: 8px;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    border: none;
    padding: 0 8px;
    font-weight: bold;
    width: 100%;
    height: 32px;
    background-color: ${Colors.secondaryColor};

    &.error {
      border-bottom: 2px solid red;
    }
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
export const FormButton = styled.div`
  button {
    font-size: 14px;
    padding: 6px 4px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    width: 100%;
    text-align: center;
    display: block;
    margin-top: 8px;
    color: ${Colors.primaryColor};
    background-color: ${Colors.secondaryColor};
  }

  ${ButtonContainer} {
    cursor: pointer;
    border: none;
    width: 100%;
    text-align: center;
    display: block;
    margin-top: 8px;
    color: ${Colors.primaryColor};
    background-color: ${Colors.secondaryColor};
  }

  ${ButtonLink} {
    text-align: center;
    display: block;
    margin-top: 8px;
    color: ${Colors.primaryColor};
    background-color: ${Colors.secondaryColor};
  }
`
