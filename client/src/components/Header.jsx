
import { AppBar, Toolbar, makeStyles, Typography} from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import url from "./assets/Project showcase.png"

const useStyles = makeStyles({
    header: {
        background: '#fff',
        height: 70
    },
    menu: {
        color: '#000'
    },
    image: {
        height: 70,
        margin: 'auto',
        paddingRight: 70
    },
    title: {
        color: '#000000',
        textAlign:'center'
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Menu className={classes.menu} />
                <img src={url} alt="logo" className={classes.image} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;