import { Attachment, Comment, Group } from '@mui/icons-material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button, Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'

function Card({ card }) {
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      {card?.cover && <CardMedia
        sx={{ height: 140 }}
        image={card?.cover}
        title={card?.title}/>}
      <CardContent sx={{
        p: 1.5,
        '&:last-child': { paddingBottom: 1.5 }
      }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      <CardActions sx={{
        p: '0 4px 8px 4px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Button size="small" startIcon={<Group/>}>{card?.memberIds.length}</Button>
        <Button size="small" startIcon={<Comment/>}>{card?.comments.length}</Button>
        <Button size="small" startIcon={<Attachment/>}>{card?.attachments.length}</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card