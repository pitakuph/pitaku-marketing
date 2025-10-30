import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

import { Login } from '@/components/merchants/Login'

export default async function Admin() {
  const session = await getServerSession(options)
  // if (!session) redirect("/");

  return (
    <>
      {session ? (
        session?.expires && new Date(session.expires) < new Date() ? (
          redirect('/merchants')
        ) : (
          redirect('/merchants/dashboard')
        )
      ) : (
        <div
          className="flex justify-center items-center h-screen bg-slate-100 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/images/login-bg.png')" }}
        >
          <Login />
        </div>
      )}
    </>
  )
}
