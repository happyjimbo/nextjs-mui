"use client";
import {
    AppBar,
    Box,
    Button,
    CssBaseline, Dialog, DialogContent, DialogTitle,
    IconButton, Slide, SlideProps,
    Toolbar,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {DrawerWidth} from "@/app/navigation/NavigationConst";
import Image from "next/image";

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => (
    <Slide direction="up" ref={ref} {...props}>
        {props.children}
    </Slide>
));
Transition.displayName = "Transition";

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
                 <Dialog open={isOpenDialog}
                         onClose={() => setOpenDialog(false)}
                         TransitionComponent={Transition}
                         keepMounted={false}
                         aria-labelledby="alert-dialog-title"
                 >
                    <DialogTitle id="alert-dialog-title" >
                         Magic Alert
                         <IconButton aria-label="close"
                                     onClick={() => setOpenDialog(false)}
                                     sx={{
                                         position: "absolute",
                                         right: 8,
                                         top: 8,
                                         color: (theme) => theme.palette.grey[500],
                                     }}
                         >
                             <CloseIcon />
                         </IconButton>
                     </DialogTitle>

                     <DialogContent dividers>
                         <Box
                             sx={{
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 flexDirection: "column",
                             }}
                         >

                         <Box sx={{
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                             flexDirection: "column"
                            }}
                         >
                             <Image
                                 src="https://media.tenor.com/DNCBqbguizsAAAAM/magic.gif"
                                 width="640"
                                 height="480"
                                 alt="magic"
                             />
                             <Typography gutterBottom sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 1 }}>
                                 MAGIC
                             </Typography>
                         </Box>

                         </Box>
                     </DialogContent>
                 </Dialog>
             </Toolbar>
         </AppBar>
     </Box>
    )
}

export default TopBar;