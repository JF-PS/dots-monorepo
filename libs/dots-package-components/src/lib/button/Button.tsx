import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/system';

const Button = styled(MuiButton)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  border: '3px solid #FFF340',
  color: '#FFF340',
  borderRadius: 3,
  backgroundColor: '#0024F9',
  padding: 3,
  width: '100px',
  height: '100px',
});

export default Button;
