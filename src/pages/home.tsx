import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {Link} from "react-router-dom";
import {useCallback} from "react";
import {PrimeBtn, SecoBtn} from "../style/components";

const Home = () => {

    const handleCopy = useCallback((text: string) => {
        navigator.clipboard.writeText(text);
    }, [])

    return (
        <Grid container item xs={12} justifyContent={'center'}>
            <Grid item xs={12} textAlign={'center'} my={2}>
                <Typography variant={'h6'} fontWeight={'bold'}>
                    WELCOME TO REACT QUERY COURSE
                </Typography>
            </Grid>
            <Grid display={'flex'} item xs={12} my={2} justifyContent={'center'}>
                <Grid width={'33%'} minWidth={300}>
                    <Typography>
                        Installation
                    </Typography>
                    <Grid p={1}>
                        <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography fontFamily={'Ubuntu'}>
                                yarn add @tanstack/react-query
                            </Typography>
                            <IconButton>
                                <ContentCopyRoundedIcon onClick={() => handleCopy('yarn add @tanstack/react-query')}/>
                            </IconButton>
                        </Grid>
                        <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography fontFamily={'Ubuntu'}>
                                npm i @tanstack/react-query
                            </Typography>
                            <IconButton>
                                <ContentCopyRoundedIcon onClick={() => handleCopy('yarn add @tanstack/react-query')}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid display={'flex'} item xs={12} lg={4} justifyContent={'space-between'}>
                <PrimeBtn variant={'contained'}>
                    <InfoOutlinedIcon/>
                    <Typography ml={1}>
                        INFO
                    </Typography>
                </PrimeBtn>
                <Link to={'/course/section1'}>
                    <SecoBtn variant={'contained'}>
                        <Typography ml={1}>
                            LEARN
                        </Typography>
                        <KeyboardArrowRightRoundedIcon/>
                    </SecoBtn>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Home