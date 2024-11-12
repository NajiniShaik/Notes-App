import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  BgContainer,
  DetailedContainer,
  MainHeading,
  FormElement,
  InputElement,
  TextareaElement,
  BtnCard,
  BtnElement,
  NotesList,
  EmptyCard,
  ImgElement,
  TitleElement,
  MsgElement,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const [notesList, setList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNote = event => setNote(event.target.value)

  const onAddNote = event => {
    event.preventDefault()

    const newObj = {
      id: uuidv4(),
      title,
      note,
    }

    setList(previousList => [...previousList, newObj])
    setTitle('')
    setNote('')
  }

  return (
    <BgContainer>
      <DetailedContainer>
        <MainHeading>Notes</MainHeading>
        <FormElement onSubmit={onAddNote}>
          <InputElement
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <TextareaElement
            col="55"
            row="8"
            placeholder="Take a Note..."
            onChange={onChangeNote}
            value={note}
          ></TextareaElement>
          <BtnCard>
            <BtnElement type="submit">Add</BtnElement>
          </BtnCard>
        </FormElement>

        {notesList.length === 0 ? (
          <EmptyCard>
            <ImgElement
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
              alt="notes empty"
            />
            <TitleElement>No Notes Yet</TitleElement>
            <MsgElement>Notes you add will appear here</MsgElement>
          </EmptyCard>
        ) : (
          <NotesList>
            {notesList.map(eachNote => (
              <NoteItem noteDetails={eachNote} key={eachNote.id} />
            ))}
          </NotesList>
        )}
      </DetailedContainer>
    </BgContainer>
  )
}

export default Notes
