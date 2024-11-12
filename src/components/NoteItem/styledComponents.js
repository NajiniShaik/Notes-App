// Style your elements here

import styled from 'styled-components'

export const EachCard = styled.li`
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  padding: 20px;
  text-align: left;
  box-shadow: 0px 0px 3px #aab8c8;
  width: 100%;
  @media (min-width: 576px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
`

export const NoteTitle = styled.h1`
  color: #1e293b;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const NoteText = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
`
