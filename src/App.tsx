// import { useMemo } from 'react';
// import { createTheme } from '@mui/material/styles';
// import { ThemeProvider, CssBaseline, Box } from '@mui/material';

// import { themeSettings } from './theme';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './scenes/navbar';
// import Dashboard from './scenes/Dashboard';

// function App() {
//   const theme = useMemo(() => createTheme(themeSettings), []);
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/predection" element={<div>predection</div>} />
//             </Routes>
//           </Box>
//         </ThemeProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { Box } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { themeSettings } from './theme';
import Navbar from './scenes/navbar';
import Dashboard from './scenes/Dashboard';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<div>predection</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
