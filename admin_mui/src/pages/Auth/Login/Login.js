import React, { useState } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";

import { Grid, CircularProgress, Typography, Button, Tabs, Tab, TextField, Fade } from "@material-ui/core";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "./google.svg";

import loggger from "../../../utils/logger";

// context
// import { useUserDispatch, loginUser } from "../../context/UserContext";
// import { AuthProvider, useAuthState, useAuthDispatch, loginUser, logout, load_user, checkAuthenticated, signup }
import { loginUser, signup, testCallback, useAuthState, useAuthDispatch } from "../../../context/auth";

function Login(props) {
  const classes = useStyles();

  // global
  const userDispatch = useAuthDispatch();
  const { loading, errorMessage, isAuthenticated } = useAuthState();

  // local
  const [activeTabId, setActiveTabId] = useState(0);
  const [nameValue, setNameValue] = useState("");

  const [loginValue, setLoginValue] = useState("mustafa@akbas.net");
  const [passwordValue, setPasswordValue] = useState("");

  // loggger(loading, 'd');
  // loggger(isAuthenticated, 'w');

  if (isAuthenticated)
    return <Redirect to='/admin/dashboard' />;

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Material Admin</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>

          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h3" className={classes.greeting}>
                Good Morning, User
              </Typography>
              <Button
                onClick={() => testCallback(userDispatch, loginValue, passwordValue, nameValue)}
                disabled={loading}
                size="large"
                className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>

              <Fade in={Boolean(errorMessage)}>
                <Typography color="secondary" className={classes.errorMsg}>
                  {errorMessage}
                </Typography>
              </Fade>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {loading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={loginValue.length === 0 || passwordValue.length === 0}
                    onClick={() => loginUser(userDispatch, loginValue, passwordValue)}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>
              <Fade in={Boolean(errorMessage)}>
                <Typography color="secondary" className={classes.errorMsg}>
                  {errorMessage}
                </Typography>
              </Fade>
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                placeholder="Full Name"
                type="text"
                fullWidth
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {loading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      loggger('register', 'd')
                      signup(userDispatch, loginValue, passwordValue, nameValue)
                    }}
                    disabled={
                      loginValue.length === 0 ||
                      passwordValue.length === 0 ||
                      nameValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2014-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic</a>, LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
