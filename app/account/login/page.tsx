import { LoginForm } from '@/components/forms'

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center">
      <div className="max-w-md mx-auto p-8 rounded-xl bg-white">
        <header className="text-center">
          <h1 className="mb-4 text-2xl">You must Sign In to join</h1>
          <p>We&apos;re a team that guides each other</p>
        </header>
        <LoginForm />
      </div>
    </div>
  )
}
