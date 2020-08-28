import { NewsList } from "./news/NewsList.js"
import { NewsForm } from "./news/NewsEntryForm.js"
import "./news/NewsEditForm.js"
import "./weather/WeatherList.js"
import { TaskForm } from "./tasks/TaskForm.js"
import { TaskList } from "./tasks/TaskList.js"
import { friendList } from "./friends/UsersList.js"
import {eventsList} from"./events/EventsList.js"
import{newEventForm} from "./events/NewEventForm.js"
import messagesAPI from "./messages/messageData.js"
import messageList from "./messages/messageRenderHTML.js"
import { logout } from "./auth/LogoutButton.js"
import { ChatForm } from "./messages/messageEventListeners.js"



export const Nutshell = () => {
    NewsList()
    NewsForm()
    TaskForm()
    TaskList()
    friendList()
    newEventForm()
    eventsList()
    ChatForm()
    messagesAPI.messagesGetData().then(() => {messageList()})
    logout()

}


