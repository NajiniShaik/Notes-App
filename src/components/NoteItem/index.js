import {EachCard, NoteTitle, NoteText} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props

  const {title, note} = noteDetails

  return (
    <EachCard>
      <NoteTitle>{title}</NoteTitle>
      <NoteText>{note}</NoteText>
    </EachCard>
  )
}

export default NoteItem
