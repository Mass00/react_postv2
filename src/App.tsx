import React, {useMemo, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Posts, postsTypes} from "./components/Posts/Posts";
import {AddItem} from "./components/common/addItem";


type tasksTypes = {
    id: string
    title: string
}
type globalTasksType = {
    [key: string]: postsTypes[]
}

function App() {
    const pid1 = v1();
    const pid2 = v1();
    const [postForm, setPostForm] = useState<tasksTypes[]>([
        {id: pid1, title: 'Was muss ich lernen'},
        {id: pid2, title: 'Was soll ich kaufen'}
    ])
    const [globalTasks, setGlobalTasks] = useState<globalTasksType>(
        {
            [pid1]: [
                {id: v1(), text: 'Java Script', isDone: true},
                {id: v1(), text: 'Type Script', isDone: false},
                {id: v1(), text: 'React', isDone: false}
            ],
            [pid2]: [
                {id: v1(), text: 'das Brot', isDone: false},
                {id: v1(), text: 'der Kuchen', isDone: true},
                {id: v1(), text: 'die Wurst', isDone: false}
            ]
        })

    const addPost = (postFormId: string, text: string) =>
        setGlobalTasks(prev => ({...prev, [postFormId]: [...globalTasks[postFormId], {id: v1(), text, isDone: false}]}))
    const changeStatus = (postFormId: string, postId: string, status: boolean) =>
        setGlobalTasks(prev => ({
            ...prev, [postFormId]: [...globalTasks[postFormId]]
                .map(i => i.id === postId ? {...i, isDone: status} : i)
        }))
    const removePost = (postFormId: string, postId: string) =>
        setGlobalTasks(prev => ({...prev, [postFormId]: [...globalTasks[postFormId]].filter(i => i.id !== postId)}))
    const removePostForm = (postFormId: string) => {
        setPostForm(prev => [...prev].filter(i => i.id !== postFormId))
        delete globalTasks[postFormId]
        setGlobalTasks(globalTasks)
    }
    const addNewPostForm = (text: string) => {
        const temp = {
            id: v1(),
            title: text
        }
        setPostForm(prev => [...prev, temp])
        setGlobalTasks(prev => ({...prev, [temp.id]: []}))
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <AddItem
                    addItem={addNewPostForm}
                    errorTitle={'Taskname is required'}
                >+
                </AddItem>
            </div>
            <div className="App">

                {postForm.map(i => {
                    return <Posts
                        key={i.id}
                        title={i.title}
                        posts={globalTasks[i.id]}
                        postFormId={i.id}
                        addPost={addPost}
                        changeStatus={changeStatus}
                        removePost={removePost}
                        removePostForm={removePostForm}
                    />
                })}

            </div>
        </div>
    );
}

export default App;
