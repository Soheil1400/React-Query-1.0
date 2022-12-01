import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, {useCallback, useEffect, useRef} from "react";
import {sectionCode2} from "../data/section2/code";
import {sectionCode4} from "../data/section4/section4";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import {TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {PrimeBtn, SecoBtn} from "../style/components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Section4 = () => {
    const inputRef = useRef<any>()

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        inputRef.current.value = e.target.value
    }, [inputRef])

    useEffect(() => {
        return () => {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }, [])

    return (
        <Grid container>
            <Grid item xs={12} p={2}>
                <Typography color={'error.main'} fontSize={30} fontWeight={'bold'}>
                    UseMutation
                </Typography>
                <Grid pl={2}>
                    <Typography fontWeight={'bold'}>
                        What is useMutation?
                    </Typography>
                    <Typography>
                        React Query hook for Post data
                    </Typography>
                    <Typography fontWeight={'bold'}>
                        What are important keys?
                    </Typography>
                    <Typography>
                        mutationFn: (variables: TVariables) arrowF Promise TData
                    </Typography>
                    <Typography>
                        onSuccess: (data: TData, variables: TVariables, context?: TContext) arrowF Promise unknown |
                        unknown
                    </Typography>
                    <Typography>
                        oonError: (err: TError, variables: TVariables, context?: TContext) arrowF Promise unknown |
                        unknown
                    </Typography>
                    <Typography fontWeight={'bold'}>
                        Sample code
                    </Typography>
                    <Grid sx={{display: {xs: 'none', md: 'flex'}}} bgcolor={'#F4F7F9'} borderRadius={4} p={2} mt={2}>
                        <Typography fontFamily={'Ubuntu'} component={'pre'}>
                            {sectionCode4}
                        </Typography>
                    </Grid>
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
                            <Typography>Exercise 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Post one api with useMutation
                            </Typography>
                            <Typography>
                                Time: 10min
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
                <Link to={'/'}>
                    <SecoBtn variant={'contained'}>
                        <Typography fontSize={16} mr={1}>
                            Soon
                        </Typography>
                        <KeyboardArrowRightRoundedIcon/>
                    </SecoBtn>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Section4