"use client"
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useTranslations} from "use-intl";

export default function Home() {
    const router = useRouter();
    const redirectToRecommendations = () => {
        router.push("/recommendations");
    }
    const t = useTranslations('HomePage');
    return (
        <div className="w-full lg:mx-auto h-full">
            <div className="flex flex-col lg:flex-row justify-start items-start sm:w-full lg:w-5/6 mx-auto">
                <div className="md:w-1/4 sm:w-full h-full flex justify-end">
                    <div className="p-4 flex flex-col w-full items-end">
                        <Card className="w-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                            <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                <Avatar className="h-24 w-24 border-2">
                                    <AvatarImage
                                        src="/images/1762654788361.jpeg"
                                        alt="@shadcn"/>
                                    <AvatarFallback>BHF</AvatarFallback>
                                </Avatar>
                            </CardHeader>
                            <CardContent className="text-center text-neutral-400">
                                <div className="text-center flex flex-col items-center">
                                    <h4 className="text-1xl font-bold dark:text-neutral-200">Bruno Henrique
                                        Freiberger</h4>
                                    <h5 className="dark:text-neutral-200">({t('profile.subtitle')})</h5>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            className="w-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] mt-4">
                            <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                <CardTitle>{t('general.social_media')}</CardTitle>
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
                                <CardTitle>{t('general.tech_stack')}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-neutral-400">
                                <div className="py-4 text-center">
                                    <div className="flex justify-center gap-4 py-4">
                                        <Image src="/images/java-logo.svg" alt="java-logo" width={60} height={60}/>
                                        <Image src="/images/spring-logo.svg" alt="spring-logo" width={60}
                                               height={60}/>
                                        <Image src="/images/node-logo.svg" alt="node-logo" width={60} height={60}/>
                                        <Image src="/images/datadog-logo.svg" alt="datadog-logo" width={60}
                                               height={60}/>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <Image src="/images/angular-logo.svg" alt="java-logo" width={60}
                                               height={60}/>
                                        <Image src="/images/react-logo.svg" alt="react-logo" width={60} height={60}/>
                                        <Image src="/images/docker-logo.svg" alt="docker-logo" width={60}
                                               height={60}/>
                                        <Image src="/images/javascript-logo.svg" alt="javascript-logo" width={60}
                                               height={60}/>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                        {/*<div className="flex flex-col">*/}
                        {/*    <span>Some of how-this-website-was-built</span>*/}
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
                            Golang, Angular)
                        </h3>
                        <br/>
                        <span className="font-mono"> {t('profile.description')} </span>
                        <br/>
                        <div className="flex justify-center items-center gap-4">
                            <Button onClick={() => redirectToRecommendations()} variant="outline" className="font-mono">{t('general.see_recommendations')}</Button>
                            <Button
                                className="bg-[#08E0EC] text-white font-bold font-mono">{t('general.download_cv')}</Button>
                        </div>
                        <h1 className="text-2xl font-bold pt-20 dark:text-neutral-400">{t('general.core_strengths')}</h1>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 py-4">
                            <Card
                                className="h-[300px] w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                                <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                    <Image src="/images/strengths/dev-code.svg" alt="java-logo" width={80}
                                           height={80}/>
                                    <CardTitle>{t('profile.exp_card.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-neutral-400">
                                    <p>{t('profile.exp_card.description')}</p>
                                </CardContent>
                            </Card>
                            <Card
                                className="h-[300px] w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                                <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                    <Image src="/images/strengths/customer-centric.svg" alt="java-logo"
                                           width={80} height={80}/>
                                    <CardTitle>{t('profile.cc_card.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-neutral-400">
                                    <p>{t('profile.cc_card.description')}</p>
                                </CardContent>
                            </Card>
                            <Card
                                className="h-[300px] w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                                <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                                    <Image src="/images/strengths/problem-solver.svg" alt="java-logo" width={80}
                                           height={80}/>
                                    <CardTitle>{t('profile.ps_card.title')}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-neutral-400">
                                    <p>{t('profile.ps_card.description')}</p>
                                </CardContent>
                            </Card>
                        </div>

                        <h1 className="text-2xl font-bold pt-10 dark:text-neutral-400">{t('general.projects')}</h1>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 py-4">
                            <Card
                                className="h-[200px] w-full lg:w-1/2 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-row">
                                <div className="w-[150px] h-[150px] flex justify-center items-center">
                                    <Image src="/images/strengths/problem-solver.svg" alt="java-logo" width={150}
                                           height={150}/>
                                </div>
                                <div>
                                    <CardHeader className="w-full flex flex-col justify-start items-start gap-4">
                                        <CardTitle>{t('profile.exp_card.title')}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-start text-neutral-400 pt-4">
                                        <p>{t('profile.exp_card.description')}</p>
                                    </CardContent>
                                </div>
                            </Card>
                            <Card
                                className="h-[200px] w-full lg:w-1/2 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-row">
                                <div className="w-[150px] h-[150px] flex justify-center items-center">
                                    <Image src="/images/strengths/problem-solver.svg" alt="java-logo" width={150}
                                           height={150}/>
                                </div>
                                <div>
                                    <CardHeader className="w-full flex flex-col justify-start items-start gap-4">
                                        <CardTitle>{t('profile.exp_card.title')}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-start text-neutral-400 pt-4">
                                        <p>{t('profile.exp_card.description')}</p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                        <Button variant="outline" className="font-mono">{t('general.view_more')}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
