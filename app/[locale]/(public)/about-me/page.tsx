"use client"

import {useTranslations} from "use-intl";
import {PageHeader, SectionLabel} from "@/app/components/Page";

type ExperienceItem = {
    period: string;
    role: string;
    company: string;
    description?: string;
    highlights?: string[];
    technologies?: string
};
type EducationItem = { period: string; institution: string; degree: string };
type LanguageItem = { language: string; level: string };
type ExpertiseItem = { area: string; skills: string };

export default function AboutMePage() {
    const t = useTranslations('AboutMe');
    const introduction = t.raw("sections.introduction.paragraphs") as string[];
    const expertise = t.raw("sections.introduction.expertise.items") as ExpertiseItem[];
    const experience = t.raw("sections.experience.items") as ExperienceItem[];
    const education = t.raw("sections.education.items") as EducationItem[];
    const languages = t.raw("sections.languages.items") as LanguageItem[];
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <PageHeader title={t('title')}/>
            <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[1fr_2fr]">
                <div className="flex flex-col gap-12">
                    <section>
                        <SectionLabel>{t('sections.introduction.title')}</SectionLabel>
                        <div className="mt-3 flex flex-col gap-4 text-sm leading-relaxed">
                            {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                            <div>
                                <h3 className="font-semibold">{t('sections.introduction.expertise.title')}</h3>
                                <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-5 marker:text-muted-foreground">
                                    {expertise.map((item) => (
                                        <li key={item.area}>
                                            <span className="font-semibold">{item.area}:</span> {item.skills}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p>{t('sections.introduction.closing')}</p>
                        </div>
                    </section>

                    <section>
                        <SectionLabel>{t('sections.education.title')}</SectionLabel>
                        <ul className="mt-4 flex flex-col gap-5">
                            {education.map((item) => (
                                <li key={item.institution}>
                                    <p className="text-xs text-muted-foreground">{item.period}</p>
                                    <h3 className="mt-1 font-semibold">{item.institution}</h3>
                                    <p className="text-sm text-muted-foreground">{item.degree}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <SectionLabel>{t('sections.languages.title')}</SectionLabel>
                        <ul className="mt-4 flex flex-col gap-3">
                            {languages.map((item) => (
                                <li key={item.language} className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm">
                                    <span className="font-semibold">{item.language}</span>
                                    <span className="text-muted-foreground">{item.level}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <section>
                    <SectionLabel>{t('sections.experience.title')}</SectionLabel>
                    {/* Newest job first. */}
                    <ol className="mt-4 divide-y divide-border border-y border-border">
                        {experience.map((item) => (
                            <li key={`${item.company}-${item.period}`} className="py-6">
                                <p className="text-xs text-muted-foreground">{item.period}</p>
                                <h3 className="mt-1 font-semibold">{item.role}</h3>
                                <p className="text-sm text-muted-foreground">{item.company}</p>
                                {item.description && (
                                    <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                                )}
                                {item.highlights && item.highlights.length > 0 && (
                                    <div className="mt-3 text-sm leading-relaxed">
                                        <h4 className="font-semibold">{t('sections.experience.highlights_title')}</h4>
                                        <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 marker:text-muted-foreground">
                                            {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {item.technologies && (
                                    <p className="mt-3 text-sm leading-relaxed">
                                        <span className="font-semibold">{t('sections.experience.technologies_title')}:</span> {item.technologies}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </div>
    );
}
