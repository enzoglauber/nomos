import Search from '@mui/icons-material/Search'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import React from 'react'

export interface SubHeaderProps extends OutlinedInputProps {
  onClickSearch?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export default function InputFilter({ id, label, sx, onClickSearch, ...props }: SubHeaderProps) {
  return (
    <FormControl sx={sx} variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        label={label}
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={onClickSearch}>
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
