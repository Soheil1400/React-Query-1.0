import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
