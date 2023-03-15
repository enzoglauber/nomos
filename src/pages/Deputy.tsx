import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function Deputy() {
  return (
    <>
      <Box>
        <Box sx={{ backgroundColor: 'primary.main', height: '15.75rem' }} />
        <Box sx={{ my: 6, mt: -16, display: 'flex', justifyContent: 'center' }}>
          <Card variant="outlined" elevation={0} sx={{ border: 'none', width: '24rem' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                legal
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  )
}

export default Deputy
