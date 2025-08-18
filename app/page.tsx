"use client"
import React, { useState } from "react";
const page = () => {
    const [title  , settitle] = useState("")
    const [description , setdescription] = useState("")
    const [maintask, setmaintask] = useState([])
    const submitHandler = (e: any) => {
        e.preventDefault()
        // setmaintask([...maintask, { title, description }])
        settitle("")
        setdescription("")
    }
    return (
        <>
            <h1 className="text-3xl text-white  p-5 text-center font-bold ">MY Todo list</h1>
            <form onSubmit={submitHandler}>
                <input type="text" className="border-2 p-5 m-5" placeholder="Add a task" value={title} onChange={(e) => settitle(e.target.value)} />
                <input type="text" className="border-2 p-5 m-5" placeholder="Add Description" value={description} onChange={(e) => setdescription(e.target.value)} />
                <button type="submit" className="border-2 p-3 m-3 rounded-2xl bg-green-700">Add Task</button>
            </form>
            <h1 className="text-3xl text-white  p-5 text-center font-bold ">Task List</h1>
        </>
    );
}
export default page