'use client'

// React Imports
import { useState, useEffect } from 'react'
import { useCookie } from 'react-use'

type CookieConsent = {
  accepted: boolean
  required: boolean
  theme: boolean
  analytics: boolean
}

const defaultConsent: CookieConsent = {
  accepted: false,
  required: true,
  theme: true,
  analytics: true,
}

export const useCookieConsent = () => {
  const [cookieConsent, updateCookieConsent] = useCookie('cookieConsent')
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)

  useEffect(() => {
    if (cookieConsent) {
      try {
        setConsent(JSON.parse(cookieConsent))
      } catch (error) {
        console.error('Failed to parse cookie consent:', error)
      }
    }
  }, [cookieConsent])

  const saveConsent = (newConsent: Partial<CookieConsent>) => {
    const updatedConsent = { ...consent, ...newConsent }
    setConsent(updatedConsent)
    updateCookieConsent(JSON.stringify(updatedConsent))
  }

  return {
    consent,
    saveConsent,
  }
}
