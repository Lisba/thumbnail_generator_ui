import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface IButton {
  sx?: object;
}

export default function CircularIndeterminate({ sx }: IButton) {
  return (
    <Box sx={sx}>
      <CircularProgress color='inherit' />
    </Box>
  );
}
