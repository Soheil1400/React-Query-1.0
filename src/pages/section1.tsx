import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import {Link} from "react-router-dom";
import {sectionCode1} from "../data/section1/code";
import {PrimeBtn, SecoBtn} from "../style/components";
import {TextField} from "@mui/material";
import React, {useCallback, useRef} from "react";

const Section1 = () => {
    const inputRef = useRef<any>()

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        inputRef.current.value = e.target.value
    }, [inputRef])

    return (
        <Grid container>
            <Grid item xs={12} p={2}>
                <Typography color={'error.main'} fontSize={30} fontWeight={'bold'}>
                    Overview
                </Typography>
                <Grid pl={2}>
                    <Typography fontWeight={'bold'}>
                        What is react query?
                    </Typography>
                    <Typography>
                        React query is data fetching library
                    </Typography>
                    <Typography fontWeight={'bold'}>
                        What is World without react query?
                    </Typography>
                    <Typography>
                        we must use useState and useEffect Hook but this way bad for
                        performance and all developer confused, we use state and effect for client side app and we must
                        use react query for server app and all async application
                    </Typography>
                    <Typography fontWeight={'bold'}>
                        What is benefit of the react query?
                    </Typography>
                    <Typography>
                        Clean
                    </Typography>
                    <Typography>
                        Memory performance
                    </Typography>
                    <Typography>
                        Customizable
                    </Typography>
                    <Typography>
                        Do a lot of works without state and effect
                    </Typography>
                    <Typography>
                        Good for multiple request
                    </Typography>
                    <Typography>
                        Ez to learn
                    </Typography>
                    <Typography fontWeight={'bold'}>
                        Sample Code
                    </Typography>
                    <Grid sx={{display: {xs: 'none', md: 'flex'}}} bgcolor={'#F4F7F9'} borderRadius={4} p={2} mt={2}>
                        <Typography fontFamily={'Ubuntu'} component={'pre'}>
                            {sectionCode1}
                        </Typography>
                    </Grid>
                    <Typography fontWeight={'bold'} my={3}>
                        if you dont understand you don't worry we check all code in next sections 😅
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} p={2}>
                <Grid display={'flex'} alignItems={'center'} color={'error.main'}>
                    <AccessTimeRoundedIcon fontSize={'large'}/>
                    <Typography fontSize={30} fontWeight={'bold'} ml={2}>
                        Exercise
                    </Typography>
                </Grid>
                <Grid p={2}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>} id="panel1a-header">
                            <Typography>Exercise 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                create component and call one api and handle loading and error with state and effect
                            </Typography>
                            <Typography>
                                Time: 20min
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
            <Grid item xs={12} p={2}>
                <Grid display={'flex'} alignItems={'center'} color={'error.main'}>
                    <NoteAltRoundedIcon fontSize={'large'}/>
                    <Typography fontSize={30} fontWeight={'bold'} ml={2}>
                        Note
                    </Typography>
                </Grid>
                <Grid p={2}>
                    <TextField onChange={handleChange} fullWidth multiline name={'note'} inputRef={inputRef}/>
                </Grid>
            </Grid>
            <Grid display={'flex'} item xs={12} justifyContent={'space-between'}>
                <Link to={'/'}>
                    <PrimeBtn variant={'contained'}>
                        <HomeRoundedIcon/>
                        <Typography ml={1}>
                            HOME
                        </Typography>
                    </PrimeBtn>
                </Link>
                <Link to={'/course/section2'}>
                    <SecoBtn variant={'contained'}>
                        <Typography fontSize={16} mr={1}>
                            NEXT
                        </Typography>
                        <KeyboardArrowRightRoundedIcon/>
                    </SecoBtn>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Section1