import { Box, Container, Typography } from "@mui/material";
// import React from "react";
import bgImage from "./cookie-the-pom-siNDDi9RpVY-unsplash.jpg";

function ComingSoon() {
	return (
		<Box
			// className="w-full"
			sx={{
				height: "100vh",
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center", // Adjust background position if needed
				backgroundSize: "cover",
			}}
		>
			{/* Content */}
			<Container
				sx={{
					// width: "100px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
				className="backdrop-blur-[5px]  h-full bg-[#00000090] min-w-full"
			>
				<Typography
					variant="h1"
					align="center"
					color="white"
					fontSize={"5.5rem"}
				>
					Coming Soon!
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="#ffffff"
					fontSize={"1.5rem"}
				>
					We're working hard to bring you something amazing. Please check back
					soon!
				</Typography>
			</Container>
		</Box>
	);
}

export default ComingSoon;
