import {Box, Dialog, DialogContent, DialogTitle, IconButton, Slide, SlideProps, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import React from "react";


const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => (
    <Slide direction="up" ref={ref} {...props}>
        {props.children}
    </Slide>
));
Transition.displayName = "Transition";

type Props = {
    isOpenDialog: boolean,
    setOpenDialog: (value: boolean) => void,
}

const MagicDialog = ({isOpenDialog, setOpenDialog}:Props) => {

    return (
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
    )
}
export default MagicDialog;