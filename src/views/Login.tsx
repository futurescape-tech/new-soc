'use client'

// React Imports
import { FormEvent, useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Type Imports
import type { Mode } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports
import Logo from '@components/layout/shared/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// NextAuth Imports
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'

const LoginV1 = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-1-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-1-light.png'

  // Hooks
  const { lang: locale } = useParams()
  const authBackground = useImageVariant(mode, lightImg, darkImg)
  const router = useRouter()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const username = form.get('username') as string
    const password = form.get('password') as string
    if (!username || !password) return toast.error('Please fill all the fields')

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password
    })

    if (result?.error) {
      toast.error(result.error)
    } else {
      router.push(getLocalizedUrl('/', locale as Locale))
    }
  }

  return (
    <div className='flex justify-center items-center min-bs-[100dvh] is-full relative p-6'>
      <Card className='flex flex-col sm:is-[460px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href={getLocalizedUrl('/', locale as Locale)} className='flex justify-center items-center mbe-6'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography>
            </div>
            <form noValidate onSubmit={handleLogin} className='flex flex-col gap-5'>
              <TextField autoFocus fullWidth label='Email Address or Phone Number' name='username' />
              <TextField
                fullWidth
                label='Password'
                id='outlined-adornment-password'
                name='password'
                type={isPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                <FormControlLabel control={<Checkbox />} label='Remember me' />
                <Typography
                  className='text-end'
                  color='primary'
                  component={Link}
                  href={getLocalizedUrl('/forgot-password', locale as Locale)}
                >
                  Forgot password?
                </Typography>
              </div>
              <Button fullWidth variant='contained' type='submit'>
                Log In
              </Button>
              {/* create passkey button */}
              <Button fullWidth variant='outlined' type='submit'>
                Create Passkey
              </Button>
              {/* hint saying passkeys are more secure */}
              <Typography className='text-center' color='textSecondary'>
                Passkeys are more secure than passwords
              </Typography>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>New on our platform?</Typography>
                <Typography
                  component={Link}
                  href={getLocalizedUrl('/pages/auth/register-v1', locale as Locale)}
                  color='primary'
                >
                  Create an account
                </Typography>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
      <img src={authBackground} className='absolute bottom-[5%] z-[-1] is-full max-md:hidden' />
    </div>
  )
}

export default LoginV1
