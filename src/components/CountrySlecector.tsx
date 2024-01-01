import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";

function CountrySelector({ isEditable }) {
	const [country, setCountry] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value);
	};
	return (
		<div>
			<FormControl sx={{ minWidth: 120 }}>
				<Select
					value={country}
					onChange={handleChange}
					displayEmpty
					aria-label="select"
					disabled={!isEditable}
					// inputProps={{ "aria-label": "Without label" }}
				>
					{/* <MenuItem value="">
						<em>select</em>
					</MenuItem> */}
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirfsdfsdfsfdty</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export default CountrySelector;
