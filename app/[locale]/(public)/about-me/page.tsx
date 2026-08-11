"use client"

import {useTranslations} from "use-intl";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent} from "@/components/ui/card";
import {cn} from "@/lib/utils";

type ExperienceItem = { period: string; role: string; company: string; description?: string };
type EducationItem = { period: string; institution: string; degree: string };
type LanguageItem = { language: string; level: string };

export default function AboutMePage() {
    const t = useTranslations('AboutMe');
    const experience = t.raw("sections.experience.items") as ExperienceItem[];
    const education = t.raw("sections.education.items") as EducationItem[];
    const languages = t.raw("sections.languages.items") as LanguageItem[];
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <h1 className="text-3xl font-semibold tracking-tight">{t('title')}</h1>
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <Card className="w-full">
                    <CardContent>
                        <div className="flex flex-col gap-10">
                            <section>
                                <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('sections.introduction.title')}</h3>
                                <p className="mt-3 text-sm leading-relaxed">{t('sections.introduction.text')}</p>
                            </section>

                            <Separator/>

                            <section>
                                <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('sections.education.title')}</h3>
                                <div className="mt-4 flex flex-col gap-6">
                                    {
                                        education.map((item, index: number) => {
                                            return <div key={index}>
                                                <p className="text-xs text-muted-foreground">{item.period}</p>
                                                <h4 className="mt-1 font-semibold">{item.institution}</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {item.degree}
                                                </p>
                                            </div>
                                        })
                                    }
                                </div>
                            </section>

                            <Separator/>

                            <section>
                                <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('sections.languages.title')}</h3>
                                <div className="mt-4 flex flex-col gap-4">
                                    {
                                        languages.map((item, index: number) => {
                                            return <div key={index}>
                                                <h4 className="font-semibold">{item.language}</h4>
                                                <p className="text-sm text-muted-foreground">{item.level}</p>
                                            </div>
                                        })
                                    }
                                </div>
                            </section>
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-full">
                    <CardContent>
                        <section>
                            <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('sections.experience.title')}</h3>
                            <div className="relative mt-6 border-l border-border pl-6">
                                {experience.map((item, index: number) => {
                                    const isCurrent = index === 0;
                                    return (
                                        <div key={index} className="mb-10 last:mb-0">
                                            <div
                                                className={cn(
                                                    "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-foreground",
                                                    isCurrent && "-left-2 h-4 w-4 bg-brand"
                                                )}
                                            />
                                            <p className="text-sm text-muted-foreground">{item.period}</p>
                                            <h4 className="text-lg font-semibold">{item.role}</h4>
                                            <p className="text-sm font-medium text-muted-foreground">
                                                {item.company}</p>
                                            {item.description && (
                                                <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
