import { Alert, AlertTitle, Box, Container, Grid } from "@mui/material";
function ComingSoon() {
	return (
		<Box className="bg-slate-400" sx={{}}>
			{/* <Container maxWidth="xs"  className=""> */}
			{/* <Alert variant="standard" severity="info" sx={{ mt: 0, width: "30%" }}>
				<AlertTitle>Coming Soon</AlertTitle>
				Page unavailable — <strong>Check Back Later!</strong>
			</Alert> */}
			{/* </Container> */}

			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{
					height: "100vh",
				}}
			>
				<Grid item xs={10}>
					<Alert variant="standard" severity="info" sx={{ mt: 0 }}>
						<AlertTitle>Coming Soon</AlertTitle>
						This Page Is Unavailable Yet — <strong>Check Back Later!</strong>
					</Alert>
				</Grid>
			</Grid>
		</Box>
	);
}

export default ComingSoon;
