import { IDictionary } from "@/lib/dictionary";

export function PortfolioHead({ dictionary }: { dictionary: IDictionary }) {
const title = `${dictionary.profile.firstName} ${dictionary.profile.lastName} - Portfolio`;
    return (<head>
        <title>{title}</title>
        <meta name="description" content={dictionary.about.aboutMe} />
        {/* Add more meta tags as needed */}
    </head>)
}