import {notFound} from "next/navigation";

// Any URL that matches no page lands here, so the localized 404 renders inside the site layout.
export default function CatchAllPage() {
    notFound();
}
