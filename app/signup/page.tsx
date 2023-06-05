export default function SignUpPage() {
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form>
          <div>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" placeholder="Retype password" />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
