import styled from "@emotion/styled";
import { Delete, Rotate90DegreesCw } from "@mui/icons-material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
	Avatar,
	Box,
	Button,
	IconButton,
	Modal,
	Slider,
	Stack,
	Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

const style = {
	position: "absolute" as const,
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "clamp(400px, 30vw, 700px)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function CustomAvatar() {
	const [ModalOpen, setModalOpen] = useState(false);

	const handleOpen = () => setModalOpen(true);
	const handleClose = () => {
		setModalOpen(false);
	};

	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const editorRef = useRef<AvatarEditor | null>(null);
	const [avatarImage, setAvatarImage] = useState<string | null>(null); // State to store the edited avatar image
	const [scale, setScale] = useState<number>(1); // State to manage scale level
	const [rotation, setRotation] = useState<number>(0); // State to manage rotation angle
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedImage(e.target.files[0]);
			setModalOpen(true);
		}
	};

	const handleSave = async () => {
		if (editorRef.current && selectedImage) {
			const dataUrl = editorRef.current.getImage().toDataURL();
			setAvatarImage(dataUrl);
			setModalOpen(false);
			// Perform other actions with dataUrl or save it.
		}
	};
	const handleScaleChange = (_: Event, newValue: number | number[]) => {
		setScale(newValue as number);
	};

	const handleRotate = () => {
		setRotation((prevRotation) => (prevRotation + 90) % 360);
	};
	//TODO:implement the delete method
	function handleDelete(): void {
		throw new Error("Function not implemented.");
	}

	return (
		<>
			<IconButton
				component="label"
				sx={{ overflow: "hidden" }}
				onClick={handleOpen}
			>
				<Avatar
					sx={{ position: "relative", width: "100px", height: "100px" }}
					src={avatarImage || undefined}
				/>
				<div
					style={{
						height: "100%",
						width: "100%",
						position: "absolute",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "rgba(255,255,255,0.3)",
					}}
				>
					<CameraAltIcon />
				</div>
			</IconButton>
			<Modal
				open={ModalOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box
						sx={{
							width: "100%",
							bgcolor: "black",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<AvatarEditor
							ref={editorRef}
							image={selectedImage || ""}
							border={10}
							width={300}
							height={300}
							className={"box-border"}
							borderRadius={500}
							color={[255, 255, 255, 0.6]} // RGBA
							scale={scale}
							rotate={rotation}
						/>
					</Box>
					<Box m={1} />
					<Stack direction="row" spacing="auto">
						<Button
							component="label"
							variant="contained"
							startIcon={<CloudUploadIcon />}
							color="secondary"
						>
							Choose Image
							<VisuallyHiddenInput type="file" onChange={handleImageChange} />
						</Button>
						<Button
							component="label"
							variant="contained"
							endIcon={<Delete />}
							color="error"
							onClick={handleDelete}
						>
							Remove
						</Button>
					</Stack>
					<Box m={3} />
					<Stack direction="row" spacing=".5rem" alignItems="center">
						<div style={{ width: "100%" }}>
							<Typography gutterBottom>Scale</Typography>
							<Slider
								value={scale}
								min={1}
								max={2.5}
								step={0.1}
								defaultValue={1}
								aria-label="Scale"
								valueLabelDisplay="auto"
								onChange={handleScaleChange}
							/>
						</div>
						<IconButton onClick={handleRotate}>
							<Rotate90DegreesCw color="primary" />
						</IconButton>
					</Stack>
					<Box m={3} />

					<Stack direction="row" spacing="1.5rem">
						<Button variant="contained" onClick={handleSave}>
							Save
						</Button>
						<Button variant="outlined" onClick={handleClose}>
							Cancel
						</Button>
					</Stack>
				</Box>
			</Modal>
		</>
	);
}
