import {Separator} from "@/components/ui/separator";
import {ThemeToggle} from "@/components/theme-toggle";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Home() {
    return (
        <div className="w-full mx-auto">
            <div className="flex w-full p-4 justify-between">
                <div className="w-1/4">brunohf.dev</div>
                <div className="justify-center items-center flex gap-4">
                    <Button>About me</Button>
                    <Button>Portfolio</Button>
                    <Button>Blog</Button>
                </div>
                <div className="flex gap-4 w-1/4 justify-end">
                    <ThemeToggle />
                    <Button>Contact-me</Button>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/3 bg-amber-500 h-full flex justify-end">
                    <div className="p-4 items-center flex flex-col">

                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQH3J9KWmsMEhw/profile-displayphoto-scale_200_200/B4DZpmaZWVJUAY-/0/1762654788361?e=1764806400&v=beta&t=LKWEGhLmgKwiRSAZm2RGrlyFTWxyonjBsRdRV9XQy4k" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <h4>Bruno Henrique Freiberger</h4>
                        <h5>(Dedicated Full-Stack Engineer and Problem Solver)</h5>

                        <Separator className="bg-red-600"/>

                        <h5>Social Media</h5>

                        <Separator className="bg-red-600"/>

                        <h5>Tech Stack</h5>
                    </div>
                </div>
                <Separator orientation="vertical" className="bg-red-600"/>
                <div className="w-2/3 bg-amber-950 h-full">
                    <div className="p-4">
                        <div className="flex justify-center w-full">
                            <div className="flex flex-col justify-center items-center">
                                <h1>Full-Stack Engineer</h1>
                                <h3>(Java, Spring Boot, JavaScript, React, Next.js, Node, Golang, Angular)</h3>
                                <br/>
                                <span className="w-2/4 text-center">
                                    Experienced Full-Stack Developer with strong expertise in Java (Spring Boot) and JavaScript (Angular, React, Node.js). Passionate about building scalable, reliable, and customer-centric solutions that deliver real business impact.
                                </span>
                                <br/>
                                <div className="flex justify-center items-center gap-4">
                                    <Button>See my recommendations</Button>
                                    <Button>Download CV</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}
