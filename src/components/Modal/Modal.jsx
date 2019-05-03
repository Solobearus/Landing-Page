import React, { useState, useEffect } from 'react'
import style from './Modal.module.css'

const Modal = (props) => {

    const [ShowModal, setShowModal] = useState(false);
    const [FormClasses, setFormClasses] = useState(style.form);
    const [mouseFromFormStartDiffX, setmouseFromFormStartDiffX] = useState(0);
    const [mouseFromFormStartDiffY, setmouseFromFormStartDiffY] = useState(0);

    //This is a referance to the form in the DOM
    let formRef = null;

    // Hook for component did mount.
    // This sets the initial position of the modal so it appears in the center of the screen.
    // And also this is important because this sets the left and top values to the dom object,
    // so that when handleDragEnd is triggered for the first time the values will already be there.
    useEffect(() => {
        moveFormToCenterOfScreen();
    }, [ShowModal])

    const moveFormToCenterOfScreen = () => {

        if(ShowModal){
            const computedStyle = window.getComputedStyle(formRef);

            //In order to move the Modal to the center of the screen this is the necessery calculation
            const computedWidth = computedStyle.getPropertyValue("Width").slice(0, -2);
            const computedHeight = computedStyle.getPropertyValue("Height").slice(0, -2);
            const computedPaddingLeft = computedStyle.getPropertyValue("padding-left").slice(0, -2);

            console.log(window.screen.width);
            console.log(window.screen.height);
            

            const newleft = (window.screen.width /2) - (computedWidth/2) - computedPaddingLeft;
            const newTop = (window.screen.height /2) - (computedHeight/2);

            formRef.style.left = newleft + "px";
            formRef.style.top = newTop + "px";
        }
    }

    // When we click either the button or the layout of the modal,
    // we want to toggle ShowModal and update wrapper's new class to trigger animation
    const handleClick = () => {

        setShowModal(!ShowModal);
        formRef.classList.toggle(style.shown);
    }

    //When we drop the modal we want to update it's new position
    const handleDragEnd = (e) => {

        const styleLeft = e.clientX - mouseFromFormStartDiffX;
        formRef.style.left = styleLeft + "px";

        const styleTop = e.clientY - mouseFromFormStartDiffY;
        formRef.style.top = styleTop + "px";
    }

    //We calculate where exactly the mouse cursor in relative to the beggining of the modal
    const handleDragStart = (e) => {

        const styleLeft = formRef.style.left.slice(0, -2);
        setmouseFromFormStartDiffX(e.clientX - styleLeft);

        const styleTop = formRef.style.top.slice(0, -2);
        setmouseFromFormStartDiffY(e.clientY - styleTop);
    }

    return (
        <div className={style.Modal}>

            {/* The button the triggers showing the modal */}
            <button onClick={() => { handleClick() }}> Start Now! </button>

            {/* This is the layout behind the form */}
            {ShowModal ?
                <div
                    className={style.layout}
                    onClick={() => { handleClick() }}
                /> : null
            }

            {/* This is the form itself */}
            <form className={style.form}
                ref={ref => {formRef = ref}}
                draggable
                onDragStart={(e) => { handleDragStart(e) }}
                onDragEnd={(e) => { handleDragEnd(e) }}
                onSubmit={(e) => { e.preventDefault(); }}
            >

                <h2>Leave us your email :-)</h2>
                <br />
                <label>email : </label>
                <input type="text" />
            </form>
        </div >
    )
}

export default Modal
