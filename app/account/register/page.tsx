import { RegisterForm } from '@/components/forms'

export default function RegisterPage() {
  return (
    <div className="h-screen flex items-center">
      <div className="max-w-md mx-auto p-8 rounded-xl bg-white">
        <header className="text-center">
          <h1 className="mb-4 text-2xl">Create your account</h1>
          <p>We&apos;re a team that guides each other</p>
        </header>
        <RegisterForm />
      </div>
    </div>
  )
}
