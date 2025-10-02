import Image from "next/image"

type AvatarProps = {
    src: string;
    name: string;
    size?: number;
}

const Avatar = ({src, name}: AvatarProps) => {
    return (
        <ul className="flex gap-2 items-center">
            <li>
                <Image src={src} alt={`Avatar do(a) ${name}`} width={32} height={32}/>
            </li>
            <li className="text-[#888888] leading-[1.5]">
                @{name}
            </li>

        </ul>
    )
}

export default Avatar