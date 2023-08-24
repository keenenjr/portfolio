import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#051e39',
    borderColor: '#051e39',
    '&:hover': {
      backgroundColor: '#c5e0ff',
      color: '#051e39',
    },
}));

export default ColorButton;
