import Home from "@/app/components/Home";
import {hasProjects} from "@/lib/content";

export default async function HomePage({params}: { params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    return <Home showProjects={await hasProjects(locale)}/>;
}
