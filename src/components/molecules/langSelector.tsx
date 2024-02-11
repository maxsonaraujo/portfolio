'use client'
import { IDictionary } from "@/lib/dictionary";
import { Button } from "../atoms/button";
import { useRouter } from "next/navigation";

export function LangSelector({ dictionary }: { dictionary: IDictionary }) {

    const bold = "size-8 text-xs w-10 text-bold underline m-auto mr-1";
    const normal = "size-8 text-xs w-10 m-auto mr-1";
    const isPtBr = dictionary.lang === "pt-BR";

    const router = useRouter();

    return (<>
        <div className="flex z-50 text-xs items-center justfy-center fixed max-md:right-16 top-2 right-6">

            <Button variant="link" className={isPtBr ? bold : normal}
                onClick={() => {
                    router.push("pt-BR");
                }}
            >pt-BR</Button>

            <Button variant="link" className={!isPtBr ? bold : normal}
                onClick={() => {
                    router.push("en-US");
                }}
            >en-US</Button>

        </div>
    </>)
}