import '../styles/signup.css';
export const Signup = () =>{
    return(
        <div className="signup">
            <div className="signup-header">
                Sign Up
            </div>
            <form className="signupForm">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />
                <button type="submit">Sign Up</button>
            </form>

        </div>
    );
}