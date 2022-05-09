import styles from './index.module.css';
import { Box, Button } from '@dots-monorepo/dots-package-components';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h1>Dots components : </h1>
      <Button
        onClick={() =>
          alert(' 🦄🚀🦄 Connect the dooooooooooooooots !!!! 🦄🚀🦄')
        }
      >
        Click me
      </Button>
      <Box sx={{ color: '#FFF340' }}>Dots is in the place 🦄🚀 </Box>
    </div>
  );
}

export default Index;
