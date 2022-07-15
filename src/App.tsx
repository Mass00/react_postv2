import React, {useMemo, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Posts} from "./components/Posts/Posts";


type tasksTypes = {
    id: string
    title: string
    error: string
    searchQ: string
}

function App() {
    const [postForm, setPostForm] = useState<tasksTypes[]>([
        {id: v1(), title: 'Was muss ich lernen', error: '', searchQ: ''},
        {id: v1(), title: 'Was soll ich kaufen', error: '', searchQ: ''}
    ])
    const [globalTasks, setGlobalTasks] = useState(
        {
            [postForm[0].id]: [
                {id: v1(), text: 'Java Script', isDone: true},
                {id: v1(), text: 'Type Script', isDone: false},
                {id: v1(), text: 'React', isDone: false}
            ],
            [postForm[1].id]: [
                {id: v1(), text: 'das Brot', isDone: false},
                {id: v1(), text: 'der Kuchen', isDone: true},
                {id: v1(), text: 'die Wurst', isDone: false}
            ]
        })

    const handlerOnChangeSetSearchQ = (postFormId: string ,searchQ: string) => {
        setPostForm(prev => [...prev].map(i => i.id === postFormId ? {...i,searchQ} : i))
    }


    const handlerOnClickAddPost = (postFormId: string, text: string) =>
        setGlobalTasks(prev => ({...prev, [postFormId]: [...globalTasks[postFormId], {id: v1(), text, isDone: false}]}))
    const handlerOnChageChangeStatus = (postFormId: string, postId: string, status: boolean) =>
        setGlobalTasks(prev => ({...prev, [postFormId]: [...globalTasks[postFormId]]
                .map(i => i.id === postId ? {...i,isDone: status} : i)}))
    const handlerOnClickRemovePost = (postFormId: string, postId: string) =>
        setGlobalTasks(prev => ({...prev,[postFormId]: [...globalTasks[postFormId]].filter(i=> i.id !== postId)}))
    return (
        <div className="App">
            {postForm.map(i => {
                return <Posts
                key={i.id}
                searchQ={i.searchQ}
                title={i.title}
                posts={globalTasks[i.id]}
                postFormId={i.id}
                handlerOnClickAddPost={handlerOnClickAddPost}
                handlerOnChageChangeStatus={handlerOnChageChangeStatus}
                handlerOnClickRemovePost={handlerOnClickRemovePost}
                handlerOnChangeSetSearchQ={handlerOnChangeSetSearchQ}
            />})}

        </div>
    );
}

export default App;
