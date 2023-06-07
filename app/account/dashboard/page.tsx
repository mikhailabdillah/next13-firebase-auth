import signOut from '@/services/auth/signout'

function Page() {
  return (
    <>
      <h1>Only logged in users can view this page</h1>
      <button onClick={signOut}>Logout</button>
    </>
  )
}

export default Page
