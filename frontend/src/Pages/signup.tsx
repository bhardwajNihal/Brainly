import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import React from "react"

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

    // onSubmit function, to handle the form data on submission
    const onSubmit: SubmitHandler<formDataType> = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", data)
            console.log("SignUp successful!", response.data);
            alert("signup successful!")
            console.log(data);
            

        } catch (error) {
            console.log("Error signing up!", error);

        }
    }

    // now just render the UI for the form
    return <div className="parent bg-purple-600 flex justify-center items-center h-svh w-full">
        <div className="h-auto w-80 bg-white rounded p-4">
            <h2 className="text-2xl font-semibold text-center text-purple-600 mb-6">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col items-center gap-3">
                    {/* firstname */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="text" id="firstname" placeholder="Firstname..." 
                    {...register("firstname", {required:"Firstname is required!"})}
                    />
                    {errors.firstname && <p className="text-sm text-red-500 pl-4">{errors.firstname.message}</p>}
                    </div>

                    {/* lastname */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="text" id="lastname" placeholder="Lastname..." 
                    {...register("lastname", {required:"lastname is required!"})}
                    />
                    {errors.lastname && <p className="text-sm text-red-500 pl-4">{errors.lastname.message}</p>}
                    </div>

                    {/* email */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="email" id="email" placeholder="abcd@gmail.com" 
                    {...register("email", {required:"email is required!"})}
                    />
                    {errors.email && <p className="text-sm text-red-500 pl-4">{errors.email.message}</p>}
                    </div>

                    {/* password */}
                    <div className="w-full">
                    <input className="h-10 w-full bg-purple-200 pl-4 rounded-lg placeholder:text-gray-500" type="password" id="password" placeholder="Password" 
                    {...register("password", {required:"Firstname is required!"})}
                    />
                    {errors.password && <p className="text-sm text-red-500 pl-4">{errors.password.message}</p>}
                    </div>

                    <button className="bg-purple-600 text-white w-1/2 h-10 rounded-lg mt-4" type="submit">Submit</button>

                </div>
            </form>

        </div>
    </div>
}