import { Box as MuiBox } from '@mui/material';
import { styled } from '@mui/system';

const Box = styled(MuiBox)({
  margin: 'auto',
  border: '3px solid #FFF340',
  borderRadius: 3,
  backgroundColor: '#0024F9',
  padding: 3,
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default Box;
