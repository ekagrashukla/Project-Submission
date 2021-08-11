import React from 'react'
import Card from './Card'
import Heading from './Heading'

function Right() {
    return (
        <div class="right-side">
            <Heading/>
            <div className="card-wrapper">
            <Card url="https://imgk.timesnownews.com/story/chad-montano-lP5MCM6nZ5A-unsplash.jpg?tr=w-400,h-300,fo-auto" name="Mexican Taco"/>
            <Card url="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpY2UlMjBvZiUyMHBpenphfGVufDB8fDB8fA%3D%3D&w=1000&q=80" name="Farmhouse Pizza"/>
            <Card url="https://lilluna.com/wp-content/uploads/2012/08/teriyaki-chicken-burgers-resize-3.jpg" name="chicken burger"/>
            <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNleyenocjznncR_kRZgjWIaP173IJvYsm2SDI5B14DT00a56EMGp6PuMxYc_XYKNy5Nwv9tlHRxMMcQ&usqp=CAU" name="Loaded Nachos"/>
            <Card url="https://i0.wp.com/zheelicious.com/wp-content/uploads/2021/03/IMG_3191_Original.jpg?resize=870%2C773&ssl=1" name="Hakka Noodles"/>
            </div>
        </div>
    )
}

export default Right
