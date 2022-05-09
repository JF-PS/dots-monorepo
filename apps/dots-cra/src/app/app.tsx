import styled from 'styled-components';
import { Box, Button } from '@dots-monorepo/dots-package-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>Dots components : </h1>
      <Button
        onClick={() =>
          alert(' 🦄🚀🦄 Connect the dooooooooooooooots !!!! 🦄🚀🦄')
        }
      >
        Click me
      </Button>
      <Box sx={{ color: '#FFF340' }}>Dots is in the place 🦄🚀 </Box>
    </StyledApp>
  );
}

export default App;
