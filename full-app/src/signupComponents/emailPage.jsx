const EmailPage = ()=>{
    return(
        <div className="w-full flex justify-center items-center text-black-105">
        <div className="p-6 w-444 mb-5 mt-3">
          <h2 className="font-bold text-2xl mb-3 mt-3">Sign In |Create Account</h2>
          <p className="mb-3 mt-7">Enter your email to get started.</p>
          <form className="flex flex-col mb-3 mt-3">
          <label className="font-bold text-sm mt-3">Email</label>
          <input className="border border-gray-500 h-10 mb-3 mt-3 w-full focus:border-blue-105 focus:border-b-2"/>
          </form>
          <p className="mb-3 mt-3">
            By tapping Next, you agree to our{" "}
            <span className="text-blue-105 border-b border-transparent hover:border-blue-105 hover:cursor-pointer transition-colors duration-300">Privacy Policy</span> and{" "}
            <span className="text-blue-105 border-b border-transparent hover:border-blue-105 hover:cursor-pointer transition-colors duration-300">Terms & Conditions</span>.
          </p>
          <button className="mt-3 mb-6 h-12 w-full bg-blue-105 text-white font-bold text-sm hover:scale-105 transition-transform duration-300 hover:bg-blue-205">Next</button>
        </div>
        </div>
    )
}

export default EmailPage;