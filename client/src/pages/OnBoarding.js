import {useState} from "react";
import {useCookies} from "react-cookie";
import Nav from "../components/Nav";
import {useNavigate} from "react-router-dom";
import axios from "axios";



const OnBoarding = ({minimal, authToken, setShowModal, setIsSignUp}) => {

    const [cookies, setCookie,removeCookie] = useCookies('user');
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name:'',
        dob_day:'',
        dob_month:'',
        dob_year:'',
        show_gender:false,
        gender_identity:'',
        gender_interest:'',
        url:'',
        about:'',
        matches:[]
    })

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        console.log("handleSubmitted");
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:8000/user', { formData });
            const success = response.status === 200;
            if(success) navigate('/dashboard');
        } catch (error) {
            console.log('onboarding handleSubmit error',error)
        }
    }

    const handleChange = (e) => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        const name = e.target.name;

        setFormData((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    console.log(formData)

    return (
        <>

            <Nav minimal={true}
                 setShowModal={() => {}}
                 setIsSignUp={false}
            />
            <div className="onboarding">
                <div className="create-account-title">
                    <h2>CREATE ACCOUNT</h2>
                    <p>to fill color in your life.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">Name</label>
                        <input id="first_name"
                               type="text"
                               name="first_name"
                               placeholder="Name"
                               required={true}
                               value={formData.first_name}
                               onChange={handleChange}
                        />
                        {/*------------------DOB Section--------------------*/}
                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input id="dob_day"
                                   type="number"
                                   name="dob_day"
                                   placeholder="DD"
                                   required={true}
                                   value={formData.dob_day}
                                   onChange={handleChange}
                            />
                            <input id="dob_month"
                                   type="number"
                                   name="dob_month"
                                   placeholder="MM"
                                   required={true}
                                   value={formData.dob_month}
                                   onChange={handleChange}
                            />
                            <input id="dob_year"
                                   type="number"
                                   name="dob_year"
                                   placeholder="YYYY"
                                   required={true}
                                   value={formData.dob_year}
                                   onChange={handleChange}
                            />
                        </div>
                        {/*xxxxxxxxxxxxxxxxxx DOB Section xxxxxxxxxxxxxxxxx*/}

                        {/*--------------------Gender Section--------------------*/}
                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input id="man-gender-identity"
                                   type="radio"
                                   name="gender_identity"
                                   value="man"
                                   onChange={handleChange}
                                   checked={formData.gender_identity === 'man'}
                            />
                            <label className="gender-radio-button" htmlFor="man-gender-identity">Man</label>

                            <input id="woman-gender-identity"
                                   type="radio"
                                   name="gender_identity"
                                   value="woman"
                                   onChange={handleChange}
                                   checked={formData.gender_identity === 'woman'}
                            />
                            <label className="gender-radio-button" htmlFor="woman-gender-identity">Woman</label>

                            <input id="more-gender-identity"
                                   type="radio"
                                   name="gender_identity"
                                   value="more"
                                   onChange={handleChange}
                                   checked={formData.gender_identity === 'more'}
                            />
                            <label className="gender-radio-button" htmlFor="more-gender-identity">Other</label>

                            <label htmlFor="show-gender">Show gender on my profile</label>
                            <input id="show-gender"
                                   type="checkbox"
                                   name="show_gender"
                                   onChange={handleChange}
                                   checked={formData.show_gender}
                            />
                        </div>

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input id="man-gender-interest"
                                   type="radio"
                                   name="gender_interest"
                                   value="man"
                                   onChange={handleChange}
                                   checked={formData.gender_interest === 'man'}
                            />
                            <label className="gender-radio-button" htmlFor="man-gender-interest">Man</label>

                            <input id="woman-gender-interest"
                                   type="radio"
                                   name="gender_interest"
                                   value="woman"
                                   onChange={handleChange}
                                   checked={formData.gender_interest === 'woman'}
                            />
                            <label className="gender-radio-button" htmlFor="woman-gender-interest">Woman</label>

                            <input id="everyone-gender-interest"
                                   type="radio"
                                   name="gender_interest"
                                   value="everyone"
                                   onChange={handleChange}
                                   checked={formData.gender_interest === 'everyone'}
                            />
                            <label className="gender-radio-button" htmlFor="everyone-gender-interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input id="about"
                               type="text"
                               name="about"
                               placeholder="I like long walk..."
                               value={formData.about}
                               required={true}
                               onChange={handleChange}
                        />
                        <input type="submit" value="Submit"/>
                    </section>
                    <section>
                        <label htmlFor="url">Profile Picture</label>
                        <input
                            id="url"
                            type="url"
                            name="url"
                            value={formData.url}
                            required={true}
                            onChange={handleChange}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                        </div>
                    </section>
                </form>
            </div>
        </>
    )
}

export default OnBoarding