import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, {useCallback, useEffect, useRef} from "react";
import IconButton from "@mui/material/IconButton";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import {sectionCode2} from "../data/section2/code";
import {sectionCode3} from "../data/section3/section3";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import {TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {PrimeBtn, SecoBtn} from "../style/components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Section3 = () => {
    const inputRef = useRef<any>()

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        inputRef.current.value = e.target.value
    }, [inputRef])

    const handleCopy = useCallback((text: string) => {
        navigator.clipboard.writeText(text);
    }, [])

    useEffect(() => {
        return () => {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }, [])

    return (
        <Grid container>
            <Grid item xs={12} p={2}>
                <Typography color={'error.main'} fontSize={30} fontWeight={'bold'}>
                    Devtools
                </Typography>
                <Grid pl={2}>
                    <Typography fontWeight={'bold'}>
                        What is devtools?
                    </Typography>
                    <Typography>
                        Devtools is platform to analyse api and do a lot of thing you never know 😍
                    </Typography>
                    <Typography fontWeight={'bold'}>
                        How to install that?
                    </Typography>
                    <Grid display={'flex'} alignItems={'center'}>
                        <Typography fontFamily={'Ubuntu'} pr={5}>
                            npm i @tanstack/react-query-devtools
                        </Typography>
                        <IconButton>
                            <ContentCopyRoundedIcon onClick={() => handleCopy('yarn add @tanstack/react-query')}/>
                        </IconButton>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'}>
                        <Typography fontFamily={'Ubuntu'} pr={5}>
                            yarn add @tanstack/react-query-devtools
                        </Typography>
                        <IconButton>
                            <ContentCopyRoundedIcon onClick={() => handleCopy('yarn add @tanstack/react-query')}/>
                        </IconButton>
                    </Grid>
                    <Typography fontWeight={'bold'}>
                        Sample code
                    </Typography>
                    <Grid sx={{display: {xs: 'none', md: 'flex'}}} bgcolor={'#F4F7F9'} borderRadius={4} p={2} mt={2}>
                        <Typography fontFamily={'Ubuntu'} component={'pre'}>
                            {sectionCode3}
                        </Typography>
                    </Grid>
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
                <Link to={'/course/section4'}>
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

export default Section3