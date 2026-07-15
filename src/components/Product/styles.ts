import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Cores } from '../../styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;
  position: relative;
  background-color: ${Cores.CorPrimary};
`
export const Container = styled.div`
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    margin-top: auto;
    display: inline-block;
    text-align: center;
    background-color: ${Cores.CorSecondary};
    color: ${Cores.CorPrimary};
    width: 100%;
    padding: 4px;
    border: none;
    cursor: pointer;
  }
`

export const Titulo = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${Cores.CorSecondary};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Cores.CorSecondary};
  margin-bottom: 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
`

export const Modal = styled.div`
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
  background-color: ${Cores.CorPrimary};
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
`
export const ModalImage = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
  margin-left: 16px;
`
export const ModalDescricao = styled.div`
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

  ${ButtonLink} {
    margin-top: 16px;
    display: block;
    width: 204px;
    color: ${Cores.CorPrimary};
    background-color: ${Cores.CorSecondary};
  }
`
