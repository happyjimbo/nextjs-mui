"use client";
import {AppBar, Box, Button, CssBaseline, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import {DrawerWidth} from "@/app/navigation/NavigationConst";
import MagicDialog from "@/app/dialogs/MagicDialog";

const TopBar = () => {

    const [isOpenDialog, setOpenDialog] = useState(false);

    return (
     <Box sx={{flexGrow: 1}}>
        <CssBaseline />
         <AppBar
            position="fixed"
            sx={{width: `calc(100% - ${DrawerWidth}px)`, ml:`${DrawerWidth}px`}}>
             <Toolbar>
                 <Typography variant="h6"
                             component="div"
                             sx={{flexGrow: 1}} >
                     James MUI Playground
                 </Typography>
                 <Button color="inherit"
                         onClick={() => setOpenDialog(true)} >
                     Magic
                 </Button>
                    <MagicDialog isOpenDialog={isOpenDialog} setOpenDialog={setOpenDialog} />
             </Toolbar>
         </AppBar>
     </Box>
    )
}

export default TopBar;