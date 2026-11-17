import {readFile} from "node:fs/promises";
import path from "node:path";
import {hasLocale} from "next-intl";
import {routing} from "@/i18n/routing";

export async function GET(_request: Request, {params}: {params: Promise<{locale: string}>}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        return new Response("Resume not found", {status: 404});
    }

    const filename = `Bruno_Henrique_Freiberger_CV_${locale.toUpperCase()}.pdf`;
    const file = await readFile(path.join(process.cwd(), "content", "resumes", locale, filename));

    return new Response(new Uint8Array(file), {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${filename}"`,
            "Content-Length": String(file.byteLength),
        },
    });
}
