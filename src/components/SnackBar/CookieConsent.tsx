'use client'

// React Imports
import { useState, ChangeEvent } from 'react'

// MUI Imports
import { Snackbar, Checkbox, Button, FormControlLabel, FormGroup, Typography, Box } from '@mui/material'

// Hook Import
import { useCookieConsent } from '@core/hooks/useCookieConsent'

export const CookieConsentSnackbar = () => {
  const { consent, saveConsent } = useCookieConsent()
  const [tempConsent, setTempConsent] = useState(consent)

  const handleAccept = () => {
    saveConsent({ ...tempConsent, accepted: true })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setTempConsent(prev => ({ ...prev, [name]: checked }))
  }

  return (
    <Snackbar open={!consent.accepted} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant='h6' gutterBottom>Cookie Preferences</Typography>
        <FormGroup>
          <Box mb={2}>
            <FormControlLabel
              control={<Checkbox disabled checked />}
              label="Required Cookies"
            />
            <Typography variant="body2" color="textSecondary">
              These cookies are essential for the website to function properly and cannot be disabled.
            </Typography>
          </Box>
          <Box mb={2}>
            <FormControlLabel
              control={<Checkbox checked={tempConsent.theme} onChange={handleChange} name="theme" />}
              label="Theme-Related Cookies"
            />
            <Typography variant="body2" color="textSecondary">
              These cookies are used to remember your theme preferences.
            </Typography>
          </Box>
          <Box mb={2}>
            <FormControlLabel
              control={<Checkbox checked={tempConsent.analytics} onChange={handleChange} name="analytics" />}
              label="Analytics Cookies"
            />
            <Typography variant="body2" color="textSecondary">
              These cookies help us understand how our website is used by collecting and reporting information anonymously.
            </Typography>
          </Box>
        </FormGroup>
        <Button variant='contained' color='primary' onClick={handleAccept} style={{ marginTop: '16px' }}>
          Accept
        </Button>
      </div>
    </Snackbar>
  )
}
