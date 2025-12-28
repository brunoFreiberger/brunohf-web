"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useTranslations} from "use-intl";

export default function AboutMePage() {
    const t = useTranslations('AboutMe');
    const experience = t.raw("sections.experience.items");
    const education = t.raw("sections.education.items");
    const languages = t.raw("sections.languages.items");
    return (
        <div className="w-full lg:mx-auto h-full justify-center items-center flex flex-col py-4">
            <div className="font-bold text-2xl">{t('title')}</div>
            <div className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-4 p-4">
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    <Card
                        className="w-full transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                            <CardTitle>{t('sections.introduction.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {t('sections.introduction.text')}
                        </CardContent>
                    </Card>
                    <Card
                        className="w-full transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="w-full flex flex-col justify-center items-center">
                            <CardTitle>{t('sections.education.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {
                                education.map((item, index: number) => {
                                    return <div key={index} className="mb-10">
                                        <p className="text-sm text-muted-foreground">{item.period}</p>
                                        <h3 className="text-lg font-semibold">{item.institution}</h3>
                                        <p className="text-sm text-muted-foreground font-bold">
                                            {item.degree}
                                        </p>
                                    </div>
                                })
                            }
                        </CardContent>
                    </Card>
                    <Card
                        className="w-full transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="w-full flex flex-col justify-center items-center">
                            <CardTitle>{t('sections.languages.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {
                                languages.map((item, index: number) => {
                                    return <div key={index} className="mb-10">
                                        <h3 className="text-lg font-semibold">{item.language}</h3>
                                        <p className="text-sm text-muted-foreground">{item.level}</p>
                                    </div>
                                })
                            }
                        </CardContent>
                    </Card>
                </div>

                <Card
                    className="w-full lg:w-2/3 transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                        <CardTitle>{t('sections.experience.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative border-l border-muted-foreground/20 pl-6">
                            {experience.map((item, index: number) => {
                                const isLast = index === 0;
                                return (
                                    <div key={index} className="mb-10">
                                        <div
                                            className={`absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full ${isLast ? "bg-[#08e1ec] border border-primary h-5 w-5 -left-2.5" : "bg-primary"}`}/>
                                        <p></p>
                                        <p className="text-sm text-muted-foreground">{item.period}</p>
                                        <h3 className="text-lg font-semibold">{item.role}</h3>
                                        <p className="text-sm text-muted-foreground font-bold">
                                            {item.company}</p>
                                        {item.description && (
                                            <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}