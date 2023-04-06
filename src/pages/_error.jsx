import Link from 'next/link';
import { Grid } from '@mui/material';

const _error = () => {
  return (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3} textAlign="center">
    <h1>🔗 404 | Page Not Found ❌</h1>
    <Link href="/">
        Go back
    </Link>
  </Grid>   
   
</Grid> 
  )
  }
export default _error;