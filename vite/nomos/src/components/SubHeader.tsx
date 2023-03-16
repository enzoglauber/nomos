import Typography from '@mui/material/Typography'

interface SubHeaderProps {
  title: string
  subtitle: string
}

export default function SubHeader({ title, subtitle }: SubHeaderProps) {
  return (
    <div>
      <Typography variant="h2" color="secondary" gutterBottom mb={2}>
        {title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {subtitle}
      </Typography>
    </div>
  )
}
