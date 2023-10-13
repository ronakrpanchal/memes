import {AppBar , Toolbar ,Typography } from "@mui/material"
const Header = () =>{
    return (
        <AppBar className="header" position="static">
            <Toolbar>
                <Typography variant="h6">MEMEIT</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header