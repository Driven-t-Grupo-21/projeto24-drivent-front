import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function DashboardLoading() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <CircularProgress />
    </Box>
  );
}

export default DashboardLoading;
