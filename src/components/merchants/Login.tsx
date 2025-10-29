'use client'

import type React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation, QueryClient, QueryClientProvider } from 'react-query'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from './PasswordInput'
// import { useToast } from "../ui/use-toast"
// import { login, signup } from '@/lib/requestUtils'
import { Loader2 } from 'lucide-react'
import { GoToHomepageButton } from '../GoToHomepage'

const queryClient = new QueryClient()

function LoginInner() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const router = useRouter()
  // const { toast } = useToast()

  // const loginMutation = useMutation(login, {
  //   onSuccess: () => {
  //     // toast({
  //     //   title: "Welcome back!",
  //     //   description: "You have successfully logged in.",
  //     // })
  //     router.push('/dashboard')
  //   },
  //   onError: (error: Error) => {
  //     // toast({
  //     //   variant: "destructive",
  //     //   title: "Login failed",
  //     //   description: error.message || "Invalid email or password",
  //     // })
  //   },
  // })

  // const signupMutation = useMutation(signup, {
  //   onSuccess: () => {
  //     // toast({
  //     //   title: "Account created!",
  //     //   description: "Please log in with your credentials.",
  //     // })
  //     setMode('login')
  //     setPassword('')
  //     setConfirmPassword('')
  //   },
  //   onError: (error: Error) => {
  //     // toast({
  //     //   variant: "destructive",
  //     //   title: "Signup failed",
  //     //   description: error.message || "Could not create account",
  //     // })
  //   },
  // })

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (mode === 'signup') {
      if (!name.trim()) {
        newErrors.name = 'Name is required'
      }
      if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters'
      }
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'Valid email is required'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // if (mode === 'login') {
    //   loginMutation.mutate({ username: email, password })
    // } else {
    //   signupMutation.mutate({ name, email, password })
    // }
  }

  // const isLoading = loginMutation.isLoading || signupMutation.isLoading
  const isLoading = false

  return (
    <Card className="w-full py-5 max-w-md shadow-xl border-0 bg-white/95 backdrop-blur">
      <CardHeader className="space-y-4 pb-6">
        <div className="flex justify-center">
          <Image
            src="/images/pitaku-logo.svg"
            width={200}
            height={100}
            alt="Pitaku for Business"
            className="w-36 h-auto object-contain"
          />
        </div>
        <div className="flex gap-2 p-1 bg-muted rounded-lg">
          <button
            type="button"
            onClick={() => {
              setMode('login')
              setErrors({})
            }}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              mode === 'login'
                ? 'bg-white text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup')
              setErrors({})
            }}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              mode === 'signup'
                ? 'bg-white text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <CardTitle className="text-xl font-bold">
            {mode === 'login' ? 'Welcome back' : 'Create account'}
          </CardTitle>
          <CardDescription className="mt-1">
            {mode === 'login'
              ? 'Enter your credentials to access your account'
              : 'Fill in your details to get started'}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setErrors((prev) => ({ ...prev, name: '' }))
                }}
                disabled={isLoading}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrors((prev) => ({ ...prev, email: '' }))
              }}
              disabled={isLoading}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              placeholder={
                mode === 'signup' ? 'At least 8 characters' : '••••••••'
              }
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setErrors((prev) => ({ ...prev, password: '' }))
              }}
              disabled={isLoading}
              className={errors.password ? 'border-destructive' : ''}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password}</p>
            )}
          </div>

          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <PasswordInput
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                  setErrors((prev) => ({ ...prev, confirmPassword: '' }))
                }}
                disabled={isLoading}
                className={errors.confirmPassword ? 'border-destructive' : ''}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {mode === 'login' && (
            <div className="flex justify-end">
              <Button
                type="button"
                variant="link"
                className="px-0 text-sm text-primary hover:text-primary/80"
                onClick={() => router.push('/forgot-password')}
              >
                Forgot password?
              </Button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[#00C853] hover:bg-[#00B248] text-white font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {mode === 'login' ? 'Signing in...' : 'Creating account...'}
              </>
            ) : mode === 'login' ? (
              'Sign In'
            ) : (
              'Create Account'
            )}
          </Button>
        </form>

        <div className="mt-5 flex items-center justify-center">
          <GoToHomepageButton />
        </div>
      </CardContent>
    </Card>
  )
}

export function Login() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginInner />
    </QueryClientProvider>
  )
}
