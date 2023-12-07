import { Typography } from "@mui/material";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import animationData from "../animations/task-board-anim.json";

const PreLoader = () => {
	const container = useRef(null);

	useEffect(() => {
		if (!container.current) return;
		const anim = Lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animationData,
		});

		return () => anim.destroy();
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-full z-[9999] flex justify-center items-center bg-white ">
			<Typography variant="h1">PROJAX</Typography>
			<div ref={container} />
		</div>
	);
};

export default PreLoader;
