import React from 'react'
import { useState ,useEffect} from 'react'
export const Usestatehook = () => {
    const [name, setstate] = useState("")

    useEffect(() => {
         console.log(`the new name is ${name}`);
                        // it works as a componentdidupdate in class 
    }, [name])
    // const [name, setstate] = useState("")

    // useEffect(() => {
    //      console.log(`the new name is ${name}`);
    //                     // it run only once whene it get renders
    //     }, [])
    // useEffect(() => {
        
    //     return () => {
    //      console.log(`the new name is `);
    //     }
    // },)
    useEffect(() => {
        
        return () => {     // it is like a componentunmount in casses 
         console.log(`the new name is `);
        }
    },)


    // it will unmount then rerender then will update
    return (
        <div>
            <input  value={name} onChange={(e)=>setstate(e.target.value)} type="text" placeholder="Enter the name" />
        </div>
    )
}
