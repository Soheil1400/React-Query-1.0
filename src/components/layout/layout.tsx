import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return(
        <Grid container p={2}>
            <Grid item xs={12} bgcolor={'primary.main'} color={'error.main'} borderRadius={2} p={2}>
                <Typography variant={'h4'} fontWeight={'bold'}>
                    REACT QUERY
                </Typography>
            </Grid>
            <Outlet/>
        </Grid>
    )
}

export default Layout