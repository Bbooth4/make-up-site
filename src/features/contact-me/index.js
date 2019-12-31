import React from 'react';
import {
  Body,
  Title,
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
import { prop, compose, includes } from 'ramda';
import { Button, Textarea } from '../../components';
import { updateForm, submitForm } from './container';

const useStyles = makeStyles(() => ({
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

export const ContactMe = ({
  contact,
  required,
  formUpdate,
  formSubmit,
  missingFields,
  selectOptions
  }) => {
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
              <InputField
                required
                id='firstName'
                name='firstName'
                error={required('firstName')}
                onChange={e => formUpdate('firstName', e, missingFields)}
              />
            </FormControl>
            <FormControl variant='outlined' className={classes.formField}>
              <InputLabel htmlFor='lastName'>Last Name</InputLabel>
              <InputField
                required
                id='lastName'
                name='lastName'
                error={required('lastName')}
                onChange={e => formUpdate('lastName', e, missingFields)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} className={classes.row}>
            <FormControl variant='outlined' className={classes.formField}>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <InputField
                required
                id='email'
                name='email'
                error={required('email')}
                onChange={e => formUpdate('email', e, missingFields)}
              />
            </FormControl>
            <FormControl variant='outlined' className={classes.formField}>
              <InputLabel htmlFor='topic'>Topic</InputLabel>
              <SelectField
                required
                error={required('topic')}
                value={prop('topic', contact)}
                onChange={e => formUpdate('topic', e, missingFields)}
                input={ <Input name='beverages' id='drink-list' /> }
              >
                <MenuItem value=''><em>None</em></MenuItem>
                {
                  selectOptions.map(topic =>
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
          <Grid item xs={12} className={classes.row}>
            <FormControl variant='outlined' className={classes.formField}>
              <Textarea
                required
                label='Requests'
                error={required('content')}
                onChange={e => formUpdate('content', e, missingFields)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.buttonRow}>
            <Button onClick={() => formSubmit(contact)}>Send Email</Button>
          </Grid>
        </form>
      </FormWrapper>
    </Body>
  );
}

const mapStateToProps = ({ contact }) => ({
  contact: contact.contact,
  missingFields: contact.missingFields,
  required: field => includes(field, contact.missingFields),
  selectOptions: ['availability', 'make-up purchases', 'technical error']
});

const mapDispatchToProps = dispatch => ({
  formSubmit: form => dispatch(submitForm(form)),
  formUpdate: (field, value, fields) => dispatch(updateForm(field, value, fields))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ContactMe);
