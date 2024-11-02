
import Image from "next/image"

export const Card = ({employee:{id,name,role,email,pic}}) => {
    return (
        <div className="border border-gray-200 w-400 m-5 rounded-3xl p-3 flex py-5 text-base" style={{background:"radial-gradient(circle at center, #ffff, #f1eafc)"}}>
            <div>
            <Image src={pic} width={80} height={80} alt="user pic" className="rounded-full"/>
            </div>
            <div className="mx-5">
               <p className="text-2xl font-bold">{name}</p>
               <p className="text-gray-500 text-sm">{role}</p>
               <p className="my-5 text-wrap text-gray-400">email: <span className="text-black font-medium">{email}</span></p>
               <div className="mt-10">
               <button className="m-2 px-5 p-1 text-black bg-transparent border-2 border-black rounded hover:text-white hover:bg-black">Block</button>
               <button className="m-2 px-5 py-1 text-white bg-black rounded border-2 border-black hover:text-black hover:bg-transparent">Details</button>
               </div>
            </div>
        </div>
    )
}