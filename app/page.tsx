import {ThemeToggle} from "@/components/theme-toggle";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import ContactDialog from "@/app/components/ContactDialog";

export default function Home() {
    return (
        <div className="w-full lg:mx-auto h-full">
            <div className="flex lg:flex-row flex-col w-full p-4 lg:justify-between justify-center border-b-1 border-[#2F2F2F]">
                <div className="flex justify-center items-center lg:justify-start lg:items-start w-full lg:w-1/4 font-mono">&lt;brunohf.dev/&gt;</div>
                <div className="w-full justify-center items-center flex lg:gap-4 gap-0 lg:flex-row flex-col">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuLink className="font-bold text-md font-mono">About me</NavigationMenuLink>
                            <NavigationMenuLink className="font-bold text-md font-mono">Portfolio</NavigationMenuLink>
                            <NavigationMenuLink className="font-bold text-md font-mono">Blog</NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex justify-center lg:flex-row lg:gap-4 gap-0 w-full lg:w-1/4 lg:justify-end">
                    <ThemeToggle/>
                    <ContactDialog/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center sm:w-full lg:w-5/6 mx-auto">
                <div className="md:w-1/4 sm:w-full h-full flex justify-end">
                    <div className="p-4 flex flex-col w-full items-end">
                        <Card className="w-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                            <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                <Avatar className="h-24 w-24 border-2">
                                    <AvatarImage
                                        src="https://media.licdn.com/dms/image/v2/D4D03AQH3J9KWmsMEhw/profile-displayphoto-scale_200_200/B4DZpmaZWVJUAY-/0/1762654788361?e=1764806400&v=beta&t=LKWEGhLmgKwiRSAZm2RGrlyFTWxyonjBsRdRV9XQy4k"
                                        alt="@shadcn"/>
                                    <AvatarFallback>BHF</AvatarFallback>
                                </Avatar>
                            </CardHeader>
                            <CardContent className="text-center text-neutral-400">
                                <div className="text-center flex flex-col items-center">
                                    <h4 className="text-1xl font-bold dark:text-neutral-200">Bruno Henrique
                                        Freiberger</h4>
                                    <h5 className="dark:text-neutral-200">(Dedicated Full-Stack Engineer and Problem
                                        Solver)</h5>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            className="w-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] mt-4">
                            <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                <CardTitle>Social Media</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-neutral-400">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center">
                                        <Image src="/images/social-media/linkedin-logo.svg" alt="java-logo"
                                               width={30}
                                               height={30}/>
                                        <a
                                            href="https://www.linkedin.com/in/bruno-henrique-freiberger-777090109/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm dark:text-neutral-300 hover:text-[#08e1ec]"
                                        >
                                            https://linkedin.com/in/bruno-henrique-freiberger-777090109/
                                        </a>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <Image src="/images/social-media/github-logo.svg" alt="java-logo" width={30}
                                               height={30}/>
                                        <a
                                            href="https://github.com/brunofreiberger"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm dark:text-neutral-300 hover:text-[#08e1ec]"
                                        >
                                            https://github.com/brunofreiberger
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            className="w-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] mt-4">
                            <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                <CardTitle>Tech Stack</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-neutral-400">
                                <div className="py-4 text-center">
                                    <div className="flex justify-center gap-4 py-4">
                                        <Image src="/images/java-logo.svg" alt="java-logo" width={60} height={60}/>
                                        <Image src="/images/spring-logo.svg" alt="java-logo" width={60}
                                               height={60}/>
                                        <Image src="/images/node-logo.svg" alt="java-logo" width={60} height={60}/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <Image src="/images/angular-logo.svg" alt="java-logo" width={60}
                                               height={60}/>
                                        <Image src="/images/react-logo.svg" alt="java-logo" width={60} height={60}/>
                                        <Image src="/images/docker-logo.svg" alt="java-logo" width={60}
                                               height={60}/>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                        {/*<div className="flex flex-col">*/}
                        {/*    <span>Some of content</span>*/}
                        {/*    <a*/}
                        {/*        href="https://github.com/brunofreiberger"*/}
                        {/*        target="_blank"*/}
                        {/*        rel="noopener noreferrer"*/}
                        {/*        className="text-sm text-neutral-300"*/}
                        {/*    >*/}
                        {/*        # How I built this website*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="md:w-3/4 w-full">
                    <div className="flex flex-col items-center p-4 h-full text-center ">
                        <h1 className="text-2xl font-bold font-mono">Full-Stack <span
                            className="text-[#08E0EC]">Engineer</span></h1>

                        <h3 className="font-mono pt-4">(Java, Spring Boot, JavaScript, React, Next.js, Node,
                            Golang, Angular)</h3>
                        <br/>
                        <span className="font-mono">
                                    Experienced Full-Stack Developer with strong expertise in Java (Spring Boot) and JavaScript (Angular, React, Node.js). Passionate about building scalable, reliable, and customer-centric solutions that deliver real business impact.
                                </span>
                        <br/>
                        <div className="flex justify-center items-center gap-4">
                            <Button variant="outline" className="font-mono">See my recommendations</Button>
                            <Button className="bg-[#08E0EC] text-white font-bold font-mono">Download CV</Button>
                        </div>
                        <h1 className="text-2xl font-bold pt-20 dark:text-neutral-400">Core Strengths</h1>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 py-4">
                            <Card
                                className="w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                                <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                    <Image src="/images/strengths/dev-code.svg" alt="java-logo" width={80}
                                           height={80}/>
                                    <CardTitle>10+ Years of Experience</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-neutral-400">
                                    <p>Experienced developer with over a decade of hands-on work across diverse
                                        technologies and industries.</p>
                                </CardContent>
                            </Card>
                            <Card
                                className="w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                                <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                    <Image src="/images/strengths/customer-centric.svg" alt="java-logo"
                                           width={80} height={80}/>
                                    <CardTitle>Customer Centric</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-neutral-400">
                                    <p>Focused on understanding real user needs and crafting impactful,
                                        meaningful solutions that truly make a difference.</p>
                                </CardContent>
                            </Card>
                            <Card
                                className="w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                                <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                    <Image src="/images/strengths/problem-solver.svg" alt="java-logo" width={80}
                                           height={80}/>
                                    <CardTitle>Problem Solver</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-neutral-400">
                                    <p>Passionate about solving complex challenges with creativity,
                                        adaptability, and the right tools for each situation.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
