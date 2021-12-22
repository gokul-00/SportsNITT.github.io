import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo from "../assets/images/logo.png";

export default function NavbarMain() {
	const social = [
		{ name: "GitHub", icon: GitHubIcon, link: "" },
		{ name: "Twitter", icon: TwitterIcon, link: "" },
		{ name: "Facebook", icon: FacebookIcon, link: "" },
	];
	return (
		<Navbar bg="#343a40" expand="lg" sticky="top">
			<Container fluid style={{ alignItems: "center" }}>
				<Navbar.Brand>
					<img
						alt="logo"
						src={logo}
						width="100"
						height="100"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				{/* <Navbar.Brand
					href="/"
					style={{
						color: "#ff8b00",
						marginLeft: 10,
						fontFamily: "Open Sans",
						fontWeight: 900,
						textTransform: "uppercase",
					}}
				>
					Sports contigent
				</Navbar.Brand> */}

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="me-auto"
						style={{
							display: "flex",
							justifyContent: "space-around",
							padding: 13,
						}}
					>
						<Nav.Link
							href="/"
							style={{
								color: "white",
								paddingInline: 30,
								fontFamily: "Open Sans",
								fontSize: "14px",
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="/achievements"
							style={{
								color: "white",
								paddingInline: 30,
								fontFamily: "Open Sans",
								fontSize: 14,
							}}
						>
							Achievements
						</Nav.Link>
						<Nav.Link
							href="/blogs"
							style={{
								color: "white",
								paddingInline: 30,
								fontFamily: "Open Sans",
								fontSize: 14,
							}}
						>
							Blogs
						</Nav.Link>
						<Nav.Link
							href="/teams"
							style={{
								color: "white",
								paddingInline: 30,
								fontFamily: "Open Sans",
								fontSize: 14,
							}}
						>
							Teams
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						float: "right",
						marginLeft: 10,
					}}
				>
					<Nav.Link
						href={social[0].link}
						style={{
							color: "#6B6B6B",
							paddingInline: 10,
							fontFamily: "Open Sans",
							marginLeft: 20,
						}}
					>
						<GitHubIcon fontSize="medium" />
					</Nav.Link>
					<Nav.Link
						href={social[1].link}
						style={{
							color: "#6B6B6B",
							paddingInline: 10,
							fontFamily: "Open Sans",
						}}
					>
						<TwitterIcon fontSize="medium" />
					</Nav.Link>
					<Nav.Link
						href={social[2].link}
						style={{
							color: "#6B6B6B",
							paddingInline: 10,
							fontFamily: "Open Sans",
						}}
					>
						<FacebookIcon fontSize="medium" />
					</Nav.Link>
				</div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</Container>
		</Navbar>
	);
}
