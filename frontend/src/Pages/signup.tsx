import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import { CrossIcon } from "../icons/crossIcon"
import { toast } from "react-toastify"
import { Logo } from "../Components/ui/logo"
import { useNavigate } from "react-router-dom"

// defining interface of the expected input globally
interface formDataType {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}


export const Signup: React.FC = () => {

    // destructuring the useform hook, to get required functionalities
    const { register, handleSubmit, formState: { errors } } = useForm<formDataType>()

    const navigate = useNavigate()

    // onSubmit function, to handle the form data on submission
    const onSubmit: SubmitHandler<formDataType> = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", data)
            // console.log("SignUp successful!", response);
            toast.success(response.data.message + "           Redirected to Login page!");
            // console.log(data);
            navigate("/signin")

        } catch (error:any) {
            console.log("Error signing up!", error);
            toast.error(error.response.data.message)
        }
    }

    // now just render the UI for the form
    return <div className="parent bg-purple-200 flex justify-center items-center h-svh w-full">
        
            <div className="absolute top-5 left-10">
            <Logo/>
            </div>

        <div className="h-auto w-80 bg-white rounded p-4 shadow-lg relative">
            <h2 className="text-2xl font-semibold text-center text-purple-600 mb-6">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col items-center gap-3">

                    <div className="absolute top-0 right-0 text-gray-400 p-1 m-1 rounded-lg hover:bg-purple-200"><Link to="/home"><CrossIcon size="md"/></Link></div>

                    {/* firstname */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="text" id="firstname" placeholder="Firstname..." 
                    {...register("firstname", {
                        required:"Firstname is required!",
                        minLength:{value:2,message:"minimum 2 letters required!"},
                        maxLength:{value:150,message:"Max 150 letters allowed"},
                        pattern : {
                            value : /^[A-Za-z]+$/i,
                            message : "invalid input"
                          }
                    })}
                    />
                    {errors.firstname && <p className="text-sm text-red-500 pl-4">{errors.firstname.message}</p>}
                    </div>

                    {/* lastname */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="text" id="lastname" placeholder="Lastname..." 
                    {...register("lastname", {
                        required:"Lastname is required!",
                        minLength:{value:2,message:"minimum 2 letters required!"},
                        maxLength:{value:150,message:"Max 150 letters allowed"},
                        pattern : {
                            value : /^[A-Za-z]+$/i,
                            message : "invalid input"
                          }
                    })}
                    />
                    {errors.lastname && <p className="text-sm text-red-500 pl-4">{errors.lastname.message}</p>}
                    </div>

                    {/* email */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="email" id="email" placeholder="abcd@gmail.com" 
                    {...register("email", {
                        required:"email is required!",
                        maxLength:{value:250,message:"Max 150 letters allowed"},
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                          }
                    })}
                    />
                    {errors.email && <p className="text-sm text-red-500 pl-4">{errors.email.message}</p>}
                    </div>

                    {/* password */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="password" id="password" placeholder="Password" 
                    {...register("password", 
                        { required : 'Password is required',
                        minLength : {value : 6, message : "password must be 6 characters"},
                        pattern : {value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, message: 'password must contain 1 uppercase, 1 lowercase and 1 special character'}
                      },)}
                    />
                    {errors.password && <p className="text-sm text-red-500 pl-4">{errors.password.message}</p>}
                    </div>

                    <button className="bg-purple-600 text-white w-1/2 h-10 rounded-lg mt-4" type="submit">Submit</button>

                    <div className="text-xs">Already registered? Continue <u><Link className="text-blue-500" to="/signin">Loging In</Link></u></div>
                </div>
            </form>

        </div>
    </div>
}