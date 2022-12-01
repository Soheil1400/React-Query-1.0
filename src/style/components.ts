import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import {theme} from "../theme/theme";

export const PrimeBtn = styled(Button)({
    width: 100,
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.common.white,
    }
})
export const SecoBtn = styled(Button)({
    width: 100,
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.primary.main,
    }
})