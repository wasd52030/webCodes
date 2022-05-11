import { useState } from "react"
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom"
import todos from "./data"
import ItemList from "./ItemList"
import TodoAdd from "./TodoAdd"
import Todo from "./TodoDEF"

export default function TodoList() {
    const [list, setList] = useState(todos)

    const HandleDoneState = (item: Todo) => {
        const temp = [...list]
        const index = temp.indexOf(item)
        temp[index].done = !temp[index].done
        setList(temp)
    }

    const addHandler = (title: string) => {
        const NewTodo: Todo = {
            title: title,
            done: false,
            editing: false,
        }

        setList([...list, NewTodo])
    }

    const DeleteHandler = (item: Todo) => {
        const temp = [...list]
        let index = list.indexOf(item)
        delete temp[index]
        setList(temp.filter(item => item !== undefined))
    }

    const CatchEdit = (item: Todo) => {
        const temp = [...list]
        let index = list.indexOf(item)
        temp[index].editing = !temp[index].editing
        setList(temp)
    }

    const EditHandler = (item: Todo, title: string) => {
        const temp = [...list]
        let index = list.indexOf(item)
        temp[index].title = title
        temp[index].editing = !temp[index].editing
        setList(temp)
    }

    return (
        <div>
            <TodoAdd OnAdd={addHandler} />
            <BrowserRouter>
                <div >
                    <Link style={{ marginRight: "5px" }} to='/Todo/Done'>已完成項目</Link>
                    <Link to='/Todo/UnDone'>未完成項目</Link>
                </div>

                <Switch>
                    <Route path='/Todo/Done'>
                        {
                            <ItemList
                                todos={list.filter(item => item.done === true)}
                                DoneState="已完成"
                                DoneStateHandler={HandleDoneState}
                                CatchEdit={CatchEdit}
                                OnDelete={DeleteHandler}
                                EditHandler={EditHandler}
                            />
                        }
                    </Route>
                    <Route path='/Todo/UnDone'>
                        {
                            <ItemList
                                todos={list.filter(item => item.done !== true)}
                                DoneState="未完成"
                                DoneStateHandler={HandleDoneState}
                                CatchEdit={CatchEdit}
                                OnDelete={DeleteHandler}
                                EditHandler={EditHandler}
                            />
                        }
                    </Route>

                    {/* default route */}
                    <Route exact path='/'>
                        <Redirect to='/Todo/UnDone' />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}