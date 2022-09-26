import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from '../../UI/Button/Button.UI';
import classes from './AddUser.module.css';
import { Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUser = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredCity, setEnteredCity] = useState('');

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }
    const userChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const cityChangeHandler = (event) => {
        setEnteredCity(event.target.value)
    }

    const submitHandler = () => {
        const userData = [{
            name: enteredName,
            email: enteredEmail,
            userName: enteredUserName,
            city: enteredCity

        }]
        toast.error('User added successfully')
        console.log(userData)
    }
    return (
        <div>
            <Card className={classes.login}>
                <div className="container mt-3 table">
                    <section className='d-flex justify-content-between'>
                        <div className={classes.userForm} >
                            <h3 className='text-center col-lg'>Add User</h3>
                            <Form >
                                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={nameChangeHandler} placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={emailChangeHandler} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                                <Form.Control type="text" name='username' onChange={userChangeHandler} placeholder="Enter Your Username" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg" controlId="formBasicEmail">
                                <Form.Control type="text" name='city' onChange={cityChangeHandler} placeholder="Enter Your City" />
                                </Form.Group>
                                <Button className={classes.btn} onClick={submitHandler} >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </section>
                </div>
            </Card>
            <ToastContainer hideProgressBar={true} position="top-center" autoClose={1000} />
        </div>
    )
}

export default AddUser;