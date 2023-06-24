import { useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';





const RegisterForm = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [mobile, mobilechange] = useState("");
    const [subject, subjectchange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, email, password, mobile, subject, address, gender };

        console.log(regobj);
    }

    return (
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>User Registeration</h1>

                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>User Name:</label>
                                    <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Full Name:</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>User Email:</label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>User Password:</label>
                                    <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone Number:</label>
                                    <input value={mobile} onChange={e => mobilechange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Subject:</label>
                                    <select value={subject} onChange={e => subjectchange(e.target.value)} className="form-control">
                                        <option value="Arts">Arts</option>
                                        <option value="Science">Science</option>
                                        <option value="Commerce">Commerce</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Address:</label>
                                    <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Gender:</label>
                                    <input type='radio' checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name='gender' value='male' className="check" ></input>
                                    <label>Male</label>
                                    <input type='radio' checked={gender === 'Female'} onChange={e => genderchange(e.target.value)} name='gender' value='Female' className="check"></input>
                                    <label>Female</label>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <a className='btn btn-primary'>Login</a>

                    </div>
                </div>
            </form>

        </div>
    );
}
export default RegisterForm;