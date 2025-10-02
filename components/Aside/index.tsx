import React from 'react'
import Image from 'next/image'


const index = () => {
    return (
        <aside className='bg-[#171D1F] rounded-[8px] py-[40px] px-[16px] w-[177px] flex flex-col items-center'>
            <Image
                src="/logo.png"
                width={128} 
                height={40}
                alt="Logo Code Connect"
            />
            <div className=''>
                <button>
                    Publicar
                </button>
            </div>
        </aside>
    )
}

export default index