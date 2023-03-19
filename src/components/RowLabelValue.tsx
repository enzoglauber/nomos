import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

export interface RowLabelValueProps {
  label: string
  value?: string | null
}

function RowLabelValue({ label, value }: RowLabelValueProps) {
  return (
    <Box data-testid="row-label-value">
      <Typography
        data-testid="label"
        variant="subtitle2"
        gutterBottom
        color="text.primary"
        component={'b'}
        mr={1}
      >
        {label}
      </Typography>
      <Typography
        data-testid="value"
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

export default RowLabelValue
