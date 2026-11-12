"use client"

import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useRef} from "react";
import {toast} from "sonner"
import {useTranslations} from "use-intl";

export default function ContactDialog() {
    const inputRef = useRef<HTMLInputElement>(null);
    const t = useTranslations('Contact');
    const handleCopy = async () => {
        if (!inputRef.current) return;
        inputRef.current.select();
        await navigator.clipboard.writeText(inputRef.current.value);
        toast(t('copied'));
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{t('contact_me')}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[440px]">
                <DialogHeader>
                    <DialogTitle>{t('contact_me')}</DialogTitle>
                    <DialogDescription>
                        {t('description')}
                    </DialogDescription>
                </DialogHeader>
                <Input ref={inputRef} id="email" readOnly={true} name="email" aria-label="Email"
                       defaultValue="brunohfreiberger@gmail.com" onFocus={(e) => e.target.select()}
                       onClick={handleCopy}/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">{t('cancel')}</Button>
                    </DialogClose>
                    <Button onClick={handleCopy}>{t('copy')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
