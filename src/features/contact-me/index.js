import React from 'react';
import {
  Body,
  Title,
  Button,
  InputField,
  FormWrapper,
  SelectField
} from './styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  Grid,
  Input,
  MenuItem,
  Typography,
  makeStyles,
  InputLabel,
  FormControl
} from '@material-ui/core';
import { prop, compose } from 'ramda';
// import { Button } from '../../components';
import { updateForm, submitForm } from './container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    width: '100%'
  },
  formField: {
    width: '100%',
    padding: '1rem'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonRow: {
    display: 'flex',
    paddingLeft: '1rem',
    flexDirection: 'row'
  }
}));

export const ContactMe = ({ contact, dispatch }) => {
  console.log(contact)
  const classes = useStyles();
  return (
    <Body className={classes.root}>
      <Grid container>
        <Title item xs={12}>
          <Typography variant="h3" noWrap>
            Contact Me
          </Typography>
        </Title>
      </Grid>
      <FormWrapper>
        <form noValidate autoComplete='off' className={classes.form}>
          <Grid item xs={12} className={classes.row}>
            <FormControl variant='outlined' className={classes.formField}>
              <InputLabel htmlFor='firstName'>First Name</InputLabel>
              <InputField id='firstName' name='firstName' onChange={e => dispatch(updateForm('firstName', e))} />
            </FormControl>
            <FormControl variant='outlined' className={classes.formField}>
              <InputLabel htmlFor='lastName'>Last Name</InputLabel>
              <InputField id='lastName' name='lastName' onChange={e => dispatch(updateForm('lastName', e))} />
            </FormControl>
          </Grid>

          <Grid item xs={12} className={classes.row}>
            <FormControl variant='outlined' className={classes.formField}>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <InputField id='email' name='email' onChange={e => dispatch(updateForm('email', e))} />
            </FormControl>
            <FormControl variant='outlined' className={classes.formField}>
              <InputLabel htmlFor='topic'>Topic</InputLabel>
              <SelectField
                value={prop('topic', contact)}
                onChange={e => dispatch(updateForm('topic', e))}
                input={ <Input name='beverages' id='drink-list' /> }
              >
                <MenuItem value=''><em>None</em></MenuItem>
                {
                  ['availability', 'make-up purchases', 'technical error'].map(topic =>
                    <MenuItem
                      key={topic}
                      value={topic}
                    >
                      {topic}
                    </MenuItem>
                  )
                }
              </SelectField>
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.buttonRow}>
            <Button onClick={() => dispatch(submitForm(contact))}>Send Email</Button>
          </Grid>
        </form>
      </FormWrapper>
    </Body>
  );
}

const mapStateToProps = ({ contact }, ownProps) => {
  console.log(ownProps)
  return ({ contact: contact.contact });
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ContactMe);
