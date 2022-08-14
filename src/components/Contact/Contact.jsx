import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { Grid, TextField, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import ContactImage from '../../assets/images/contact.webp';
import { constants } from '../../utils/constants';
import styles from './styles';

export const Contact = ({ classes }) => {
	const [inputs, setInputs] = useState({
		name: { value: '', error: false },
		email: { value: '', error: false },
		message: { value: '', error: false },
	});
	const [showMessage, setShowMessage] = useState(false);
	const [errorForm, setErrorForm] = useState(false);
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

	const resetForm = (error = false) => {
		setInputs({
			name: { value: '', error: false },
			email: { value: '', error: false },
			message: { value: '', error: false },
		});
		setShowMessage(true);
		setErrorForm(error);
	};

	const sendFormToEmail = async (emailData) => {
		try {
			// console.log(emailData);
			const response = await fetch(constants.FORM_CARRY_API, {
				method: 'POST',
				body: emailData,
				headers: {
					Accept: 'application/json',
				},
			});

			const { status } = await response.json();

			if (status === 'success') {
				resetForm();
			} else {
				resetForm(true);
			}
		} catch (error) {
			resetForm(true);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { name, email, message } = inputs;

			const data = {
				captcha: captcha.current.getValue(),
			};

			captcha.current.reset();

			const response = await fetch(
				`${constants.BLOG_API}/captchaVerification`,
				{
					method: 'POST',
					mode: 'cors',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			const { success } = await response.json();

			if (success) {
				const formData = new FormData();
				formData.append('name', name.value);
				formData.append('email', email.value);
				formData.append('message', message.value);
				sendFormToEmail(formData);
				return;
			}

			resetForm(true);
		} catch (error) {
			resetForm(true);
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
			<Grid item xs={12} md={5} xl={6}>
				<img src={ContactImage} alt="Contact Me" />
			</Grid>
			<Grid item xs={12} md={7} xl={6}>
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
								severity={errorForm ? 'error' : 'success'}
								elevation={6}
								variant="filled"
								className={classes.alert}
							>
								{errorForm ? t('home.formError') : t('home.formSuccess')}
							</Alert>
						</Snackbar>
					)}
					<div className={classes.recaptcha}>
						<ReCAPTCHA
							ref={captcha}
							sitekey={constants.RECAPTCHA_SITEKEY}
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
