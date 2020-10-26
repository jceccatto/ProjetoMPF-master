import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
        fontFamily: 'Zilla Slab',
        fontSize: '2.5rem',
        fontWeight: theme.typography.fontWeightRegular,
    },
    containerTips:{
        maxWidth: '40rem',
        backgroundColor: '#8257E5',
        color: '#ffff',
    },
  }));

const Tips = () =>{
    const classes = useStyles();
    return(
        <div>
            <Accordion classes={{root: classes.containerTips, expanded: classes.containerTips}}>
                <AccordionSummary
                    expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <h1 className={classes.heading}>Hardware</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Ops! Ainda não temos nada cadastrado sobre este assunto. 
                        Tente falar como nosso bot.
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.containerTips}>
                <AccordionSummary
                    expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <h1 className={classes.heading}>Windows</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                         Ops! Ainda não temos nada cadastrado sobre este assunto. 
                         Tente falar como nosso bot.
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Tips;