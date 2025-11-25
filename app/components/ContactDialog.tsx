"use client"

import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useRef} from "react";
import {Toaster} from "@/components/ui/sonner"
import { toast } from "sonner"
import {useTranslations} from "use-intl";

export default function ContactDialog() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleCopy = async () => {
        if (!inputRef.current) return;
        inputRef.current.select();
        await navigator.clipboard.writeText(inputRef.current.value);
        toast("Email copied to clipboard!")
    }
    const t = useTranslations('Contact');
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline"
                            className="border-1 border-[#08e1ec] dark:!border-[#08e1ec] font-mono">{t('contact_me')}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{t('contact_me')}!</DialogTitle>
                        <DialogDescription>
                            {t('description')}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Input ref={inputRef} id="email" readOnly={true} name="email"
                                   defaultValue="brunohfreiberger@gmail.com" onFocus={(e) => e.target.select()}
                                   onClick={handleCopy}/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleCopy}>Copy</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Toaster/>
        </>
    );
}