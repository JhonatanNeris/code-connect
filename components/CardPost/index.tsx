import Image from "next/image";
import Avatar from "../Avatar";

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
const CardPost = ({cover, title, body, author}: CardPostProps) => {
    return (
        <article className=" w-[486px] rounded-[8px] bg-[#171D1F]">
            <header className="rounded-t-[8px] bg-[#888] p-[24px]">
                <figure>
                    <Image src={cover} alt={title} width={438} height={133} />
                </figure>
            </header>
            <section className="text-[#BCBCBC] p-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-[600] grow">{title}</h2>
                <p className="">{body}</p>
            </section>
            <footer className="p-4">
                <Avatar src={author?.avatar} name={author.name}/>

            </footer>
        </article>
    )
}

export default CardPost