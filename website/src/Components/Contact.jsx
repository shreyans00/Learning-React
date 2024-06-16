import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (e) => {
        const { name, val } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: val,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname} ${data.phone} ${data.email}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="input1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="input1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="input2" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="input2" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your mobile number" />
                            </div>
                            <div className="mb-3">
                                <label for="input3" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="input3" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Feedback</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-primary mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;