import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import { CrossIcon } from "../icons/crossIcon"

// defining interface of the expected input globally
interface formDataType {
    email: string,
    password: string
}


export const SignIn: React.FC = () => {

    // destructuring the useform hook, to get required functionalities
    const { register, handleSubmit, formState: { errors } } = useForm<formDataType>()

    // onSubmit function, to handle the form data on submission
    const onSubmit: SubmitHandler<formDataType> = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", data)
            console.log("SignUp successful!", response.data);
            alert("signin successful!")
            console.log(data);
            

        } catch (error) {
            console.log("Error signing In!", error);

        }
    }

    // now just render the UI for the form
    return <div className="parent bg-purple-200 flex justify-center items-center h-svh w-full">
        <div className="h-auto w-80 bg-white rounded p-4 relative">
            <h2 className="text-2xl font-semibold text-center text-purple-600 mb-6">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col items-center gap-3">

                    <div className="absolute top-0 right-0 text-gray-400 p-1 m-1 rounded-lg hover:bg-purple-200"><Link to="/home"><CrossIcon size="md"/></Link></div>

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

                    <div className="text-xs">Haven't registered? <u><Link className="text-blue-500" to="/signup">Sign Up</Link></u> now</div>
                </div>
            </form>

        </div>
    </div>
}