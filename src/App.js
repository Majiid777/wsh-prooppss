import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/headerNav/HeaderNav';
import ListCard from './components/listCard/ListCard';
import Cardd from './components/listCard/cardd/Cardd';
import { propTypes } from 'react-bootstrap/esm/Image';



const students=[
{
    id: Math.random(),
    name: "Olfa",
    course: "FS JavaScript",
    imgURl: "https://static.vecteezy.com/system/resources/previews/004/773/704/non_2x/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg",
},
{
    id: Math.random(),
    name: "Ahmed",
    course: "FS JavaScript",
    imgURl: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
},
{
    id: Math.random(),
    name: "Hatem",
    course: "FS JavaScript",
    imgURl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqdsrYfyn_O5le64oQbJvULAkU7nnafxP_g&usqp=CAU",
},
{
    id: Math.random(),
    name: "Khayreddine",
    course: "FS JavaScript",
    imgURl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7M-SGyKQ1pNCsXSi8Q-MWpEj5S3J-71f3G5w8QnWLp54ksvYBeQvCtaNk4iqC350pkGc&usqp=CAU",
},
{
    id: Math.random(),
    name: "Ali",
    course: "FS JavaScript",
    imgURl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0mY04NeynM9jLwuxyuvaqyjfwHeBJkPsEwxUO-junn3ptTn8MyFPeTVpa5sppoAu758&usqp=CAU",
},
{
    id: Math.random(),
    name: "Souad",
    course: "FS JavaScript",
    imgURl: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
},



]

const principal=[
{
    id: Math.random(),
    name: "Majid",
    course: "FS JavaScript",
    imgURl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0mY04NeynM9jLwuxyuvaqyjfwHeBJkPsEwxUO-junn3ptTn8MyFPeTVpa5sppoAu758&usqp=CAU",  
}
]





const App = () => {
  return (
    <div>
        <HeaderNav/>
        <div>
            {/* <Cardd key={el.id} el={principal}/> */}
    
          {/* <Cardd key={principal.id} el={principal}/> */}
       
        </div>
        <div>
        <ListCard esm={students}/>
        </div>
        

    </div>
  )
}

export default App