import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
`

export const DetailedContainer = styled.div`
  margin: auto;
  max-width: 1100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 70%;
  }
`
export const MainHeading = styled.h1`
  color: #4c63b6;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Bree Serif';
  @media (min-width: 768px) {
    font-size: 44px;
  }
`

export const FormElement = styled.form`
  border-radius: 7px;
  padding: 30px;
  box-shadow: 0px 0px 15px #aab8c8;
  width: 100%;
`

export const InputElement = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 30px;
`

export const TextareaElement = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 30px;
`

export const BtnCard = styled.div`
  text-align: right;
`

export const BtnElement = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  width: 90px;
  padding: 10px 0px;
  border-radius: 4px;
  border-width: 0px;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto';
`

export const NotesList = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 30px 0px 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const EmptyCard = styled.div`
  text-align: center;
  margin-top: 30px;
`

export const ImgElement = styled.img`
  height: 80px;
  width: 80px;
`

export const TitleElement = styled.h1`
  color: ;
  font-size: 30px;
  font-family: 'Roboto';
`
export const MsgElement = styled.p`
  color: ;
  font-size: 16px;
  font-family: 'Roboto';
`
