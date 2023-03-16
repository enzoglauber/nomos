import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

interface RowLabelValueProps {
  label: string
  value?: string
}

export default function RowLabelValue({ label, value }: RowLabelValueProps) {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom color="text.primary" component={'b'} mr={1}>
        {label}
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        color="secondary"
        marginRight={3}
        component={'span'}
      >
        {value && !['null', null].includes(value) ? value : '-'}
      </Typography>
    </Box>
  )
}
