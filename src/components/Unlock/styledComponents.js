// Style your elements here
import styled from 'styled-components'

export const UnlockLockContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
   min-height: 100vh;
`
export const ImageAndTextContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  width:25%;
`
export const Text = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 90px;
  line-height: 1.2;
`
export const Button = styled.button`
  color:white;
  background-color:#06b6d4;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
`
