import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface IInputWithIcon {
  label: string;
  onChange?: (event) => void;
  name: string;
}

export default function InputWithIcon({ name, label, onChange }: IInputWithIcon) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: '#4395c7', mr: 1, my: 0.5 }} />
        <TextField name={name} label={label} variant='standard' onChange={onChange} />
      </Box>
    </Box>
  );
}
