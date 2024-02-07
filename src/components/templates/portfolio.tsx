import { SidebarAvatar } from "@/components/molecules/sidebarAvatar";
import { Sidebar } from "@/components/organisms/sidebar";
import { SidebarMenuItem } from "@/components/molecules/sidebarMenuItem";
import { Content } from "@/components/organisms/content";
import { About } from "../organisms/about";
import { IDictionary } from "@/lib/dictionary";
import { GeneralContent } from "../organisms/generalContent";
import { Home } from "../organisms/home";
import { Skills } from "../organisms/skills";


export function Portifolio({ dictionary }: { dictionary: IDictionary }) {

    const home = "home";
    const about = "about";
    const projects = "projects";
    const experience = "experience";
    const skills = "skills";
    const education = "education";

    return (
        <div className="flex max-md:flex-col">
            <Sidebar dictionary={dictionary}>
                <SidebarAvatar src={dictionary.profile.avatar} />
                <SidebarMenuItem anchor={home} label={dictionary.sidebarMenu.home} />
                <SidebarMenuItem anchor={about} label={dictionary.sidebarMenu.about} />
                <SidebarMenuItem anchor={experience} label={dictionary.sidebarMenu.experience} />
                <SidebarMenuItem anchor={skills} label={dictionary.sidebarMenu.skills} />
                <SidebarMenuItem anchor={projects} label={dictionary.sidebarMenu.projects} />
                <SidebarMenuItem anchor={education} label={dictionary.sidebarMenu.education} />
            </Sidebar>

            <div className="w-full md:max-h-screen lg:max-h-screen overflow-auto snap-mandatory snap-y max-md:p-4 p-20">
                <Home
                    anchor={home}
                    infor={dictionary.home}
                />
                <About
                    anchor={about}
                    //...
                    infor={
                        {
                            aboutMe: dictionary.about.aboutMe,
                            firstName: dictionary.profile.firstName,
                            lastName: dictionary.profile.lastName,
                            birthday: dictionary.profile.birthday,
                            address: dictionary.profile.address,
                            phone: dictionary.profile.phone,
                            email: dictionary.profile.email,
                            github: dictionary.profile.github,
                            instagram: dictionary.profile.instagram,
                            linkdin: dictionary.profile.linkedin,
                            whatsapp: dictionary.profile.whatsapp
                        }
                    }
                />
                <GeneralContent
                    anchor={experience}
                    infor={{
                        title: dictionary.experience.title,
                        projects: dictionary.experience.list
                    }}
                />

                <Skills
                    anchor={skills}
                    infor={dictionary.skills}
                />

                <GeneralContent
                    anchor={projects}
                    //...
                    infor={{
                        title: dictionary.projects.title,
                        projects: dictionary.projects.list
                    }}
                />


                <GeneralContent
                    anchor={education}
                    //...
                    infor={{
                        title: dictionary.education.title,
                        projects: dictionary.education.list
                    }}
                />

            </div>
        </div>
    );
}
