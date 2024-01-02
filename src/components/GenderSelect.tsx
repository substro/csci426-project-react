import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface GenderSelectorProps {
	isEditable: boolean; // Define the type of isEditable
}

function GenderSelector({ isEditable }: GenderSelectorProps) {
	// Add isEditable as a prop
	const [gender, setGender] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setGender(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ minWidth: 120 }}>
				<Select
					value={gender}
					onChange={handleChange}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
					disabled={!isEditable} // Use isEditable to control the disabled state
				>
					<MenuItem value={"m"}>Male</MenuItem>
					<MenuItem value={"f"}>Female</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export default GenderSelector;
