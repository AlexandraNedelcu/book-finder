import { Typography, Container } from '@mui/material'

const NotFound = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" color="error" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography>The page you’re looking for doesn’t exist.</Typography>
  </Container>
)

export default NotFound
