import Grid from "@mui/material/Grid";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const Test = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['todo'],
        queryFn: () =>
            axios('https://jsonplaceholder.typicode.com/todos/1')
    })

    if (isLoading) {
        return <Grid>Loading ...</Grid>
    }

    if (isError) {
        return <Grid>not found</Grid>
    }

    return (
        <Grid>
            {data.data.title}
        </Grid>
    )
}

export default Test