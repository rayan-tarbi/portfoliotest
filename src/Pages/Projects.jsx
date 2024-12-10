
import Works from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
	return (
		<div className="w-full flex justify-center" id="projects">
			<div className="w-full xl:w-[70%] flex flex-col pb-16">
				<div className="w-full ">
					<SectionTitle title="PROJECTS" subtitle="Y'en aura de + en + :p" />
				</div>
				<Works/>
			</div>
		</div>
	);
};

export default Projects;