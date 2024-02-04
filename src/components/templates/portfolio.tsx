import { SidebarAvatar } from "@/components/molecules/sidebarAvatar";
import { Sidebar } from "@/components/organisms/sidebar";
import { SidebarMenuItem } from "@/components/molecules/sidebarMenuItem";
import { Content } from "@/components/organisms/content";
import { About } from "../organisms/about";


export function Portifolio({ dictionary, profile }: { dictionary: any, profile: any }) {

    const about = "about";
    const experience = "experience";
    const education = "education";
    const skills = "skills";
    const projects = "projects";

    return (
        <div className="flex">
            <Sidebar>
                <SidebarAvatar src={profile.avatar} />
                <SidebarMenuItem anchor={about} label={dictionary.about} />
                <SidebarMenuItem anchor={experience} label={dictionary.experience} />
                <SidebarMenuItem anchor={education} label={dictionary.education} />
                <SidebarMenuItem anchor={skills} label={dictionary.skills} />
                <SidebarMenuItem anchor={projects} label={dictionary.projects} />
            </Sidebar>

            <div className="w-full max-h-screen overflow-auto snap-mandatory snap-y">
                <About
                    anchor={about}
                    //...
                    infor={
                        {
                            aboutMe: dictionary.aboutMe,
                            firstName: profile.firstName,
                            lastName: profile.lastName,
                            address: profile.address,
                            phone: profile.phone,
                            email: profile.email,
                            github: profile.github,
                            instagram: profile.instagram,
                            linkdin: profile.linkdin,
                            whatsapp: profile.whatsapp
                        }
                    }
                />

                <Content anchor="experience">
                    OI
                </Content>
                <Content anchor="education">
                    OI
                </Content>
                <Content anchor="skills">
                    OI
                </Content>
                <Content anchor="projects">
                    OI
                </Content>
            </div>
        </div>
    );
}
