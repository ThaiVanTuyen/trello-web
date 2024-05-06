// Boards list page
import { Container } from '@mui/material'
import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '../../apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailApi } from '../../apis'
// import { useParams } from 'react-router-dom'

function Board() {
  const [board, setBoard] = useState(null)
  // const param = useParams()
  useEffect(() => {
    (async () => {
      const _board = await fetchBoardDetailApi('663893b5cc428aa420481e77')
      setBoard(_board)
    })()
  }, [])
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board}/>
      <BoardContent board={mockData?.board}/>
    </Container>
  )
}

export default Board