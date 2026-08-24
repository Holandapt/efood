import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const ModalContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      margin-top: 10px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  height: 344px;
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${Colors.primaryColor};

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
    height: auto;
    align-items: center;
    margin-top: 80px;
  }
`
export const CloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
  margin-top: 8px;
  cursor: pointer;
`

export const ModalInfos = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    align-items: center;
  }
`

export const ModalImage = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
  margin-left: 16px;
  @media (max-width: ${breakpoints.desktop}) {
    height: 100%;
    margin-left: 10px;
  }
`
export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: auto;
  margin-left: 24px;
  width: 100%;
  h2 {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 900;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  span {
    margin-top: 8px;
    font-weight: 400;
    font-size: 14px;
  }

  ${ButtonContainer} {
    margin-top: 20px;
    display: flex;
    font-size: 14px;
    width: 220px;
    border: none;
    padding: 4px 8px;
    color: ${Colors.primaryColor};
    background-color: ${Colors.secondaryColor};
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 10px;

    h2 {
      margin-top: 2px;
    }
  }
`
