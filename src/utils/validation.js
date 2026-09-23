/**
 * Client-side validation for the coaching application form.
 * Returns `{ fieldName: translationKey }` — empty when valid.
 * The component turns each key into text with t().
 */
export function validateApplication(values) {
  const errors = {}

  if (values.fullName.trim().length < 2) errors.fullName = 'form.errors.fullName'

  const age = Number(values.age)
  if (!values.age || !Number.isInteger(age) || age < 14 || age > 80) errors.age = 'form.errors.age'

  if (!values.country.trim()) errors.country = 'form.errors.country'

  const height = Number(values.height)
  if (!values.height || height < 120 || height > 230) errors.height = 'form.errors.height'

  const weight = Number(values.weight)
  if (!values.weight || weight < 35 || weight > 250) errors.weight = 'form.errors.weight'

  if (!values.goal) errors.goal = 'form.errors.goal'
  if (!values.experience) errors.experience = 'form.errors.experience'
  if (!values.program) errors.program = 'form.errors.program'

  return errors
}
