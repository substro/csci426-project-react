import { Feedback, Settings } from "@mui/icons-material/";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";

export const mainListItems = (
	<>
		<ListItemButton>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<ShoppingCartIcon />
			</ListItemIcon>
			<ListItemText primary="Orders" />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Customers" />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary="Integrations" />
		</ListItemButton>
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
		<ListItemButton>
			<ListItemIcon>
				<Settings />
			</ListItemIcon>
			<ListItemText primary="Settings" />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<Feedback />
			</ListItemIcon>
			<ListItemText primary="Feedback" />
		</ListItemButton>
	</>
);
