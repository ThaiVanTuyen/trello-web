import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '../../../utils/sorts'
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, SetOrderedColumns] = useState(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  // useEffect(() => {
  //   SetOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  // }, [board])
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      const oldindex = orderedColumns.findIndex( c => c._id === active.id)
      const newindex = orderedColumns.findIndex( c => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldindex, newindex)
      SetOrderedColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        width: '100%',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1976d2'),
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}
      >
        <ListColumns columns={ orderedColumns } />
      </Box>
    </DndContext>
  )
}

export default BoardContent