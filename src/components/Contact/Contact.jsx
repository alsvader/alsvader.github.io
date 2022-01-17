import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { Grid, TextField, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import ContactImage from '../../assets/images/contact.jpg';
import styles from './styles';

export const Contact = ({ classes }) => {
	const [inputs, setInputs] = useState({
		name: { value: '', error: false },
		email: { value: '', error: false },
		message: { value: '', error: false },
	});
	const [showMessage, setShowMessage] = useState(false);
	const [isRobot, setisRobot] = useState(true);
	const captcha = useRef(null);
	const [t] = useTranslation();

	const handleInputChange = (event, name) => {
		const {
			target: { value, type },
		} = event;

		const emailFormat =
			/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		const isEmpty = type === 'email' ? !value.match(emailFormat) : !value;
		const inputData = { value, error: isEmpty };

		setInputs({ ...inputs, [name]: inputData });
	};

	const isAnInValidForm = () => {
		return Object.keys(inputs)
			.map((key) => !inputs[key].value || inputs[key].error)
			.some((item) => item);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { name, email, message } = inputs;

			const data = {
				captcha: captcha.current.getValue(),
				name: name.value,
				email: email.value,
				message: message.value,
			};

			captcha.current.reset();

			const response = await fetch(
				'http://localhost:5000/captchaVerification',
				{
					method: 'POST',
					mode: 'cors',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			const { success } = await response.json();

			if (success) {
				setInputs({
					name: { value: '', error: false },
					email: { value: '', error: false },
					message: { value: '', error: false },
				});
				setShowMessage(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onRecaptchaChange = (value) => {
		setisRobot(!value);
	};

	const closeMessage = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setShowMessage(false);
	};

	const { name, email, message } = inputs;

	return (
		<Grid container spacing={1} className={classes.container}>
			<Grid item xs={12}>
				<img src={ContactImage} alt="Contact Me" />
			</Grid>
			<Grid item xs={12}>
				<h2>{t('home.contactMe')}</h2>
				<p>{t('home.contactDescr')}</p>
				<form onSubmit={handleSubmit} noValidate autoComplete="off">
					<TextField
						id="name"
						label={t('home.inputLabelName')}
						inputProps={{ 'aria-label': 'name' }}
						variant="outlined"
						value={name.value}
						required
						error={name.error}
						helperText={name.error && t('home.inputNameHelperText')}
						onChange={(e) => handleInputChange(e, 'name')}
					/>
					<TextField
						type="email"
						id="email"
						label={t('home.inputLabelEmail')}
						inputProps={{ 'aria-label': 'email' }}
						variant="outlined"
						value={email.value}
						required
						error={email.error}
						helperText={email.error && t('home.inputEmailHelperText')}
						onChange={(e) => handleInputChange(e, 'email')}
					/>
					<TextField
						id="message"
						label={t('home.inputLabelMessage')}
						multiline
						fullWidth
						inputProps={{ 'aria-label': 'message' }}
						variant="outlined"
						value={message.value}
						required
						error={message.error}
						helperText={message.error && t('home.inputMessageHelperText')}
						onChange={(e) => handleInputChange(e, 'message')}
					/>
					{showMessage && (
						<Snackbar
							open={showMessage}
							autoHideDuration={6000}
							onClose={closeMessage}
						>
							<Alert
								severity="success"
								elevation={6}
								variant="filled"
								className={classes.alert}
							>
								{t('home.formSuccess')}
							</Alert>
						</Snackbar>
					)}
					<div className={classes.recaptcha}>
						<ReCAPTCHA
							ref={captcha}
							sitekey="6LeCkRkeAAAAAF4MjYHVZvZXn8q6ubw2zw94NBTZ"
							onChange={onRecaptchaChange}
						/>
					</div>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						size="large"
						disabled={isAnInValidForm() || isRobot}
					>
						Submit
					</Button>
					<p>{t('home.getBackText')}</p>
				</form>
			</Grid>
		</Grid>
	);
};

Contact.propTypes = {
	classes: PropTypes.shape({
		container: PropTypes.string.isRequired,
		alert: PropTypes.string.isRequired,
		recaptcha: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Contact);
