import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Button,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { default as CountrySelector } from "../CountrySlecector";
import EditableAvatar from "../EditableAvatar";
import GenderSlecector from "../GenderSelect";

export default function Settings() {
	const [isEditable, setIsEditable] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [, setUserData] = useState(null);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	function handleSubmit(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		throw new Error("Function not implemented.");
	}
	useEffect(() => {
		axios
			.get(
				"http://localhost/csci426-project-backend/backend/api/get-user-data.php?",
				{}
			)
			.then((response) => {
				if (response.data.success) {
					setUserData(response.data.data);
				} else {
					console.log(response.data.message);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			flexGrow={1}
			component="section"
			sx={{ padding: "32px 24px", overflowY: "scroll" }}
			width={"100%"}
			height={"100%"}
			// minHeight={"max-content"}
		>
			<div className="flex-col justify-center flex items-center">
				<EditableAvatar />
				<Typography variant="h5">Profile Picture</Typography>
			</div>
			<Box m={2} />
			<Button
				variant={isEditable ? "outlined" : "contained"}
				onClick={() => setIsEditable(true)}
			>
				Edit
			</Button>
			<Box m={2} />

			<Grid
				component={"form"}
				onSubmit={handleSubmit}
				maxWidth={{ sm: "80%", md: "80%" }}
				container
				columns={{ xs: 4, sm: 8, md: 12 }}
				columnSpacing={1}
				rowSpacing={2}
			>
				<Grid item xs={2} sm={4} md={3}>
					<Typography variant="subtitle1">First Name *</Typography>
					<TextField
						required
						id="outlined"
						defaultValue="Ali"
						disabled={!isEditable}
					/>
				</Grid>
				<Grid item xs={2} sm={4} md={3}>
					<Typography variant="subtitle1">Last Name *</Typography>
					<TextField
						required
						id="outlined-required"
						defaultValue="Amin"
						disabled={!isEditable}
					/>
				</Grid>
				<Grid item xs={2} sm={4} md={3}>
					<Typography variant="subtitle1">Date of Birth *</Typography>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker disabled={!isEditable} />
					</LocalizationProvider>
				</Grid>
				<Grid item xs={2} sm={4} md={3}>
					<Typography variant="subtitle1">Email *</Typography>
					<TextField
						required
						id="outlined-required"
						defaultValue="example@gmail.com"
						disabled={!isEditable}
					/>
				</Grid>
				<Grid item xs={2} sm={4} md={3}>
					<Typography variant="subtitle1">Password *</Typography>
					<TextField
						required
						disabled={!isEditable}
						type={showPassword ? "text" : "password"}
						id="password"
						defaultValue=""
						// value={formData.password}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleShowPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={2} sm={4} md={3}>
					<Typography variant="subtitle1">Country *</Typography>
					<CountrySelector isEditable={isEditable} />
				</Grid>
				<Grid item xs={2} sm={4} md={3}>
					<Typography variant="subtitle1">Gender *</Typography>
					<GenderSlecector isEditable={isEditable} />
				</Grid>
				<Grid item xs={12}>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={!isEditable}
					>
						Save Changes
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button
						type="button"
						variant="outlined"
						color="primary"
						disabled={!isEditable}
						onClick={() => setIsEditable(false)}
					>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}
