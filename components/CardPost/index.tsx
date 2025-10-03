import Image from "next/image";
import Avatar from "../Avatar";

//next
import Link from "next/link";


type CardPostProps = {
    id: number;
    cover: string;
    title: string;
    slug: string;
    body: string;
    markdown: string;
    author: {
        id: number;
        name: string;
        username: string;
        avatar: string;
    }

}
const CardPost = ({ cover, title, body, author, slug }: CardPostProps) => {
    return (
        <Link href={`posts/${slug}`}>
            <article className=" w-[486px] rounded-[8px] bg-[#171D1F] h-[100%]">
                <header className="rounded-t-[8px] bg-[#888] p-[24px]">
                    <figure>
                        <Image src={cover} alt={title} width={438} height={133} className="rounded-[8px]" />
                    </figure>
                </header>
                <section className="text-[#BCBCBC] p-4 flex flex-col gap-2">
                    <h2 className="text-[18px] font-[600] grow leading-[1.5]">{title}</h2>
                    <p className="leading-[1.5] text-[15px]">{body}</p>
                </section>
                <footer className="p-4 flex justify-between">
                    <div></div>
                    <Avatar src={author?.avatar} name={author.name} />

                </footer>
            </article>
        </Link>
    )
}

export default CardPost