import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Recommendations() {
    return (
        <div className="w-full lg:mx-auto h-full justify-center items-center flex flex-col p-10">
            <div>Endorsements</div>
            <div className="flex flex-row w-full lg:w-2/3 gap-4">
                <Card
                    className="w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] mt-4">
                    <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                        <CardTitle>Java</CardTitle>
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}