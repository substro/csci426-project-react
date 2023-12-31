import { Feedback, Settings } from "@mui/icons-material/";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export const mainListItems = (
	<>
		<Link to={"/dashboard"}>
			<ListItemButton>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>
		</Link>
		<Link to={"/projects"}>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Projects" />
			</ListItemButton>
		</Link>
		<Link to={"#"}>
			<ListItemButton>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Customers" />
			</ListItemButton>
		</Link>
		<Link to={"#"}>
			<ListItemButton>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary="Reports" />
			</ListItemButton>
		</Link>
		<Link to={"#"}>
			<ListItemButton>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary="Integrations" />
			</ListItemButton>
		</Link>
	</>
);

export const secondaryListItems = (
	<>
		<ListItemButton>
			<ListItemIcon>
				<WorkspacePremiumIcon className="text-blue-500" />
			</ListItemIcon>
			<ListItemText primary="Upgrade Plan" />
		</ListItemButton>
		<Link to="/settings">
			<ListItemButton>
				<ListItemIcon>
					<Settings />
				</ListItemIcon>
				<ListItemText primary="Settings" />
			</ListItemButton>
		</Link>
		<ListItemButton>
			<ListItemIcon>
				<Feedback />
			</ListItemIcon>
			<ListItemText primary="Feedback" />
		</ListItemButton>
	</>
);
