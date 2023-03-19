import Typography from '@mui/material/Typography'

export interface SubHeaderProps {
  title: string
  subtitle: string
}

function SubHeader({ title, subtitle }: SubHeaderProps) {
  return (
    <div data-testid="subheader">
      <Typography variant="h2" color="secondary" gutterBottom mb={2} data-testid="title">
        {title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom data-testid="subtitle">
        {subtitle}
      </Typography>
    </div>
  )
}

export default SubHeader
