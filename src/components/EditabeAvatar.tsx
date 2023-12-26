import { Avatar, IconButton, Input } from "@mui/material";
import React, { useState } from "react";

// EditableAvatar component
const EditableAvatar: React.FC<{ defaultName: string }> = ({ defaultName }) => {
	const [name, setName] = useState(defaultName);
	const [image, setImage] = useState<string | null>(null);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				if (typeof reader.result === "string") {
					setImage(reader.result);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div>
			<input
				type="file"
				accept="image/*"
				onChange={handleImageChange}
				style={{ display: "none" }}
				id="avatar-upload-input"
			/>
			<label htmlFor="avatar-upload-input">
				<IconButton component="span">
					<Avatar src={image} sx={{ width: 100, height: 100 }} />
				</IconButton>
			</label>
		</div>
	);
};

export default EditableAvatar;
