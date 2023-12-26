import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import CustomAvatar from "../CustomAvatar";
import Cropper from "../CustomAvatar copy";
import EditableAvatar from "../EditabeAvatar";

export default function Settings() {
	const [country, setCountry] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value);
	};

	return (
		<Box
			component="section"
			sx={{ p: 2, border: "1px dashed grey" }}
			height={"100%"}
			width={"100%"}
			bgcolor={"lightblue"}
		>
			<div>
				<CustomAvatar />
			</div>
			<div>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-autowidth-label">
						Country
					</InputLabel>
					<Select
						labelId="demo-simple-select-autowidth-label"
						id="demo-simple-select-autowidth"
						value={country}
						onChange={handleChange}
						autoWidth
						label="Country"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Twenty</MenuItem>
						<MenuItem value={21}>Twenty one</MenuItem>
						<MenuItem value={22}>Twenty one and a half</MenuItem>
					</Select>
				</FormControl>
			</div>
		</Box>
	);
}
