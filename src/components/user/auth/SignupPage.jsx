import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { UserAuthentication } from "../../../Services/UserAuthentication"
function SignupPage() {
    const navigate = useNavigate()
    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .required('First Name is required'),
        lastName: yup.string()
            .required('Last name is required'),
        email: yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: yup.string()
            .required('Password is required'),
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = async (data) => {
        let userInfo = {
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
            password: data.password,
            password2: data.password 
        }
        const user =  await UserAuthentication.UserSignup(userInfo);
        if(user.status){
            reset();
            navigate("/auth/login");
        }
        console.log("==> User Authentication",user);
    };

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    {...register('lastName')}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    {...register('firstName')}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.firstName?.message}</div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    {...register('lastName')}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.lastName?.message}</div>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    {...register('email')}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register('password')}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/auth/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SignupPage