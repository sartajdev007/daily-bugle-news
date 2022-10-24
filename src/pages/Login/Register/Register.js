import { Toast } from 'bootstrap';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast'


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accept, setAccept] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photo)
                // handleVerification()
                // toast.success('Check Your Mail For Verification')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleUpdateUserProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photo: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.log(e))
    }

    // const handleVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(e => console.log(e))
    // }

    const handleAccept = (event) => {
        setAccept(event.target.checked)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photo" type="text" placeholder="Photo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccept} type="checkbox" label={<>Accept<Link to='/terms'> T&C</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accept}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;