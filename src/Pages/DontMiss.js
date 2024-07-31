// import { Button, Grid, Typography } from '@mui/material'
// import React from 'react'

// export default function DontMiss() {
//     return (
//         <Grid container flexDirection={'column'} id="menu"
//             textAlign="center" justifyContent={'center'}
//             alignItems="center" gap={4} sx={{ padding: '80px 10px', marginTop: { xs: 70, lg: 0, md: 50, sm: 50 } }}
//         >
//             <Typography variant='h3' fontWeight={'bold'}
//                 sx={{ color: '#56112e' }}>
//                 Dont't Miss our Menu !
//             </Typography>
//             <Typography sx={{ color: '#56112e' }} >
//                 Lorem ipsum is placeholder text commonly used in the graphic, <br /> print,
//                 and publishing industries for previewing layouts and visual mockups.
//             </Typography>
//             <Button variant='contained'
//                 sx={{ backgroundColor: '#56112e', color: '#ffdbb0', width: { xs: '90%', md: "220px", sm: "220px", lg: '220px' }, borderRadius: 4 }}>
//                 SEE MENU
//             </Button>
//         </Grid>
//     )
// }


import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DontMiss() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/products'); // Navigate to the /products route
  };

  return (
    <Grid
      container
      flexDirection={'column'}
      id="menu"
      textAlign="center"
      justifyContent={'center'}
      alignItems="center"
      gap={4}
      sx={{ padding: '80px 10px', marginTop: { xs: 70, lg: 0, md: 50, sm: 50 } }}
    >
      <Typography variant='h3' fontWeight={'bold'}
        sx={{ color: '#56112e' }}>
        Don’t Miss our Menu!
      </Typography>
      <Typography sx={{ color: '#56112e' }}>
        Lorem ipsum is placeholder text commonly used in the graphic, <br /> print,
        and publishing industries for previewing layouts and visual mockups.
      </Typography>
      <Button
        variant='contained'
        onClick={handleButtonClick} // Attach click handler
        sx={{ backgroundColor: '#56112e', color: '#ffdbb0', width: { xs: '90%', md: "220px", sm: "220px", lg: '220px' }, borderRadius: 4 }}
      >
        SEE MENU
      </Button>
    </Grid>
  );
}
