"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {usePathname, useRouter} from "next/navigation";

export default function LanguageSelectior() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.split("/")[1] || "en";

    function onChange(locale: string){
        const segments = pathname.split("/");
        segments[1] = locale;
        router.push(segments.join("/"));
    }
    return (
        <Select defaultValue={currentLocale} onValueChange={onChange}>
            <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Portuguese</SelectItem>
            </SelectContent>
        </Select>
    );
}