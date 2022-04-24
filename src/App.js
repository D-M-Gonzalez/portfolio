import { Routes, Route } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import Main from "./container/Main/Main";
import Error404 from "./container/Error404/Error404";
import Intro from "./container/Intro/Intro";
import TechSkills from "./container/TechSkills/TechSkills";
import Examples from "./container/Examples/Examples";
import Portfolio from "./container/Portfolio/Portfolio";
import Contact from "./container/Contact/Contact";
import SoftSkills from "./container/SoftSkills/SoftSkills";

//App routes configuration
export default function App() {
	return (
	  <Routes>
		<Route path="/" element={<Layout />}>
		  <Route path="intro" element={<Intro />}/>
		  <Route path="main" element={<Main />}/>
		  <Route path="techskills" element={<TechSkills />}/>
		  <Route path="softskills" element={<SoftSkills />}/>
		  <Route path="examples" element={<Examples />}/>
		  <Route path="portfolio" element={<Portfolio />}/>
		  <Route path="contact" element={<Contact />}/>
		<Route path="*" element={<Error404 />} />
		</Route>
	  </Routes>
	);
  }
