import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";

interface Project {
	id: number;
	name: string;
	startDate: string;
	members: string[];
}

function Projects() {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [sortKey, setSortKey] = useState<string>("name");

	const projects: Project[] = [
		{
			id: 1,
			name: "bProject 1",
			startDate: "2022-01-01",
			members: ["Alice", "Bob"],
		},
		{
			id: 2,
			name: "aProject 2",
			startDate: "2022-02-01",
			members: ["Charlie", "Dave"],
		},
		// ... Add more projects
	];

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		const selectedValue = event.target.value as string;
		setSortKey(selectedValue);
	};

	const filteredProjects = projects.filter((project) =>
		project.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Sorting logic
	const sortProjects = (projects: Project[], key: string) => {
		return projects.slice().sort((a: Project, b: Project) => {
			if (a[key as keyof Project] < b[key as keyof Project]) return -1;
			if (a[key as keyof Project] > b[key as keyof Project]) return 1;
			return 0;
		});
	};

	const sortedProjects = sortProjects(filteredProjects, sortKey);

	return (
		<div>
			<h1>Projects</h1>
			<TextField
				label="Search projects"
				variant="outlined"
				value={searchTerm}
				onChange={handleSearchChange}
			/>
			<FormControl variant="outlined">
				<InputLabel id="sort-label">Sort by</InputLabel>
				<Select
					labelId="sort-label"
					value={sortKey}
					onChange={
						handleSortChange as (event: SelectChangeEvent<string>) => void
					}
					label="Sort by"
				>
					<MenuItem value="name">Name</MenuItem>
					<MenuItem value="startDate">Start Date</MenuItem>
					{/* Add more sort options as needed */}
				</Select>
			</FormControl>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Start Date</TableCell>
							<TableCell>Members</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{sortedProjects.map((project) => (
							<TableRow key={project.id}>
								<TableCell>{project.name}</TableCell>
								<TableCell>{project.startDate}</TableCell>
								<TableCell>{project.members.join(", ")}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default Projects;
