import React from "react";
import { Box, Stack } from "@mui/material";
import SlideBar from "./components/SlideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Box >
        <Navbar/>
        <Stack direction={'row'} spacing={3} justifyContent='space-between'>
            <SlideBar />
            <Feed />
            <RightBar   sx={{ display: { xs: 'none', sm: 'block'  } }}/>
    </Stack>
    </Box>
    </>
  );
}

export default App;

