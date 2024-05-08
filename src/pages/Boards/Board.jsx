// Boards list page
import { Container } from '@mui/material'
import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailApi, createNewColumnApi, createNewCardApi } from '../../apis'
// import { mockData } from '../../apis/mock-data'
// import { useParams } from 'react-router-dom'

function Board() {
  const [board, setBoard] = useState(null)
  // const param = useParams()
  useEffect(() => {
    (async () => {
      const _board = await fetchBoardDetailApi('663af9727ec1e8b2517e9353')
      setBoard(_board)
    })()
  }, [])
  const createNewColumn = async (newColumnData) => {
    const data = {
      ...newColumnData,
      boardId: board._id
    }
    const column = await createNewColumnApi(data)
    const newBoard = { ...board }
    newBoard.columns.push(column)
    newBoard.columnOrderIds.push(column._id)
    setBoard(newBoard)
  }

  const createNewCard = async (newCardData) => {
    const data = {
      ...newCardData,
      boardId: board._id
    }
    const card = await createNewCardApi(data)
    const newBoard = { ...board }
    const columnUpdate = newBoard.columns.find(c => c._id === newCardData.columnId)
    if (columnUpdate) {
      columnUpdate.cards.push(card)
      columnUpdate.cardOrderIds.push(card._id)
    }
    setBoard(newBoard)
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board}/>
      <BoardContent board={board} createNewColumn={createNewColumn} createNewCard={createNewCard}/>
    </Container>
  )
}

export default Board