import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'

interface Props {
  onBack: () => void
}

interface FormValues {
  fullName: string
  email: string
  phone: string
  animalType: string
  animalCount: string
  location: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  animalType?: string
  animalCount?: string
  location?: string
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) errors.fullName = 'Full name is required.'

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!emailRe.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  const digitsOnly = values.phone.replace(/\D/g, '')
  const invalidSequences = ['1234567890', '0000000000', '1111111111', '2222222222']
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (digitsOnly.length !== 10) {
    errors.phone = 'Please enter a valid phone number.'
  } else if (invalidSequences.includes(digitsOnly)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.animalType.trim()) errors.animalType = 'Animal type is required.'

  const count = parseInt(values.animalCount, 10)
  if (!values.animalCount) {
    errors.animalCount = 'Number of animals is required.'
  } else if (isNaN(count) || count < 1) {
    errors.animalCount = 'Must be at least 1 animal.'
  }

  if (!values.location.trim()) errors.location = 'Location is required.'

  return errors
}

function Field({
  label,
  error,
  touched,
  children,
}: {
  label: string
  error?: string
  touched?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          fontWeight: 500,
          letterSpacing: '0.04em',
          color: '#4A4238',
        }}
      >
        {label}
      </label>
      {children}
      {touched && error && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            color: '#C0392B',
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  color: '#1C1C1A',
  backgroundColor: '#FAF7F2',
  border: `1.5px solid ${hasError ? '#C0392B' : 'rgba(28,28,26,0.18)'}`,
  borderRadius: 6,
  padding: '10px 14px',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s',
})

export default function BookingForm({ onBack }: Props) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '',
    animalType: '',
    animalCount: '',
    location: '',
  })

  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  const errors = validate(values)
  const isValid = Object.keys(errors).length === 0

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }))
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTouched(t => ({ ...t, [e.target.name]: true }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const allTouched = Object.fromEntries(
      Object.keys(values).map(k => [k, true])
    ) as Record<keyof FormValues, boolean>
    setTouched(allTouched)
    if (isValid) setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Back nav */}
      <div
        className="flex items-center px-6 py-4 border-b"
        style={{ borderColor: 'rgba(28,28,26,0.10)' }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 transition-opacity hover:opacity-60"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem',
            color: '#7A7060',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div
          className="w-full"
          style={{
            maxWidth: 640,
            backgroundColor: '#ffffff',
            borderRadius: 12,
            padding: 'clamp(28px, 5vw, 56px)',
            boxShadow: '0 2px 32px rgba(28,28,26,0.08)',
          }}
        >
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center text-center gap-5 py-8">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  backgroundColor: '#E8F5E9',
                }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#2E7D32" strokeWidth="1.8" />
                  <path d="M11 18.5L16 23.5L25 13" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: '#1C1C1A',
                  margin: 0,
                }}
              >
                Thank You!
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: '#7A7060',
                  lineHeight: 1.7,
                  maxWidth: 380,
                  margin: 0,
                }}
              >
                We've received your request and will be in touch shortly — usually within 24 hours.
              </p>
              <button
                onClick={onBack}
                style={{
                  marginTop: 8,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: '#C2783A',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >
                Return to home
              </button>
            </div>
          ) : (
            /* Form */
            <>
              <h1
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#1C1C1A',
                  margin: 0,
                }}
              >
                Tell Us About Your Session
              </h1>
              <p
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  fontWeight: 300,
                  color: '#7A7060',
                  marginTop: 6,
                  marginBottom: 32,
                }}
              >
                We'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <Field label="Full Name" error={errors.fullName} touched={touched.fullName}>
                  <input
                    name="fullName"
                    type="text"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Sarah Mitchell"
                    style={inputStyle(!!(touched.fullName && errors.fullName))}
                  />
                </Field>

                <Field label="Email Address" error={errors.email} touched={touched.email}>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@email.com"
                    style={inputStyle(!!(touched.email && errors.email))}
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone} touched={touched.phone}>
                  <input
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+1 (___) ___-____"
                    style={inputStyle(!!(touched.phone && errors.phone))}
                  />
                </Field>

                <Field label="Animal Type" error={errors.animalType} touched={touched.animalType}>
                  <input
                    name="animalType"
                    type="text"
                    value={values.animalType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Cattle, Horses, Chickens"
                    style={inputStyle(!!(touched.animalType && errors.animalType))}
                  />
                </Field>

                <Field label="How Many Animals" error={errors.animalCount} touched={touched.animalCount}>
                  <input
                    name="animalCount"
                    type="number"
                    min={1}
                    value={values.animalCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="12"
                    style={inputStyle(!!(touched.animalCount && errors.animalCount))}
                  />
                </Field>

                <Field label="Location / Address" error={errors.location} touched={touched.location}>
                  <textarea
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    placeholder="Ranch name, city, state — or full address"
                    style={{
                      ...inputStyle(!!(touched.location && errors.location)),
                      resize: 'vertical',
                      minHeight: 88,
                    }}
                  />
                </Field>

                <button
                  type="submit"
                  className="transition-all hover:opacity-90 active:scale-98"
                  style={{
                    marginTop: 8,
                    width: '100%',
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: '#C2783A',
                    color: '#FAF7F2',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    border: 'none',
                    cursor: isValid ? 'pointer' : 'not-allowed',
                    opacity: isValid ? 1 : 0.55,
                  }}
                >
                  Submit Request
                </button>

                <p
                  className="text-center"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'rgba(28,28,26,0.38)',
                    marginTop: -4,
                  }}
                >
                  All fields required. Inline validation fires on blur.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
