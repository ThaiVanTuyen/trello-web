// Boards list page
import { Container } from '@mui/material'
import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailApi } from '../../apis'
import { mockData } from '../../apis/mock-data'
// import { useParams } from 'react-router-dom'

function Board() {
  const [board, setBoard] = useState(null)
  // const param = useParams()
  useEffect(() => {
    (async () => {
      const _board = await fetchBoardDetailApi('6639a73f16fbd9d55c5059a4')
      setBoard(_board)
    })()
  }, [])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board}/>
      <BoardContent board={mockData.board}/>
    </Container>
  )
}

export default Board