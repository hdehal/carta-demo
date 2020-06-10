import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    }
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#25ba86",
            contrastText: "white" //button text white instead of black
        }
    }
});

export default function Form() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl fullWidth>
                <TextField
                    color="secondary"
                    id="signatureForm"
                    className="tooltip left"
                    label="Signature"
                    variant="filled" defaultValue="Your Signature"
                />
            </FormControl>

            <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                <FormControl>
                    <FormControlLabel
                        control={<Checkbox />}
                        color="primary"
                        label="I agree to the Equity Incentive Plan"
                    />
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Accept Grant
                        </Button>
                    </ThemeProvider>
                </FormControl>
            </Grid>
        </form>
    );
}