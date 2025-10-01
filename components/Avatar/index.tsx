import Image from "next/image"

type AvatarProps = {
    src: string;
    name: string;
    size?: number;
}

const Avatar = ({src, name}: AvatarProps) => {
    return (
        <ul className="flex gap-1">
            <li>
                <Image src={src} alt={`Avatar do(a) ${name}`} width={32} height={32}/>
            </li>
            <li>
                @{name}
            </li>

        </ul>
    )
}

export default Avatar